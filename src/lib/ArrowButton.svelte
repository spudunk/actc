<script lang="ts">
  	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

  export let d: "left" | "right" | "l" | "r";
  export let size: number = 30;
  export let color: string = "#ffffff";
</script>

<button
  class={`absolute cursor-pointer top-1/2 -translate-y-1/2 z-40 ease-in-out bg-neutral-700 bg-opacity-50 rounded-md p-2 ${
    d === "left" || d === "l" ? "left-2" : "right-2"
  } ${$$props.class || ""}`}
  on:click={(e)=>{dispatch('click', e)}}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {#if d === "left" || d === "l"}
      <!-- Left Arrow -->
      <path d="M19 12H6M12 5l-7 7 7 7" />
    {:else if d === "right" || d === "r"}
      <!-- Right Arrow -->
      <path d="M5 12h13M12 5l7 7-7 7" />
    {/if}
  </svg>
</button>
