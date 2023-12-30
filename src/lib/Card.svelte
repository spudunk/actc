<script lang="ts">
  export let title = "Service Title";
  export let image = "";
</script>

<div
  class="min-h-52 h-full w-auto rounded p-4 mb-4 bg-neutral-200 flex flex-col gap-1"
>
{#if image}
  <img class="self-center h-24" src={image} alt="">
{/if}
  <h2 class="text-2xl font-display text-center ">{title}</h2>
  <div class="flex flex-col gap-2"><slot /></div>
</div>
