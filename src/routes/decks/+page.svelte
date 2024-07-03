<script>
  import { site, decksGallery as gallery } from "$lib";
  import ProductPage from "../ProductPage.svelte";
  const copy = {
    h1: "Decks & Covers",
    subheading: "Outdoor spaces for all occasions",
    paragraphs: [
      "Decks and covers are not merely extensions of your home; they are gateways to a lifestyle enriched by the great outdoors. From hosting lively gatherings to offering a peaceful escape, a well-designed deck becomes an integral part of your lifestyle.",
      "Covers offer a protective layer, ensuring you can enjoy your outdoor space in all weather conditions. Shielded from the sun, rain, or snow, your deck becomes a year-round retreat, offering a comfortable escape and expanding your living space.",
      "In essence, decks and covers are transformative features that seamlessly blend indoor and outdoor living, offering a space for relaxation, entertainment, and increased property appeal.",
    ],
  };
</script>

<ProductPage
  {site}
  {gallery}
  route="/decks"
  title="A Custom Touch Construction - Portland Decks and Covers Contractor"
  description="A Custom Touch Construction - Decks and Covers Contractor - Serving Portland and surrounding areas since 1995"
>
  <h1 class="text-4xl mb-4 font-display">{copy.h1}</h1>
  <p class="text-xl my-4 max-w-prose">{copy.subheading}</p>
  {#each copy.paragraphs as pCopy, i (i)}
    <p class="text-lg my-2 max-w-prose">{@html pCopy}</p>
  {/each}
</ProductPage>
