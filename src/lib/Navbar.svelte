<script lang="ts">
  import Logo from "$lib/Logo.svelte";
  import { page } from "$app/stores";
  $: home = $page.url.pathname === "/";
  let y = 0;
  $: atTop = y < 25;
  $: expand = atTop && home && $page.status == 200;
</script>

<svelte:window bind:scrollY={y} />

<header
  class={`${$$props.class} ${
    expand ? "bg-opacity-0" : "bg-opacity-80"
  } z-50 fixed top-0 left-0 w-full backdrop-blur-sm bg-amber-950 transition-all duration-300`}
>
  <div
    class="container w-full grid grid-cols-nav justify-between items-center py-2 min-h-12"
  >
    <a href="/" class="flex gap-2 items-center">
      <Logo
        class={`fill-white text-white transition-all duration-200 ${
          expand ? "h-16 sm:h-24" : "h-12"
        } 
      `}
      />
      <span class="text-2xl text-white hidden md:inline-block"
        >A Custom Touch Construction</span
      >
    </a>
    <div></div>

    <div class="flex flex-row-reverse">
      <a
        href="#contact"
        class="hidden sm:inline-block text-end text-xl text-stone-800 px-4 py-1 rounded bg-neutral-200 hover:bg-neutral-100 hover:scale-105 transition-all"
        >Contact Us</a
      >
      <a
        href="tel:+19712015990"
        class="inline-block sm:hidden text-end text-xl text-stone-800 px-4 py-1 rounded bg-neutral-200"
        >Call Now</a
      >
    </div>
  </div>
</header>

<style>
  .grid-cols-nav {
    grid-template-columns: auto 1fr auto;
  }
</style>
