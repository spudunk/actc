<script lang="ts">
  export let score = 5;
  export let count = 1;
  export let label = "customers";

  const filled =
    "m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z";
  const outline =
    "m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25";

  $: fullStars = Math.min(5, Math.max(0, Math.floor(score)));
  $: fraction =
    fullStars < 5 ? Math.min(1, Math.max(0, score - fullStars)) : 0;
  $: emptyStars = 5 - fullStars - (fraction > 0 ? 1 : 0);

  const size = '1.5em'
</script>

<div class="flex items-center gap-2">
  <div class="flex text-lg tracking-[-1px]">
    {#each Array(fullStars) as _, i (i)}
      <span class="text-yellow-400">
        <svg viewBox="0 0 24 24" width={size} height={size}>
          <path fill="currentColor" d={filled} />
        </svg>
      </span>
    {/each}
    {#if fraction > 0}
      <span class="relative text-zinc-600">
        <svg viewBox="0 0 24 24" width={size} height={size}>
          <path fill="currentColor" d={outline} />
        </svg>
        <span
          class="absolute top-0 left-0 overflow-hidden text-yellow-400"
          style="width: {fraction * 100}%"
        >
          <span class="block w-[1em]">
            <svg viewBox="0 0 24 24" width={size} height={size}>
              <path fill="currentColor" d={filled} />
            </svg>
          </span>
        </span>
      </span>
    {/if}
    {#each Array(emptyStars) as _, i (i)}
      <span class="text-zinc-600">
        <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
          <path fill="currentColor" d={outline} />
        </svg>
      </span>
    {/each}
  </div>
  {#if count && label}
    <span class="text-zinc-400">{score.toFixed(1)} from {count} {label}</span>
  {/if}
</div>
