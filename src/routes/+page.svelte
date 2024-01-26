<script lang="ts">
  import Card from "$lib/Card.svelte";
  import MdiHouseSiding from "$lib/icons/house_siding_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiCountertops from "$lib/icons/countertops_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiDoorOpen from "$lib/icons/door_open_FILL0_wght400_GRAD0_opsz24.svg";
  import SEO from "$lib/SEO/MetaTags.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import Contact from "$lib/Contact.svelte";
  import { site, homeGallery as gallery } from "$lib";
</script>

<SEO url={site.url} />

<main class="relative">
  <section
    id="hero"
    class="-z-10 relative min-h-[90vh] flex flex-col justify-center"
  >
    <div
      class="absolute top-0 left-0 bottom-0 right-0 overflow-x-clip bg-kitchen bg-cover bg-center"
    ></div>
    <div
      class="mix-blend-multiply backdrop-blur opacity-80 absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-neutral-500 via-neutral-950 to-neutral-500"
    ></div>
    <div
      class="font-display font-light absolute top-0 left-0 bottom-0 right-0 container flex flex-col gap-6 justify-center items-center text-center h-full"
    >
      <p class=" md:hidden text-xl text-neutral-200">
        {site.company.name}
      </p>
      <h1 class="text-3xl sm:text-4xl md:text-5xl text-neutral-200">
        The Better Remodel Contractor for <br class="hidden md:inline" /> Portland
        and Surrounding Areas
      </h1>
      <p class="text-xl sm:text-2xl md:text-3xl text-neutral-200">
        {site.subheading}
      </p>
    </div>
  </section>
  <section id="services" class="">
    <div
      class="container w-full -mt-12 -mb-12 grid sm:grid-cols-3 justify-items-center gap-8"
    >
      <Card title={"Windows & Doors"} image={MdiDoorOpen} link="/windowsdoors">
        <p>Expert installation for longevity and energy efficiency</p>
        <ul class="list-disc list-inside">
          <li>Reduce your heating and cooling bill</li>
          <li>Secure your home</li>
        </ul>
      </Card>
      <Card title={"Siding"} image={MdiHouseSiding} link="/siding">
        <p>
          Long lasting exteriors to keep the outside out and look great doing it
        </p>
        <ul class="list-disc list-inside">
          <li>Protect your home for decades</li>
          <li>Improve fire safety</li>
        </ul>
      </Card>
      <Card title={"Kitchen & Bath"} image={MdiCountertops} link="/kitchenbath">
        <p>Build the kitchen of your dreams without the nightmares</p>
        <ul class="list-disc list-inside">
          <li>Prevent mold and mildew by design</li>
          <li>Live healthier and love home more</li>
          <li>Impress with true craftsmanship</li>
        </ul>
      </Card>
    </div>
  </section>

  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">About</h2>
      <p class="my-4">
        Mike started A Custom Touch Construction in 1995 with a purpose. While
        skills and techniques have improved over 27 years, the core values have
        remained the same.
      </p>
      <div
        class="text-lg px-2 py-2 rounded bg-neutral-200 flex flex-col gap-2 font-serif"
      >
        <p class="relative ml-4">
          <span class="text-2xl h-2 inline-block absolute -left-4">&ldquo;</span
          >
          I was tired of seeing customers get screwed by contractors. It’s all about
          the customer for me.
        </p>
        <p class="ml-4">
          I don’t have a single CCB complaint. I acknowledge my mistakes and
          work to make things right. I don’t leave until they’re happy.
        </p>
        <p class="font-bold text-green-900 text-xl ml-4">
          I’d rather lose money than leave an unhappy customer.
        </p>
        <p class="ml-4">
          The damage to my reputation is just not worth it.
          <span class="text-2xl h-2 inline-block"> &rdquo; </span>
        </p>
        <p class="font-bol ml-4">- Mike Shurts</p>
      </div>

      {#each site.socials as social}
        {#if social.reviewLink && social.reviewText}
          
        <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
          <img class="h-6 inline-block" src={social.icon} alt={social.iconAlt} />
          <a
            target="_blank"
            class="link p-2"
            href={social.reviewLink}
          >
            {social.reviewText}
          </a>
        </p>
        {/if}
      {/each}

    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <Carousel {gallery} />
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
