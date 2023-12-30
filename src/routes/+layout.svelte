<script>
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";
  import "@fontsource/noto-sans";
  import "@fontsource/noto-serif";
</script>

<Navbar />
<slot />
<footer class="my-8">
  <div class="container min-h-12">
    <div class="w-fit mx-auto text-center flex flex-col">
      <div class="flex gap-4 w-full justify-center mb-2">
        <a
          class="link"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100083274858015"
        >
          Facebook
        </a>

        <a
          class="link"
          target="_blank"
          href="https://www.yelp.com/biz/a-custom-touch-construction-north-plains-2"
        >
          Yelp
        </a>
        <a
          class="link"
          target="_blank"
          href="https://www.google.com/search?q=a+custom+touch+construction+north+plains+oregon&sca_esv=594646980&sxsrf=AM9HkKkqMoXOEfLK7fnOO5erzKOYaSqQ_Q%3A1703975197858&source=hp&ei=HZmQZZmVMZDk0PEP45Gk8Ag&iflsig=AO6bgOgAAAAAZZCnLUTSHe3eBreqmDA09YNF-jK6KmE0&oq=a+custom+touch+construction+north+plains+&gs_lp=Egdnd3Mtd2l6IilhIGN1c3RvbSB0b3VjaCBjb25zdHJ1Y3Rpb24gbm9ydGggcGxhaW5zICoCCAAyBRAhGKABMgUQIRigATIFECEYoAFIhTlQAFivLnABeACQAQCYAcwBoAHjKaoBBjAuMzEuMbgBA8gBAPgBAvgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIKECMYgAQYigUYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAgsQLhiABBjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAgUQLhiABMICDhAuGIAEGLEDGIMBGNQCwgILEC4YgAQYsQMYgwHCAgUQABiABMICCBAuGLEDGIAEwgILEC4YgAQYsQMY1ALCAggQABiABBixA8ICCxAuGIAEGMcBGK8BwgILEC4YrwEYxwEYgATCAgYQABgWGB7CAggQABgWGB4YD8ICCxAAGIAEGIoFGIYDwgIFECEYqwI&sclient=gws-wiz"
        >
          Google
        </a>
        <a
          class="link hidden"
          target="_blank"
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48726993c8426b19:0x4a10e8457558261f?hl=en-US"
        >
          Google Maps
        </a>
      </div>
      <a
        class="inline-block"
        target="_blank"
        href="https://search.ccb.state.or.us/search/search_result.aspx?id=112862"
        >OR LIC No. 112862</a
      >
      <p>North Plains, OR</p>
      <a
        class="inline-block"
        target="_blank"
        href="https://egov.sos.state.or.us/br/pkg_web_name_srch_inq.do_name_srch?p_name=&p_regist_nbr=195440293&p_srch=PHASE1&p_print=FALSE&p_entity_status=ACTINA"
        >&copy; 2023 A CUSTOM TOUCH CONSTRUCTION</a
      >
    </div>
  </div>
</footer>

<style lang="postcss">
  :global(body) {
    @apply font-notoSans;
  }
</style>
