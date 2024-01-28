<script>
  import { site, flooringGallery as gallery } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Flooring",
    subheading: "Seamless, easy to clean, long lasting.",
    paragraphs: [],
  };
</script>

<ProductPage {site} {gallery} route="/flooring">
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
