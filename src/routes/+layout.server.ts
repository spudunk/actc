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

type RatingSource = 'cache' | 'api' | 'stale' | 'empty';

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
		const cached = kv ? await kv.get<StoredRating>(RATING_KEY, 'json') : null;
		const ageMs = cached ? Date.now() - cached.fetchedAt : null;

		if (cached && ageMs != null && ageMs < FRESH_MS) {
			logRating({ source: 'cache', kv: true, ageMs });
			return { rating: cached.rating, ratingCount: cached.ratingCount };
		}

		try {
			const fresh = await getGoogleRating(apiKey);
			if (kv) {
				await kv.put(
					RATING_KEY,
					JSON.stringify({
						rating: fresh.rating,
						ratingCount: fresh.ratingCount,
						fetchedAt: Date.now()
					})
				);
			}
			logRating({ source: 'api', kv: Boolean(kv), ageMs, status: 200 });
			return { rating: fresh.rating, ratingCount: fresh.ratingCount };
		} catch (error) {
			logRating({
				source: cached ? 'stale' : 'empty',
				kv: Boolean(kv),
				ageMs,
				error: error instanceof Error ? error.message : 'rating fetch failed'
			});
			if (cached) return { rating: cached.rating, ratingCount: cached.ratingCount };
			throw error;
		}
	})();

	// Handled here so a rejection before render does not crash the worker.
	// RatingSnippet still receives this promise and falls back if it fails.
	googleRating.catch(() => {});

	return { googleRating };
};
