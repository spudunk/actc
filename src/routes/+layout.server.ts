import { env } from '$env/dynamic/private';
import { getGoogleRating } from '$lib/server';
import type { LayoutServerLoad } from './$types';

const RATING_KEY = 'actc-google-rating';
const FRESH_MS = 24 * 60 * 60 * 1000;


type GoogleRating = {
  rating: number;
  ratingCount: number;
};

type StoredRating = GoogleRating & {
	fetchedAt: number;
};

export const load: LayoutServerLoad = ({ platform }) => {
	const kv = platform?.env.KV;
	const apiKey = env.GOOGLE_MAPS_PLATFORM_KEY ?? '';

	const googleRating = (async (): Promise<GoogleRating> => {
		const cached = kv ? await kv.get<StoredRating>(RATING_KEY, 'json') : null;

		if (cached && Date.now() - cached.fetchedAt < FRESH_MS) {
			return { rating: cached.rating, ratingCount: cached.ratingCount };
		}

		const fresh = await getGoogleRating(apiKey);
		if (kv) {
			await kv.put(RATING_KEY, JSON.stringify({ ...fresh, fetchedAt: Date.now() }));
		}
		return fresh;
	})();

	// Handled here so a rejection before render does not crash the worker.
	// RatingSnippet still receives this promise and falls back if it fails.
	googleRating.catch(() => {});

	return { googleRating };
};
