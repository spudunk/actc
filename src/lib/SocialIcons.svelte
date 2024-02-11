<script lang="ts">
  import { site } from "$lib";
</script>

<nav
  class={$$props.class
    ? `flex gap-3 items-center rounded h-7  ${$$restProps.class}`
    : "flex gap-3 items-center rounded h-7"}
>
  {#each site.socials as social (social.id)}
    <a target="_blank" class="h-full" href={social.link}>
      <img
        class={`h-full inline-block aspect-square ${
          social.id === "facebook" ? "bg-white rounded-md" : ""
        }`}
        src={social.icon}
        alt={social.iconAlt}
        aria-label={social.iconLabel}
      />
    </a>
  {/each}
</nav>
