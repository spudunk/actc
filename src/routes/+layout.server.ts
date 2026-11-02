import { env } from '$env/dynamic/private';
import { getGoogleRating } from '$lib/server';
import type { LayoutServerLoad } from './$types';

const SITE = 'actc';
const RATING_KEY = 'actc-google-rating';
const FRESH_MS = 24 * 60 * 60 * 1000;

type GoogleRating = {
	rating: number;
	ratingCount: number;
};

type StoredRating = GoogleRating & {
	fetchedAt: number;
};

type RatingSource = 'cache' | 'api' | 'stale' | 'empty' | 'kv_error';

function logRating(event: {
	source: RatingSource;
	kv: boolean;
	ageMs?: number | null;
	status?: number | null;
	error?: string;
}) {
	console.log(
		JSON.stringify({
			event: 'google_rating',
			site: SITE,
			...event
		})
	);
}

export const load: LayoutServerLoad = ({ platform }) => {
	const kv = platform?.env.KV;
	const apiKey = env.GOOGLE_MAPS_PLATFORM_KEY ?? '';

	const googleRating = (async (): Promise<GoogleRating> => {
		if (!kv) {
			logRating({ source: 'empty', kv: false, error: 'KV binding missing' });
			throw new Error('KV binding missing');
		}

		let cached: StoredRating | null;
		try {
			cached = await kv.get<StoredRating>(RATING_KEY, 'json');
		} catch (error) {
			logRating({
				source: 'kv_error',
				kv: true,
				error: error instanceof Error ? error.message : 'KV read failed'
			});
			throw error;
		}

		if (!cached) {
			logRating({ source: 'empty', kv: true, error: 'no cached rating' });
			throw new Error('No cached Google rating');
		}

		const ageMs = Date.now() - cached.fetchedAt;
		if (ageMs < FRESH_MS) {
			logRating({ source: 'cache', kv: true, ageMs });
			return { rating: cached.rating, ratingCount: cached.ratingCount };
		}

		try {
			const fresh = await getGoogleRating(apiKey);
			await kv.put(
				RATING_KEY,
				JSON.stringify({
					rating: fresh.rating,
					ratingCount: fresh.ratingCount,
					fetchedAt: Date.now()
				})
			);
			logRating({ source: 'api', kv: true, ageMs, status: 200 });
			return { rating: fresh.rating, ratingCount: fresh.ratingCount };
		} catch (error) {
			logRating({
				source: 'stale',
				kv: true,
				ageMs,
				error: error instanceof Error ? error.message : 'rating fetch failed'
			});
			return { rating: cached.rating, ratingCount: cached.ratingCount };
		}
	})();

	// Handled here so a rejection before render does not crash the worker.
	// RatingSnippet still receives this promise and falls back if it fails.
	googleRating.catch(() => {});

	return { googleRating };
};
