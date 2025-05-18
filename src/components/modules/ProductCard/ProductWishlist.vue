<script setup>
import iconFavorite from "@/components/icons/commons/iconFavorite.vue";
import { ref, defineEmits, watch } from "vue";
import { useWishlistStore } from "@/stores/useWishlistStore";

const props = defineProps({
  product: Object,
  onWishlist: Boolean,
});

const emit = defineEmits(["toggle-wishlist"]);
const selected = ref(props.onWishlist);

const wishlistStore = useWishlistStore();

watch(
  () => props.onWishlist,
  (newVal) => {
    selected.value = newVal;
  }
);

function toggleWishlist() {
  selected.value = !selected.value;

  if (selected.value) {
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
