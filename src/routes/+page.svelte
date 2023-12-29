<script>
  import Card from "$lib/Card.svelte";
  import MdiWindowClosed from "$lib/icons/window_closed_FILL0_wght400_GRAD0_opsz24.svg";
</script>

<main class="relative">
  <section id="hero" class="min-h-[90vh] bg-stone-700"></section>
  <section id="services" class="">
    <div
      class="container w-full -mt-12 -mb-12 grid sm:grid-cols-3 justify-items-center gap-8"
    >
      <Card title={"Windows"} image={MdiWindowClosed}>
        <p>Expert installation for longevity and efficiency</p>
        <ul class="list-disc list-inside">
          <li>Energy Efficient</li>
          <li>Long Warranty</li>
          <li>Expert Service</li>
        </ul>
      </Card>
      <Card title={"Windows"} image={MdiWindowClosed}>
        <p>Expert installation for longevity and efficiency</p>
        <ul class="list-disc list-inside">
          <li>Energy Efficient</li>
          <li>Long Warranty</li>
          <li>Expert Service</li>
        </ul>
      </Card>
      <Card title={"Windows"} image={MdiWindowClosed}>
        <p>Expert installation for longevity and efficiency</p>
        <ul class="list-disc list-inside">
          <li>Energy Efficient</li>
          <li>Long Warranty</li>
          <li>Expert Service</li>
        </ul>
      </Card>
    </div>
  </section>

  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h2 class="text-3xl mb-4">About</h2>
      <p>
        Mike has been in the construction industry for 25 years and started A
        Custom Touch Construction in 2022 to improve the window offerings in the
        Portland Area
      </p>
    </div>
  </section>

  <section id="contact" class="my-8">
    <div class="container">
      <h2 class="text-3xl mb-4">Contact</h2>
      <p></p>
    </div>
  </section>
</main>
