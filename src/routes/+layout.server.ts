import { env } from '$env/dynamic/private';
import { getGoogleRating } from '$lib/server';
import type { GoogleRating } from '$lib/types';
import type { LayoutServerLoad } from './$types';

const RATING_KEY = 'actc-google-rating';
const FRESH_MS = 24 * 60 * 60 * 1000;

type StoredRating = GoogleRating & {
	fetchedAt: number;
};

export const load: LayoutServerLoad = ({ platform }) => {
	const kv = platform?.env.KV;
	const apiKey = env.GOOGLE_MAPS_PLATFORM_KEY ?? '';

	const googleRating = (async (): Promise<GoogleRating> => {
		const cached = kv ? await kv.get<StoredRating>(RATING_KEY, 'json') : null;
		const stale =
			cached &&
			cached.rating != null &&
			cached.ratingCount != null
				? { rating: cached.rating, ratingCount: cached.ratingCount }
				: null;

		if (stale && cached && Date.now() - cached.fetchedAt < FRESH_MS) {
			return stale;
		}

		try {
			const fresh = await getGoogleRating(apiKey);
			if (kv) {
				await kv
					.put(RATING_KEY, JSON.stringify({ ...fresh, fetchedAt: Date.now() }))
					.catch(() => {});
			}
			return fresh;
		} catch (error) {
			if (stale) return stale;
			throw error;
		}
	})();

	// Mark the rejection handled so a failure before render does not crash the worker.
	// The component still receives this rejecting promise and falls back itself.
	googleRating.catch(() => {});

	return { googleRating };
};
