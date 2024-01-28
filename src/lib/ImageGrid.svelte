<script lang="ts">
  import type { ImageGallery } from "$lib/types";
  export let gallery: ImageGallery;
  export let debug = true;
  let selected: number | undefined;
</script>

<div
  class={`${
    $$props.class ? $$props.class : ""
  } relative rounded px-1 py-4 flex gap-4 w-fit flex-wrap justify-evenly `}
>
  {#each gallery.images as image, index (image.id)}
    <button
      class="relative w-fit overflow-clip flex justify-center"
      on:click={() => {
        selected = index;
        document.body.style.overflow = "hidden";
      }}
    >
      {#if debug}
        <span class="absolute top-2 right-2 p-1 bg-neutral-50 bg-opacity-50 text-right">
          <!-- {image.id}<br /> -->
          {image.filename}
        </span>
      {/if}
      <img
        loading="lazy"
        src={`${gallery.basePath}/${image.id}/h=320`}
        srcset={`${gallery.basePath}/${image.id}/h=320, ${gallery.basePath}/${image.id}/h=640 2x`}
        alt={image.alt}
        id={image.id}
        class="max-h-60 md:h-72 lg:h-80 w-auto rounded"
      />
    </button>
  {/each}
</div>

{#if selected}
  <button
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-neutral-300 rounded overflow-clip"
    on:click={() => {
      selected = undefined;
      document.body.style.overflow = "visible";
    }}
  >
    <img
      class="max-w-full max-h-screen pt-20 pb-2 px-2"
      src={`${gallery.basePath}/${gallery.images[selected].id}/public`}
      alt={gallery.images[selected].alt}
    />
  </button>
{/if}
