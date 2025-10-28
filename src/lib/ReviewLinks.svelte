<script lang="ts">
  import { site } from "$lib";
  import googleIcon from "$lib/icons/google.svg";
</script>

{#each site.socials as social (social.id)}
  {#if social.reviewLink && social.reviewText}
    <span class="">
      <a target="_blank" class="link text-xl flex flex-wrap items-center gap-2" href={social.reviewLink}>
      <img
        class="h-6 inline-block aspect-square"
        src={social.icon}
        alt={social.iconAlt}
      />
        {social.reviewText}
      </a>
    </span>
  {/if}
{/each}

