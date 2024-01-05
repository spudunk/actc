<script lang="ts">
  export let title: string;
  export let image = "";
  export let link: string | undefined = undefined;
</script>

<div
  class="min-h-52 h-full w-auto rounded p-4 mb-4 bg-neutral-200 flex flex-col gap-1 shadow-md"
>
  {#if link}
    {#if image}
      <a class="px-2 py-1 link self-center flex flex-col gap-1" href={link} data-sveltekit-preload-data>
        <img class="self-center h-24" src={image} alt="" />
        <h2 class="text-2xl font-display text-center">{title}</h2>
      </a>
    {:else}
      <a class="px-2 py-1 link self-center flex" href={link} data-sveltekit-preload-data>
        <h2 class="text-2xl font-display text-center">{title}</h2>
      </a>
    {/if}
  {:else if image}
    <img class="self-center h-24" src={image} alt="" />
    <h2 class="text-2xl font-display text-center">{title}</h2>
  {:else}
    <h2 class="text-2xl font-display text-center">{title}</h2>
  {/if}

  <div class="flex flex-col gap-2">
    <slot />
  </div>
</div>
