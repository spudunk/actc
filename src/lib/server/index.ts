import { site } from "$lib";
import type { GoogleRating } from "$lib/types";

export const getGoogleRating = async (googleApiKey: string): Promise<GoogleRating> => {
  if (!googleApiKey) {
    throw new Error("Missing Google Maps API key");
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${site.googlePlaceID}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": googleApiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Google Places API error: ${response.status}`);
  }

  const data: { rating?: number; userRatingCount?: number } = await response.json();

  if (data.rating == null || data.userRatingCount == null) {
    throw new Error("Google rating unavailable");
  }

  return {
    rating: data.rating,
    ratingCount: data.userRatingCount,
  };
};
