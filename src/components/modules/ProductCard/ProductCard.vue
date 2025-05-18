<script setup>
import ProductImage from "@/components/modules/ProductCard/ProductImage.vue";
import ProductWishlist from "@/components/modules/ProductCard/ProductWishlist.vue";
import ProductName from "@/components/modules/ProductCard/ProductTitle.vue";
import ProductPrice from "@/components/modules/ProductCard/ProductPrice.vue";
import ProductAddToCart from "@/components/modules/ProductCard/ProductAddToCart.vue";
import { useWishlistStore } from "@/stores/useWishlistStore.js";
import { useCartStore } from "@/stores/useCartStore.js";

// Props passed into the component
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  hideWishlist: {
    type: Boolean,
    default: false,
  },
});

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

function onToggleWishlist() {
  if (wishlistStore.isInWishlist(props.product.id)) {
    wishlistStore.removeFromWishlist(props.product.id);
  } else {
    wishlistStore.addToWishlist(props.product);
  }
}

function onAddToCart() {
  cartStore.addToCart(props.product);
  cartStore.toggleCartModal();
}
</script>
<template>
  <div class="product-card">
    <ProductWishlist
      v-if="!hideWishlist"
      @toggle-wishlist="onToggleWishlist"
      :onWishlist="wishlistStore.isInWishlist(product.id)"
      :product="product"
    />
    <ProductImage :imageUrl="product?.images[0]" :title="product?.name" />
    <div class="product-card-body w-full">
      <ProductName :title="product?.name" />
      <ProductPrice
        :price="product?.price"
        :discounted-price="product?.discount_price"
      />
      <ProductAddToCart @add-to-cart="onAddToCart" />
    </div>
  </div>
</template>
<style>
@import "@/assets/css/productCard/productCard.css";
</style>
