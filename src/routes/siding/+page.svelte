<script>
  import SEO from "$lib/SEO.svelte";
  import ImageGrid from "$lib/ImageGrid.svelte";
  const images = [
    { id: "1", path: "/images/gallery/baths.jpg", alt: "bath sinks" },
    { id: "8", path: "/images/gallery/job pictures74.jpg", alt: "siding" },
    { id: "2", path: "/images/gallery/baths2.jpg", alt: "bathtub" },
    {
      id: "4",
      path: "/images/gallery/decks and covers.jpg",
      alt: "deck cover",
    },
    { id: "5", path: "/images/gallery/flooring (2).jpg", alt: "flooring" },
    { id: "12", path: "/images/gallery/job pictures98.jpg", alt: "kitchen" },
    { id: "7", path: "/images/gallery/job pictures68.jpg", alt: "siding" },
    { id: "9", path: "/images/gallery/job pictures77.jpg", alt: "siding" },
    {
      id: "10",
      path: "/images/gallery/job pictures80.jpg",
      alt: "kitchen in progress",
    },
    { id: "13", path: "/images/gallery/job pictures99.jpg", alt: "kitchen" },
    {
      id: "11",
      path: "/images/gallery/job pictures84.jpg",
      alt: "finished bath",
    },
    { id: "14", path: "/images/gallery/kitchens3.jpg", alt: "kitchen" },
    { id: "15", path: "/images/gallery/out bldgs2.jpg", alt: "out building" },
    { id: "16", path: "/images/gallery/siding (2).jpg", alt: "siding" },
    { id: "17", path: "/images/gallery/siding & painting.jpg", alt: "siding" },
    { id: "18", path: "/images/gallery/windows (2).jpg", alt: "siding" },
    { id: "6", path: "/images/gallery/flooring (4).jpg", alt: "flooring" },
    {
      id: "3",
      path: "/images/gallery/decks and covers (3).jpg",
      alt: "deck cover",
    },
  ];
</script>

<SEO />

<main class="relative">
  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h1 class="text-4xl mb-4 font-display">Siding</h1>
      <p class="text-lg my-2 max-w-prose">
        Under normal conditions, your roof keeps most of the weather out of your
        walls and framing. But, extreme weather, fire, and pests attack from the
        sides. Once the threats make it past the siding, there's nothing left to
        stop them from destroying your home from the inside out.
      </p>
      <p class="text-lg my-2 max-w-prose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.
        Id, labore numquam? Quia ipsa doloremque nobis consectetur, illo aut
        alias ratione ea a. Harum est dolores consequuntur eius at.
      </p>
      <p class="text-lg my-2 max-w-prose"></p>
      <p class="text-lg my-2 max-w-prose"></p>
      <p class="text-lg my-2 max-w-prose"></p>
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
      <div class="flex flex-col gap-2">
        <p>Call or Email to start making your home better today.</p>
        <p class="text-xl">
          Email: <a
            class="link p-1"
            target="_blank"
            href="mailto:mike@actc.pro"
          >
            mike@actc.pro
          </a>
        </p>
        <p class="text-xl">
          Phone: <a class="link p-1" target="_blank" href="tel:+19712015990">
            (971) 201-5990
          </a>
        </p>
      </div>
    </div>
  </section>
</main>
