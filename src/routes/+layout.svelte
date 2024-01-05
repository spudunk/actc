<script>
  import Navbar from "$lib/Navbar.svelte";
  import LdTag from "$lib/SEO/LDTag.svelte";
  import { site, organizationSchema, websiteSchema } from "$lib";
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
<footer class="my-8">
  <div class="container min-h-12">
    <div class="w-fit mx-auto text-center flex flex-col">
      <div class="flex gap-1 w-full justify-center mb-2">
        <a class="link p-2" target="_blank" href={site.social.facebook}>
          Facebook
        </a>

        <a class="link p-2" target="_blank" href={site.social.yelp}> Yelp </a>
        <a class="link p-2" target="_blank" href={site.social.google}>
          Google
        </a>
        <a
          class="link p-2 hidden"
          target="_blank"
          href={site.social.googleMaps}
        >
          Google Maps
        </a>
      </div>
      <a class="inline-block" target="_blank" href={site.license.url}
        >{site.license.text}</a
      >
      <p>{site.company.address}</p>
      <a class="inline-block" target="_blank" href={site.company.sosLink}>
        &copy; 2023 &dash; {date.getFullYear()}
        {site.company.name.toUpperCase()}
      </a>
    </div>
  </div>
</footer>

<style lang="postcss">
  :global(body) {
    @apply font-notoSans;
  }
</style>
