<script>
  import Card from "$lib/Card.svelte";
  import MdiWindowClosed from "$lib/icons/window_closed_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiHouseSiding from "$lib/icons/house_siding_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiCountertops from "$lib/icons/countertops_FILL0_wght400_GRAD0_opsz24.svg";
  import MdiDoorOpen from "$lib/icons/countertops_FILL0_wght400_GRAD0_opsz24.svg";
  import SEO from "$lib/SEO.svelte";
</script>

<SEO />

<main class="relative">
  <section
    id="hero"
    class="min-h-[90vh] bg-gradient-to-b from-amber-950 via-neutral-900 to-neutral-800 flex flex-col justify-center"
  >
    <div
      class="container flex flex-col gap-6 justify-center items-center text-center h-full"
    >
      <p class=" md:hidden text-xl text-neutral-200">
        A Custom Touch Construction
      </p>
      <h1 class="text-3xl sm:text-4xl text-neutral-200">
        The Better Kitchen Contractor for Portland and Surrounding Areas
      </h1>
      <p class="text-xl sm:text-2xl text-neutral-200">
        Proudly improving homes since 1995
      </p>
    </div>
  </section>
  <section id="services" class="">
    <div
      class="container w-full -mt-12 -mb-12 grid sm:grid-cols-3 justify-items-center gap-8"
    >
      <Card title={"Windows & Doors"} image={MdiDoorOpen}>
        <p>Expert installation for longevity and energy efficiency</p>
        <ul class="list-disc list-inside">
          <li>Reduce your heating and cooling bill</li>
          <li>Secure your home</li>
        </ul>
      </Card>
      <Card title={"Siding"} image={MdiHouseSiding}>
        <p>
          Long lasting exteriors to keep the outside out and look great doing it
        </p>
        <ul class="list-disc list-inside">
          <li>Protect your home for decades</li>
          <li>Improve fire safety</li>
        </ul>
      </Card>
      <Card title={"Kitchen & Bath"} image={MdiCountertops}>
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
      <h2 class="text-3xl mb-4">About</h2>
      <p class="my-4">
        Mike started A Custom Touch Construction in 1995 with a purpose. While
        skills and techniques have improved over 27 years, the core values have
        remained the same.
      </p>
      <div class="text-lg px-2 py-2 rounded bg-indigo-50 flex flex-col gap-2">
        <p class="relative ml-4">
          <span class="text-2xl h-2 inline-block absolute -left-4">&ldquo;</span
          >
          I was tired of seeing constumers get screwed by contractors. It’s all about
          the constumer for me.
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
    </div>
  </section>

  <section id="contact" class="my-8">
    <div class="container">
      <h2 class="text-3xl mb-4">Contact</h2>
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
