<script>
  import { site, windowsGallery as gallery } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Windows & Doors",
    subheading: "A Lot Hinges on Your Doors and Windows",
    paragraphs: [
      "The most common sources of drafts and energy waste are the openings to your home. Not only do doors and windows protect your home from unauthorized entry, but they keep the conditioned air in and the outside air out.",
      "Expert installation of your windows and doors ensures that you're getting the best seal possible and that those seals will last as long as they're designed to.",
      "Improper installation can result in drafts, excessive seal wear, and additional energy waste.",
      `Additionally, the anti-carding mechanism on door locks requires precision adjustment. Improperly set door latches enable "jimmying", or bypassing the lock with just a credit card or similar tool.`,
      "Trust the experts when closing in your home. We'll make sure what's supposed to stay outside <em>stays outside</em> .",
    ],
  };
</script>

<ProductPage
  {site}
  {gallery}
  route="/windowsdoors"
  title="A Custom Touch Construction - Portland Windows and Doors Contractor"
  description="A Custom Touch Construction - Windows and Doors Contractor - Serving Portland and surrounding areas since 1995"

>
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
