<script lang="ts">
  import { serializeSchema, type Schema } from "$lib/schemas";

  export let schema: Schema;
</script>

<svelte:head>
  {@html serializeSchema(schema)}
</svelte:head>
