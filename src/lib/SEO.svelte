<script lang="ts">
  import { page } from "$app/stores";
  export let url = String($page.url);
  export let title = "A Custom Touch Construction - Portland Home Contractor";
  export let description = "A Custom Touch Construction - Contractor Specializing in Windows, Doors, Siding, Kitchen, and Bath - Serving Portland and surrounding areas since 1995";
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
