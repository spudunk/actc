<script>
  import SEO from "$lib/SEO/MetaTags.svelte";
  import ImageGrid from "$lib/ImageGrid.svelte";
  import Contact from "$lib/Contact.svelte";
  import { site, kitchenGallery as gallery } from "$lib";

</script>

<SEO url={`${site.url}/kitchenbath`} />

<main class="relative">
  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h1 class="text-4xl mb-4 font-display">Kitchen & Bath</h1>
      <p class="text-xl my-4 max-w-prose">
        Update Your Interior to Your Satisfaction
      </p>
      <p class="text-lg my-2 max-w-prose">
        Kitchens and bathrooms are often the first rooms that start to look
        outdated. If your home has seen better days, or you just want a more
        modern look, turn to a skilled and credible remodeling contractor.
      </p>
      <p class="text-lg my-2 max-w-prose">Reach out for a free estimate.</p>
      <!-- <p class="text-lg my-2 max-w-prose"></p> -->
      <!-- <p class="text-lg my-2 max-w-prose"></p> -->
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <ImageGrid {gallery} class="bg-neutral-200" />
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
