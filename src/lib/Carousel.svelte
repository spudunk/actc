<script lang="ts">
  export let images: { id: string; path: string; alt: string }[];
  export let scrollTimeout = 900;
  let carousel: HTMLDivElement;
  let container: HTMLDivElement;
  let scrollIndex = 0;
  let allowEvent = true;
  let timeoutIndex: number;


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
        ((carousel.scrollLeft ) /
          carousel.scrollWidth) *
          carousel.children.length
      );
    }
  };
</script>

<div class="relative" bind:this={container}>
  <div class="absolute top-3 left-3">
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
      <img
        loading="lazy"
        src={image.path}
        alt={image.alt}
        id={image.id}
        class="h-60 md:h-72 lg:h-80 w-auto rounded"
      />
    {/each}
  </div>
</div>
