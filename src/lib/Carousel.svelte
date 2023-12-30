<script lang="ts">
  export let images: { id: string; path: string; alt: string }[];
</script>

<div class="overflow-x-auto relative flex gap-4 w-fit">
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
