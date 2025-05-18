<template>
  <div class="cart-dropdown absolute">
    <template v-for="item in cartStore.cart" :key="item.id">
      <div class="cart-dropdown-snapshot flex mb-3 w-full">
        <div class="cart-dropdown-snapshot-left">
          <ProductImage
            :imageThumb="item.imageThumb"
            :width="parseInt(40)"
            :height="parseInt(40)"
            :title="item.title"
            :href="'#'"
            class="p-0 w-10"
          />
        </div>
        <div class="cart-dropdown-snapshot-right pl-2 w-full">
          <div class="cart-dropdown-snapshot-title">
            <ProductTitle :title="item.title" :href="'#'" />
          </div>
          <div class="cart-dropdown-snapshot-right-action flex justify-between">
            <small class="cart-dropdown-qty">{{ item.quantity }} qty</small>
            <small
              class="cart-dropdown-delete text-red-500 cursor-pointer hover:underline"
              @click="removeFromCart(item.id)"
              >delete</small
            >
          </div>
        </div>
      </div>
    </template>
    <div class="cart-dropdown-total flex justify-between mb-2">
      <strong>Total:</strong>
      <small
        ><strong>${{ cartStore.cartTotalPrice }}</strong></small
      >
    </div>
    <div class="cart-dropdown-actions flex justify-between">
      <MainButton variant="secondary" :title="'To cart'" size="small" :href="'#'" />
      <MainButton variant="primary" :title="'To checkout'" size="small" :href="'#'" />
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/useCartStore'
import ProductImage from '@/components/modules/ProductCard/ProductImage.vue'
import ProductTitle from '@/components/modules/ProductCard/ProductTitle.vue'
import MainButton from '@/components/modules/Common/MainButton.vue'

const cartStore = useCartStore()

const removeFromCart = productId => {
  cartStore.removeFromCart(productId)
}
</script>
<style lang="scss">
.cart-dropdown {
  top: 100%;
  right: 0;
  display: block;
  visibility: hidden;
  opacity: 0.3;
  transform: scale(1, 0);
  width: 300px;
  transition: var(--transition);
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  transform-origin: top;
  animation-fill-mode: forwards;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.product-image {
  padding: 0;
}

.cart-dropdown-snapshot .product-title {
  text-align: left;
  line-height: 1;
  font-size: 13px;
  font-weight: 300;
}
</style>
