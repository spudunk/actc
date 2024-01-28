<script lang="ts">
  import { site } from "$lib";
</script>

{#each site.socials as social (social.id)}
  {#if social.reviewLink && social.reviewText}
    <p class="mt-4 text-xl flex flex-wrap items-center gap-2">
      <img class="h-6 inline-block aspect-square" src={social.icon} alt={social.iconAlt} />
      <a target="_blank" class="link p-2" href={social.reviewLink}>
        {social.reviewText}
      </a>
    </p>
  {/if}
{/each}
