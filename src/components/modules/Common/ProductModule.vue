<template>
  <div class="product-module">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="loading" class="loading products mb-6"></div>
    <div v-else class="products mb-6">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/modules/ProductCard/ProductCard.vue";
defineProps({
  products: Array,
  loading: Boolean,
  error: String,
});
</script>
<style scoped>
.product-module .products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (min-width: 1200px) {
  .product-module .products {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
