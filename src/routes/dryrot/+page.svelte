<script>
  import { site } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Dryrot Repair",
    subheading: "Your entire remodel hangs on your framing.",
    paragraphs: [],
  };
</script>

<ProductPage {site} route="/dryrot">
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
