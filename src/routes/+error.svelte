<script lang="ts">
  import { page } from "$app/stores";
</script>

<main>
  <div class="pt-20 container">
    <h1 class="text-2xl">{$page.status}: {$page.error?.message}</h1>
  </div>
</main>
