<script lang="ts">
import { serializeSchema } from "$lib";
  import type { Schema } from "$lib";

  export let schema: Schema;
</script>

<svelte:head>
  {@html serializeSchema(schema)}
</svelte:head>
