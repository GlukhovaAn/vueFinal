<script setup>
import MainButton from '@/components/modules/Common/MainButton.vue'
</script>

<template>
  <div class="product-add-to-card w-full">
    <MainButton
      @click="$emit('add-to-cart')"
      :classes="['add-to-cart']"
      :title="'Buy Now'"
      variant="primary"
      block
    />
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
  .product-card-footer {
    padding: 0 26px;
  }
}
</style>
