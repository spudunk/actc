<script>
  import Navbar from "$lib/Navbar.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";
  import { site } from "$lib";
  import { organizationSchema, websiteSchema } from "$lib/schemas";
  import "../app.css";
  import "@fontsource/noto-sans";
  import "@fontsource/noto-serif";
  import "@fontsource/bebas-neue";
  const date = new Date();
</script>

<LdTag schema={organizationSchema} />
<LdTag schema={websiteSchema} />
<Navbar />
<slot />
<footer class="mt-8 mb-16 lg:my-8">
  <div class="container min-h-12">
    <div class="w-fit mx-auto text-center flex flex-col">
      <div class="flex flex-wrap gap-1 w-full justify-center mb-2">
        {#each site.socials as social}
          <a class="link p-2" target="_blank" href={social.link}>
            {social.name}
          </a>
        {/each}
      </div>
      {#if site.license}
        <a class="inline-block" target="_blank" href={site.license.url}
          >{site.license.text}</a
        >
      {/if}
      <p>{site.company.address}</p>
      <a class="inline-block" target="_blank" href={site.company.sosLink}>
        &copy; 2023 &dash; {date.getFullYear()}
        {site.company.legalName.toUpperCase()}
      </a>
    </div>
  </div>
</footer>

<style lang="postcss">
  :global(body) {
    @apply font-notoSans;
  }
</style>
