<script setup>
import iconFavorite from "@/components/icons/commons/iconFavorite.vue";
import { computed, defineEmits } from "vue";
import { useWishlistStore } from "@/stores/wishlist.js";

const props = defineProps({
  product: Object,
});

const emit = defineEmits(["toggle-wishlist"]);

const wishlistStore = useWishlistStore();

const selected = computed(() => {
  return wishlistStore.getWishlist.some((p) => p.id === props.product.id);
});

function toggleWishlist() {
  if (!selected.value) {
    wishlistStore.addToWishlist(props.product);
  } else {
    wishlistStore.removeFromWishlist(props.product.id);
  }

  emit("toggle-wishlist");
}
</script>

<template>
  <div class="product-header flex justify-end w-full">
    <button
      class="btn-favorite"
      @click="toggleWishlist"
      :class="{ selected: selected }"
    >
      <iconFavorite />
    </button>
  </div>
</template>

<style>
.btn-favorite:hover svg path {
  stroke: #ff0000;
}
.btn-favorite.selected svg path {
  stroke: #ff0000;
  fill: #ff0000;
}
</style>
