<script lang="ts">
  // Icons
  import MdiHouseSiding from "$lib/icons/house_siding_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiCountertops from "$lib/icons/countertops_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiDoorOpen from "$lib/icons/door_open_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiMop from "$lib/icons/mop_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiDeck from "$lib/icons/deck_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiCarpenter from "$lib/icons/carpenter_FILL0_wght400_GRAD0_opsz24.svg";
  // Components
  import SEO from "$lib/SEO/MetaTags.svelte";
  import Card from "$lib/Card.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import Contact from "$lib/Contact.svelte";
  import ReviewLinks from "$lib/ReviewLinks.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";
  // Data
  import { site, homeGallery as gallery } from "$lib";
  import { organizationSchema, websiteSchema } from "$lib/schemas";
</script>

<LdTag schema={organizationSchema} />
<LdTag schema={websiteSchema} />
<SEO url={site.url} />

<svelte:head>
  <!-- Preload Hero image for Performance -->
  <link
    rel="preload"
    as="image"
    href="https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw/cb913a2d-0214-4b3b-956a-6e91585c2700/public"
  />
</svelte:head>

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
      class="container w-full -mt-12 -mb-12 grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8"
    >
      <Card title={"Windows & Doors"} image={MdiDoorOpen} link="/windowsdoors">
        <p>Expert installation for longevity and energy efficiency</p>
        <ul class="list-disc list-outside pl-4">
          <li>Reduce your heating and cooling bill</li>
          <li>Secure your home</li>
        </ul>
      </Card>
      <Card title={"Siding"} image={MdiHouseSiding} link="/siding">
        <p>
          Long lasting exteriors to keep the outside out and look great doing it
        </p>
        <ul class="list-disc list-outside pl-4">
          <li>Protect your home for decades</li>
          <li>Improve fire safety</li>
        </ul>
      </Card>
      <Card title={"Kitchen & Bath"} image={MdiCountertops} link="/kitchenbath">
        <p>Build the kitchen of your dreams without the nightmares</p>
        <ul class="list-disc list-outside pl-4">
          <li>Prevent mold and mildew by design</li>
          <li>Love your healthier home more</li>
          <li>Impress with true craftsmanship</li>
        </ul>
      </Card>
      <Card title={"Flooring"} image={MdiMop} link="/flooring">
        <p>Floors that will look great and last a long time</p>
        <ul class="list-disc list-outside pl-4">
          <li>Easier cleaning</li>
          <li>Smooth and seamless thresholds</li>
          <li>Enjoy walking barefoot again</li>
        </ul>
      </Card>
      <Card title={"Decks & Covers"} image={MdiDeck} link="/decks">
        <p>Enjoy the outdoors from the comfort of your home</p>
        <ul class="list-disc list-outside pl-4">
          <li>Custom decks for all occasions</li>
          <li>Standalone outbuildings</li>
          <li>Be "oudoorsy", enjoy wine on the deck</li>
        </ul>
      </Card>
      <Card title={"Dryrot Repair"} image={MdiCarpenter} link="/dryrot">
        <p>
          Fix framing behind the sheetrock to maximize the life of your remodel
        </p>
        <ul class="list-disc list-outside pl-4">
          <li>Replace studs and headers</li>
          <li>Give tired doorframes a new life</li>
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
          <span class="text-2xl h-2 inline-block absolute -left-4">
            &ldquo;
          </span>
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

      <ReviewLinks />
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <Carousel {gallery} />
      <p class="my-4">
        <a href="#services" class="link text-lg">
          More photos on Service Pages &UpArrow;
        </a>
      </p>
    </div>
  </section>

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>

  <section id="finance" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Financing</h2>
      <p class="max-w-prose my-4">
        Transform your kitchen or bath without the upfront stress—financing is
        now easier than ever with Acorn Finance. Get pre-qualified in minutes
        for competitive rates and flexible terms tailored to your project, so
        you can start enjoying your dream remodel today. Apply securely through
        our trusted partner and let's make it happen!
      </p>
      <a
        class="flex w-fit gap-2 py-1 px-2 rounded no-underline text-white bg-green-800 shadow shadow-green-600"
        target="_blank"
        href={site.financeUrl}
      >
        Apply Now
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/></svg>
      </a>
    </div>
  </section>
</main>
