<script lang="ts">
  import type { Image } from "$lib";
  export let images: Image[];
  export let debug = false;
  let selected: undefined | Image;
  $: console.log(selected);
</script>

<div
  class={`${
    $$props.class ? $$props.class : ""
  } relative rounded px-1 py-4 flex gap-4 w-fit flex-wrap justify-evenly `}
>
  {#each images as image (image.id)}
    <button
      class="relative w-fit overflow-clip flex justify-center"
      on:click={() => {
        selected = image;
      }}
    >
      {#if debug}
        <span class="absolute top-2 left-2 p-1 bg-neutral-50">{image.id}</span>
      {/if}
      <img
        loading="lazy"
        src={image.path}
        alt={image.alt}
        id={image.id}
        class="max-h-60 md:h-72 lg:h-80 w-auto rounded"
      />
    </button>
  {/each}
</div>

{#if selected}
  <button
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-300"
    on:click={() => {
      selected = undefined;
      
    }}
  >
    <img class="max-w-full max-h-screen pt-20 pb-2 px-2" src={selected.path} alt={selected.alt} />
    <span class="fixed top-24 right-6 text-3xl py-1 px-2 bg-white rounded">Close</span>
  </button>
{/if}
