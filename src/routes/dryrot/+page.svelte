<script>
  import { site } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Dryrot Repair",
    subheading: "Your entire remodel hangs on your framing.",
    paragraphs: [
      "Dry rot might be hidden, but its impact on your home is anything but subtle. Our dry rot repair services go beyond patching up the visible damage; we delve deep to identify and eradicate the root cause. Preserving the structural integrity of your home is our mission.",
      "Timely dry rot repairs aren't just about aesthetics; they're about safeguarding your investment and ensuring the health of your living space. Trust us to leverage our decades of experience to address dry rot issues comprehensively, protecting your home and securing its foundation for the years to come.",
    ],
  };
</script>

<ProductPage
  {site}
  route="/dryrot"
  title="Dry Rot Repair in Portland, OR"
  description="A Custom Touch Construction - Dry Rot Repair Contractor - Serving Portland and surrounding areas since 1995"
>
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
