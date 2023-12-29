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
    <div class="w-fit mx-auto text-center">
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
