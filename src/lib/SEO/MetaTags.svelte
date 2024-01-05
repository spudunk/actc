<script lang="ts">
  import { page } from "$app/stores";
  import { site } from "$lib";

  export let url = String($page.url);
  export let title = site.title;
  export let description = site.description;
  export let domain = $page.url.protocol + "//" + $page.url.host;
  export let img = `${domain}/images/og-optimized.png`;
  export let type = "website"
  export let canonical = url;
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if img}
    <meta property="og:image" content={img} />
  {/if}

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={domain} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {#if img}
    <meta name="twitter:image" content={img} />
  {/if}

  <link rel="“canonical”" href={canonical} />
</svelte:head>
