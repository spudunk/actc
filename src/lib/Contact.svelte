<script lang="ts">
</script>

<form action="" class="w-full grid grid-cols-contact gap-4 items-center">
  <label class="label" for="name">
    Name
  </label>
  <input class="input" type="text" name="name" id="name" autocomplete="name" />

  <label class="label" for="email">
    Email
  </label>
  <input class="input" type="email" name="email" id="email" autocomplete="email" />

  <label class="label" for="tel">
    Phone
  </label>
  <input class="input" type="tel" name="tel" id="tel" autocomplete="tel" />


</form>

<style lang="postcss">
  .input {
    @apply p-1 border border-solid;
  }
  .label {
    @apply mr-2 font-semibold;
  }
  .grid-cols-contact {
    grid-template-columns: auto 1fr;
  }
</style>