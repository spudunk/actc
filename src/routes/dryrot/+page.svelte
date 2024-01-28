<script>
  import SEO from "$lib/SEO/MetaTags.svelte";
  import ImageGrid from "$lib/ImageGrid.svelte";
  import Contact from "$lib/Contact.svelte";
  import { site } from "$lib";
</script>

<SEO url={`${site.url}/dryrot`} />

<main class="relative">
  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <h1 class="text-4xl mb-4 font-display">Dryrot Repair</h1>
      <p class="text-xl my-4 max-w-prose">
        Your entire remodel hangs on your framing.
      </p>
      <p class="text-lg my-2 max-w-prose">
      
      </p>
      <p class="text-lg my-2 max-w-prose">
      
      </p>
      <p class="text-lg my-2 max-w-prose">
     
      </p>
      <p class="text-lg my-2 max-w-prose">
      
      </p>
      <p class="text-lg my-2 max-w-prose">
       
      </p>
    </div>
  </section>

  <!-- 
  <section id="gallery">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Gallery</h2>
      <ImageGrid {gallery} class="bg-neutral-200" />
    </div>
  </section> 
  -->

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
