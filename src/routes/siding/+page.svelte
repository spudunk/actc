<script>
  import SEO from "$lib/SEO/MetaTags.svelte";
  import ImageGrid from "$lib/ImageGrid.svelte";
  import Contact from "$lib/Contact.svelte";
  import { site } from "$lib";
  const images = [
    { id: "7", path: "/images/gallery/job pictures68.jpg", alt: "siding" },
    { id: "9", path: "/images/gallery/job pictures77.jpg", alt: "siding" },
    { id: "16", path: "/images/gallery/siding (2).jpg", alt: "siding" },
    { id: "17", path: "/images/gallery/siding & painting.jpg", alt: "siding" },
    { id: "18", path: "/images/gallery/windows (2).jpg", alt: "siding" },
  ];
</script>

<SEO url={`${site.url}siding`} />

<main class="relative">
  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h1 class="text-4xl mb-4 font-display">Siding</h1>
      <p class="text-xl my-4 max-w-prose">
        Protect your home under all conditions.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Under normal conditions, your roof keeps most of the weather out of your
        walls and framing. But, extreme weather, fire, and pests attack from the
        sides.
      </p>
      <p class="text-lg my-2 max-w-prose">
        If threats make it past the siding, there's nothing left to stop them
        from destroying your home from the inside out.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Let us help you choose and professionally install high quality siding
        that will protect your home for decades to come.
      </p>
      <!-- <p class="text-lg my-2 max-w-prose"></p> -->
      <!-- <p class="text-lg my-2 max-w-prose"></p> -->
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <ImageGrid {images} class="bg-neutral-200" />
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
