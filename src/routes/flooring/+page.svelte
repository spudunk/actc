<script>
  import { site, flooringGallery as gallery } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Flooring",
    subheading: "Seamless, easy to clean, long lasting.",
    paragraphs: [
      "Flooring is more than just a surface beneath our feet; it's a foundation that sets the tone for the entire atmosphere of a home. Choosing the right flooring can transform a space from mundane to magnificent, making it a crucial element of any home improvement journey. ",
      "The choice of flooring materials, from the timeless elegance of hardwood to the sleek sophistication of tile or the cozy comfort of plush carpeting, becomes a defining feature that reflects the homeowner's style. Additionally, the right flooring contributes to a healthier living environment, resisting allergens and facilitating easy cleaning for optimal indoor air quality.",
    ],
  };
</script>

<ProductPage
  {site}
  {gallery}
  route="/flooring"
  title="Portland Flooring Contractor"
  description="A Custom Touch Construction - Flooring Contractor - Serving Portland and surrounding areas since 1995"
>
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
