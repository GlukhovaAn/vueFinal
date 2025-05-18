<template>
  <div class="product-list-count flex items-center">
    <span class="label text-md font-normal">Selected Products:</span>
    <span class="number text-xl ml-2">{{ count }}</span>
  </div>
</template>
<script setup>
defineProps({ count: Number })
</script>
<style lang="scss">
.product-list-count {
  .label {
    color: var(--vt-c-black-mute);
  }

  .number {
    color: #000;
  }
}
</style>
