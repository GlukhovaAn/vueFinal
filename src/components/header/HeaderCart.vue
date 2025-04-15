<template>
  <div class="cart-dropdown-module h-8 relative z-10">
    <button class="header-btn-cart relative" aria-label="Cart">
      <IconCart />
      <span
        class="cart-count black-pulse absolute flex justify-center items-center rounded-full"
        v-if="cartStore.cartCount"
        >{{ cartStore.cartCount }}</span
      >
    </button>
    <CartDropdown v-if="cartStore.cartCount" />
  </div>
</template>
<script setup>
import IconCart from '@/components/icons/commons/iconCart.vue'
import { useCartStore } from '@/stores/useCartStore'
import CartDropdown from './CartDropdown.vue'

const cartStore = useCartStore()
</script>
<style lang="scss">
.cart-dropdown-module:hover .cart-dropdown {
  transform: scale(1, 1);
  visibility: visible;
  opacity: 1;
}

.black-pulse {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: blackPulse 2s infinite;
}

@keyframes blackPulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.cart-count {
  font-size: 10px;
  color: #fff;
  font-weight: 600;
  width: 18px;
  height: 18px;
  background: #000;
  top: -3px;
  right: -3px;
}
</style>
