<script lang="ts">
  import { onMount } from "svelte";
  import ArrowButton from "$lib/ArrowButton.svelte";
  import type { ImageGallery } from "$lib/types";
  export let debug = false;
  export let gallery: ImageGallery ;

  let carousel: HTMLDivElement;
  let container: HTMLDivElement;

  let scrollIndex = 0;

  let current: HTMLButtonElement; // current item in view for bottom view
  let selected: number | undefined; // selected item index for modal overlay

  let scrolling = false;
  let scrollTimeout: number | undefined;
  export let timeoutMS = 1000;

  const incrementScroll = (adj: number) => {
    scrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      scrolling = false;
    }, timeoutMS);
    const images = carousel.children;
    scrollIndex = scrollIndex + adj;
    scrollIndex >= 0
      ? (scrollIndex = scrollIndex % images.length)
      : (scrollIndex = images.length - 1);
    const child = images[scrollIndex] as HTMLButtonElement;
    // child.scrollIntoView({
    //   behavior: "smooth",
    //   block: "nearest",
    //   inline: "start",
    // });
    carousel.scrollLeft = child.offsetLeft - child.offsetWidth / 2;
    current = child;
  };

  const handleScroll = (e: Event) => {
    if (scrolling) {
      return;
    }
    scrollIndex = Math.floor(
      ((carousel.scrollLeft + container.scrollWidth / 2) /
        carousel.scrollWidth) *
        carousel.childElementCount
    );
    current = carousel.children[scrollIndex] as HTMLButtonElement;
  };

  onMount(()=>{
    current = carousel.children[0] as HTMLButtonElement;
  })
</script>

<!-- Outer Container -->
<div
  class="relative overflow-x-clip h-60 md:h-72 lg:h-80 touch-auto"
  bind:this={container}
>
  <!-- Control Buttons -->
  <ArrowButton
    d="l"
    class="hidden sm:block"
    on:click={(e) => {
      e.preventDefault;
      incrementScroll(-1);
    }}
  />
  <ArrowButton
    d="r"
    class="hidden sm:block"
    on:click={(e) => {
      e.preventDefault;
      incrementScroll(1);
    }}
  />

  <!-- bullets -->
  <div
    class="absolute bottom-2 left-1/2 flex gap-1 -translate-x-1/2 z-40 opacity-80 max-w-full"
  >
    {#each carousel?.children || [] as child}
      <div
        class={`h-2 w-2 md:h-4 md:w-4 rounded-full ${
          child === current ? "bg-white" : "bg-slate-500"
        }`}
      ></div>
    {/each}
  </div>

  <!-- Inner Container -->
  <div
    class="absolute top-0 left-0 right-0 overflow-x-scroll snap-x snap-mandatory flex scroll-smooth scrollbar-hide"
    bind:this={carousel}
    on:scroll={handleScroll}
  >
    {#each gallery.images as image, index (image.id)}
      <!-- Image Container -->
      <button
        class="relative block min-w-fit ml-2 snap-center"
        on:click={() => {
          selected = index;
          document.body.style.overflow = "hidden";
        }}
      >
        {#if debug}
          <span
            class="absolute top-2 left-0 p-1 z-10 bg-neutral-50 bg-opacity-80"
          >
            {image.id}
          </span>
        {/if}
        <img
          loading="lazy"
          src={`${gallery.basePath}/${image.id}/h=320`}
          srcset={`${gallery.basePath}/${image.id}/h=320, ${gallery.basePath}/${image.id}/h=640 2x`}
          alt={image.alt}
          id={image.id}
          class="h-60 md:h-72 lg:h-80 rounded object-cover"
          height="240"
          width="320"
        />
      </button>
    {/each}
  </div>
</div>

<!-- Modal overlay image -->
{#if selected !== undefined}
  <button
    class="fixed top-0 left-0 z-50 right-0 bottom-0 flex justify-center items-center bg-neutral-300 rounded overflow-clip"
    on:click={() => {
      selected = undefined;
      document.body.style.overflow = "visible";
    }}
  >
    <img
      class="max-w-full max-h-screen p-2"
      src={`${gallery.basePath}/${gallery.images[selected].id}/public`}
      alt={""}
    />
  </button>
{/if}

<style>
  /* For Webkit-based browsers (Chrome, Safari and Opera) */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
