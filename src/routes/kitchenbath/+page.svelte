<script>
  import { site, kitchenGallery as gallery } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Kitchen & Bath",
    subheading: "Update Your Interior to Your Satisfaction",
    paragraphs: [
      "Kitchens and bathrooms are often the first rooms that start to look outdated. If your home has seen better days, or you just want a more modern look, turn to a skilled and credible remodeling contractor.",
      "Reach out for a free estimate.",
    ],
  };
</script>

<ProductPage
  {site}
  {gallery}
  route="/kitchenbath"
  title="A Custom Touch Construction - Portland Kitchen and Bathroom Remodel Contractor"
  description="A Custom Touch Construction - Kitchen and Bath Contractor - Serving Portland and surrounding areas since 1995"
>
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
