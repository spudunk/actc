<script lang="ts">
  import type { Image } from "$lib";
  export let images: Image[];
  export let scrollTimeout = 900;
  export let debug = false;

  let carousel: HTMLDivElement;
  let container: HTMLDivElement;
  let scrollIndex = 0;
  let allowEvent = true;
  let timeoutIndex: number;
  let selected: undefined | Image;

  // increment scroll without triggering onScroll update
  // use timeout to wait until scrolling has finished
  const incrementScroll = (adj: number) => {
    clearTimeout(timeoutIndex);
    allowEvent = false;
    const images = carousel.children;
    scrollIndex = scrollIndex + adj;
    scrollIndex >= 0
      ? (scrollIndex = scrollIndex % images.length)
      : (scrollIndex = images.length - 1);
    const child = images[scrollIndex];
    child.scrollIntoView({ block: "nearest" });
    timeoutIndex = setTimeout(() => {
      allowEvent = true;
    }, scrollTimeout);
  };

  // update index with onScroll event
  const setScrollPosition = () => {
    if (allowEvent) {
      scrollIndex = Math.floor(
        (carousel.scrollLeft / carousel.scrollWidth) * carousel.children.length
      );
    }
  };
</script>

<div class="relative" bind:this={container}>
  <div class="absolute top-0 left-0 z-10 p-4">
    <button
      class="text-xl font-bold text-black py-1 px-2 bg-neutral-300 bg-opacity-80 rounded"
      on:click={(e) => {
        incrementScroll(-1);
      }}
    >
      &leftarrow;
    </button>
    <span
      class="w-10 text-center inline-block text-xl font-bold text-black py-1 px-2 bg-neutral-300 bg-opacity-80 rounded"
    >
      {scrollIndex + 1}
    </span>
    <button
      class="text-xl font-bold text-black py-1 px-2 bg-neutral-300 bg-opacity-80 rounded"
      on:click={(e) => {
        incrementScroll(1);
      }}
    >
      &rightarrow;
    </button>
  </div>
  <div
    class="scroll-smooth overflow-x-auto flex gap-4 w-fit"
    bind:this={carousel}
    on:scroll={setScrollPosition}
  >
    {#each images as image (image.id)}
      <button
        class="relative block min-w-fit ml-2"
        on:click={() => {
          selected = image;
          document.body.style.overflow = "hidden";
        }}
      >
        {#if debug}
          <span class="absolute top-2 left-2 p-1 bg-neutral-50">{image.id}</span
          >
        {/if}
        <img
          loading="lazy"
          src={image.path}
          alt={image.alt}
          id={image.id}
          class="h-60 md:h-72 lg:h-80 min-w-fit rounded"
        />
      </button>
    {/each}
  </div>
</div>

{#if selected}
  <button
    class="fixed top-0 left-0 z-30 right-0 bottom-0 flex justify-center items-center bg-neutral-300 rounded overflow-clip"
    on:click={() => {
      selected = undefined;
      document.body.style.overflow = "visible";

    }}
  >
    <img
      class="max-w-full max-h-screen pt-20 pb-2 px-2"
      src={selected.path}
      alt={selected.alt}
    />
  </button>
{/if}
