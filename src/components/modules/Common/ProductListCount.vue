<template>
  <div class="product-list-count">
    <span class="label">Selected Products:</span>
    <span class="number">{{ count }}</span>
  </div>
</template>

<script setup>
defineProps({ count: Number });
</script>

<style scoped>
.product-list-count {
  display: flex;
  align-items: center;
}

.label {
  font-size: 16px;
  font-weight: 400;
  color: var(--vt-c-black-mute);
}

.number {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-left: 8px;
}
</style>
