<script lang="ts">
  export let title: string;
  export let image = "";
  export let link: string | undefined = undefined;
</script>

<div
  class="min-h-52 h-full w-auto rounded p-4 mb-4 bg-neutral-200 flex flex-col gap-1"
>
  {#if image}
    <img class="self-center h-24" src={image} alt="" />
  {/if}
  {#if link}
    <a href={link}>
      <h2 class="text-2xl font-display text-center">{title}</h2>
    </a>
  {:else}
    <h2 class="text-2xl font-display text-center">{title}</h2>
  {/if}
  <div class="flex flex-col gap-2"><slot /></div>
  {#if link}
    <a class=" pt-4 pl-2 text-lg font-bold link self-center" href={link}>About {title}</a>
  {/if}
</div>
