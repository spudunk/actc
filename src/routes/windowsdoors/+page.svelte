<script>
  import SEO from "$lib/SEO/MetaTags.svelte";
  import ImageGrid from "$lib/ImageGrid.svelte";
  import Contact from "$lib/Contact.svelte";
  const images = [
    { id: "8", path: "/images/gallery/job pictures74.jpg", alt: "siding" },
    {
      id: "4",
      path: "/images/gallery/decks and covers.jpg",
      alt: "deck cover",
    },
    { id: "7", path: "/images/gallery/job pictures68.jpg", alt: "siding" },
    { id: "9", path: "/images/gallery/job pictures77.jpg", alt: "siding" },
    { id: "16", path: "/images/gallery/siding (2).jpg", alt: "siding" },
    { id: "17", path: "/images/gallery/siding & painting.jpg", alt: "siding" },
    { id: "18", path: "/images/gallery/windows (2).jpg", alt: "siding" },
  ];
</script>

<SEO />

<main class="relative">
  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h1 class="text-4xl mb-4 font-display">Windows & Doors</h1>
      <p class="text-xl my-4 max-w-prose">
        A Lot Hinges on Your Doors and Windows
      </p>
      <p class="text-lg my-2 max-w-prose">
        The most common sources of drafts and energy waste are the openings to
        your home. Not only do doors and windows protect your home from
        unauthorized entry, but they keep the conditioned air in and the outside
        air out.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Expert installation of your windows and doors ensures that you're
        getting the best seal possible and that those seals will last as long as
        they're designed to.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Improper installation can result in drafts, excessive seal wear, and
        additional energy waste.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Additionally, the anti-carding mechanism on door locks requires
        precision adjustment. Improperly set door latches enable "jimmying", or
        bypassing the lock with just a credit card or similar tool.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Trust the experts when closing in your home. We'll make sure what's
        supposed to stay outside <em>stays outside</em> .
      </p>
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
