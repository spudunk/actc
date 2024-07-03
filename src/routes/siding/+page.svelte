<script>
  import { site, sidingGallery as gallery } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Siding",
    subheading: "Protect your home under all conditions.",
    paragraphs: [
      "Under normal conditions, your roof keeps most of the weather out of your walls and framing. But, extreme weather, fire, and pests attack from the sides.",
      "If threats make it past the siding, there's nothing left to stop them from destroying your home from the inside out.",
      "Let us help you choose and professionally install high quality siding that will protect your home for decades to come.",
    ],
  };
</script>

<ProductPage
  {site}
  {gallery}
  route="/siding"
  title="Portland Siding Contractor"
  description="A Custom Touch Construction - Siding Contractor - Serving Portland and surrounding areas since 1995"
>
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
