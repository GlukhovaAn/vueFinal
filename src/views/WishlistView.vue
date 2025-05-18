<script setup>
import { useWishlistStore } from "@/stores/useWishlistStore";
import { computed } from "vue";

const wishlistStore = useWishlistStore();

const wishlistItems = computed(() => wishlistStore.getWishlist);
console.log(wishlistItems);
</script>

<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-xl font-semibold mb-6 border-b pb-2">Favorite</h1>

    <div v-if="wishlistItems.length === 0" class="text-gray-400 italic">
      No products added to wishlist yet.
    </div>

    <div v-else class="flex flex-col space-y-6">
      <div
        v-for="product in wishlistItems"
        :key="product.id"
        class="flex items-center space-x-4 pb-4 border-b"
      >
        <img
          :src="product.image"
          alt="product image"
          class="w-24 h-24 object-contain"
        />
        <div class="flex flex-col">
          <span class="text-lg font-medium">{{ product.name }}</span>
          <span class="text-gray-600 text-sm">#{{ product.id }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
