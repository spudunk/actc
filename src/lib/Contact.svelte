<script lang="ts">
  import { site } from "$lib";
</script>

<div class="flex flex-col gap-4">
  <p class="text-lg">Call or Email to start improving your home today.</p>
  <p class="text-xl">
    Email: <a
      class="link p-1"
      target="_blank"
      href={`mailto:${site.company.email}`}
    >
      {site.company.email}
    </a>
  </p>
  <p class="text-xl">
    Phone: <a
      class="link p-1"
      target="_blank"
      href={`tel:${site.company.telephone}`}
    >
      {site.company.telephoneText}
    </a>
  </p>
</div>
