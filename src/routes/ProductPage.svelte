<script lang="ts">
  import SEO from "$lib/SEO/MetaTags.svelte";
  import ImageGrid from "$lib/ImageGrid.svelte";
  import Contact from "$lib/Contact.svelte";
  import type { ImageGallery, SiteData } from "$lib/types";
  export let site: SiteData;
  export let route: string;
  export let gallery: ImageGallery | undefined = undefined;
  export let title: string;
  export let description: string;
</script>

<SEO url={`${site.url}${route}`} {title} {description} />

<main class="relative">
  <section id="about" class="mt-24 mb-16">
    <div class="container">
      <slot />
    </div>
  </section>

  {#if gallery}
    <section id="gallery">
      <div class="container">
        <h2 class="text-3xl mb-4 font-display">Gallery</h2>
        <ImageGrid {gallery} class="bg-neutral-200" />
      </div>
    </section>
  {/if}

  <section id="contact" class="my-16">
    <div class="container">
      <h2 class="text-3xl mb-4 font-display">Contact</h2>
      <Contact />
    </div>
  </section>
</main>
