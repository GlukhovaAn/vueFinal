<script setup>
import ProductImage from "@/components/modules/ProductCard/ProductImage.vue";
import ProductWishlist from "@/components/modules/ProductCard/ProductWishlist.vue";
import ProductName from "@/components/modules/ProductCard/ProductTitle.vue";
import ProductPrice from "@/components/modules/ProductCard/ProductPrice.vue";
import ProductAddToCart from "@/components/modules/ProductCard/ProductAddToCart.vue";
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
const cartStore = useCartStore();

function onAddToCart() {
  cartStore.addToCart(props.product);
  cartStore.toggleCartModal();
}
</script>
<template>
  <div class="product-card">
    <ProductWishlist v-if="!hideWishlist" :product="product" />
    <RouterLink :to="`/product/${product.id}`">
      <ProductImage :imageUrl="product?.images[0]" :title="product?.name" />
    </RouterLink>
    <div class="product-card-body w-full">
      <RouterLink :to="`/product/${product.id}`">
        <ProductName :title="product?.name" />
      </RouterLink>
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
