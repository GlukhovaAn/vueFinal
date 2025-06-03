<script setup>
import MainButton from "@/components/modules/Common/MainButton.vue";
</script>

<template>
  <div class="product-add-to-cart">
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
.product-add-to-cart {
  width: 100%;
}

@media (min-width: 768px) {
  .product-add-to-cart {
    padding: 0 26px;
  }
}
</style>
