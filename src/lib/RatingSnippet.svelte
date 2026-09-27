<script lang="ts">
  import { site } from "$lib";
  import type { GoogleRating } from "$lib/types";
  import StarRating from "./StarRating.svelte";

  export let googleRating: Promise<GoogleRating>;

  const fallback = site.rating;
  const google = site.socials.find((social) => social.id === "google");
  const reviewsUrl =
    google?.link ?? google?.reviewLink ?? site.googleGetReviewLink ?? site.url;
</script>

<div class="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
  <a
    href={reviewsUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="hover:opacity-80 transition"
    aria-label="Read our Google reviews"
  >
    {#await googleRating}
      <StarRating
        score={fallback.score}
        count={fallback.count}
        label="reviews"
      />
    {:then rating}
      <StarRating
        score={rating.rating}
        count={rating.ratingCount}
        label="reviews"
      />
    {:catch}
      <StarRating
        score={fallback.score}
        count={fallback.count}
        label="reviews"
      />
    {/await}
  </a>
</div>
