<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import ArrowButton from "$lib/ArrowButton.svelte";
  import type { ImageGallery } from "$lib/types";

  export let debug = false;
  export let gallery: ImageGallery;

  let root: HTMLDivElement;
  let carousel: HTMLDivElement;
  let dialog: HTMLDialogElement | undefined;

  let scrollIndex = 0;
  let selected: number | undefined;
  let reduceMotion = false;
  let scrollFrame = 0;
  let previousOverflow = "";
  let scrollLocked = false;

  $: images = gallery.images;
  $: selectedImage = selected !== undefined ? images[selected] : undefined;

  function maxScroll() {
    return Math.max(0, carousel.scrollWidth - carousel.clientWidth);
  }

  function scrollToIndex(index: number) {
    const count = images.length;
    if (!carousel || count === 0) return;
    const next = ((index % count) + count) % count;
    const child = carousel.children[next] as HTMLElement | undefined;
    if (!child) return;
    const centered =
      child.offsetLeft - (carousel.clientWidth - child.offsetWidth) / 2;
    carousel.scrollTo({
      left: Math.min(maxScroll(), Math.max(0, centered)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function updateIndexFromScroll() {
    if (!carousel || carousel.children.length === 0) return;
    const limit = maxScroll();
    if (carousel.scrollLeft <= 1) {
      scrollIndex = 0;
      return;
    }
    if (limit - carousel.scrollLeft <= 1) {
      scrollIndex = carousel.children.length - 1;
      return;
    }
    const viewportCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;
    for (let i = 0; i < carousel.children.length; i++) {
      const child = carousel.children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    }
    scrollIndex = closest;
  }

  function handleScroll() {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      updateIndexFromScroll();
    });
  }

  function onCarouselKeydown(event: KeyboardEvent) {
    if (selected !== undefined) return;
    if (event.altKey || event.metaKey || event.ctrlKey || event.shiftKey) return;
    if (!(event.target instanceof Node) || !root?.contains(event.target)) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(scrollIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(scrollIndex + 1);
    }
  }

  function lockScroll() {
    if (scrollLocked) return;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    scrollLocked = true;
  }

  function unlockScroll() {
    if (!scrollLocked) return;
    document.body.style.overflow = previousOverflow;
    scrollLocked = false;
  }

  function openAt(index: number) {
    lockScroll();
    selected = index;
  }

  function closeModal() {
    selected = undefined;
    unlockScroll();
  }

  function showModal(node: HTMLDialogElement) {
    node.showModal();
  }

  function dismissOnBackdrop(node: HTMLElement) {
    const onClick = (event: MouseEvent) => {
      if (event.target === node) requestClose();
    };
    node.addEventListener("click", onClick);
    return {
      destroy() {
        node.removeEventListener("click", onClick);
      },
    };
  }

  function requestClose() {
    dialog?.close();
  }

  onMount(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduceMotion = media.matches;
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  });

  onDestroy(() => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    unlockScroll();
  });
</script>

<svelte:window on:keydown={onCarouselKeydown} />

{#if images.length > 0}
  <div
    class="relative overflow-x-clip h-60 md:h-72 lg:h-80 touch-auto"
    role="region"
    aria-roledescription="carousel"
    aria-label="Photo gallery"
    bind:this={root}
  >
    <div
      class="absolute inset-0 flex snap-x snap-mandatory gap-2 overflow-x-scroll scrollbar-hide"
      class:scroll-smooth={!reduceMotion}
      bind:this={carousel}
      on:scroll={handleScroll}
    >
      {#each images as image, index (image.id)}
        <button
          type="button"
          class="relative block min-w-fit cursor-zoom-in {index === 0
            ? 'snap-start'
            : index === images.length - 1
              ? 'snap-end'
              : 'snap-center'}"
          aria-label={`View larger photo: ${image.alt}`}
          on:click={() => openAt(index)}
        >
          {#if debug}
            <span
              class="absolute top-2 right-2 z-10 bg-neutral-50 bg-opacity-80 p-1 text-right"
            >
              {image.filename}
            </span>
          {/if}
          <img
            loading={index < 3 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : undefined}
            src={`${gallery.basePath}/${image.id}/h=320`}
            srcset={`${gallery.basePath}/${image.id}/h=320, ${gallery.basePath}/${image.id}/h=640 2x`}
            alt={image.alt}
            id={image.id}
            class="h-60 rounded object-cover md:h-72 lg:h-80"
            height="240"
            width="320"
          />
        </button>
      {/each}
    </div>

    {#if images.length > 1}
      <ArrowButton
        d="l"
        label="Previous photo"
        class="hidden sm:block"
        on:click={() => scrollToIndex(scrollIndex - 1)}
      />
      <ArrowButton
        d="r"
        label="Next photo"
        class="hidden sm:block"
        on:click={() => scrollToIndex(scrollIndex + 1)}
      />

      <div
        class="absolute bottom-2 left-1/2 z-40 flex max-w-full -translate-x-1/2 gap-1 opacity-80"
        role="group"
        aria-label="Choose photo"
      >
        {#each images as image, index (image.id)}
          <button
            type="button"
            class="p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label={`Show photo ${index + 1} of ${images.length}`}
            aria-current={index === scrollIndex ? "true" : undefined}
            on:click={() => scrollToIndex(index)}
          >
            <span
              aria-hidden="true"
              class="block h-2 w-2 rounded-full md:h-4 md:w-4 {index === scrollIndex
                ? 'bg-white'
                : 'bg-slate-500'}"
            ></span>
          </button>
        {/each}
      </div>
    {/if}
  </div>
{/if}

{#if selectedImage}
  <dialog
    class="lightbox"
    aria-label={selectedImage.alt}
    bind:this={dialog}
    use:showModal
    use:dismissOnBackdrop
    on:close={closeModal}
  >
    <img
      class="relative z-10 max-h-screen max-w-full object-contain p-4"
      src={`${gallery.basePath}/${selectedImage.id}/public`}
      alt={selectedImage.alt}
    />
    <button
      type="button"
      class="absolute right-3 top-3 z-20 rounded-md bg-neutral-700/50 p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Close photo"
      on:click={requestClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    </button>
  </dialog>
{/if}

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  dialog.lightbox {
    position: fixed;
    inset: 0;
    margin: 0;
    padding: 0;
    border: none;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  dialog.lightbox::backdrop {
    background: rgb(23 23 23 / 0.8);
  }
</style>
