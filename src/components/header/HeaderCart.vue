<template>
  <div class="cart-dropdown-module">
    <RouterLink to="/cart" aria-label="Cyber - Ecommerce">
      <button class="header-btn-cart" aria-label="Cart">
        <IconCart />
        <span class="cart-count black-pulse" v-if="cartStore.cartCount">
          {{ cartStore.cartCount }}
        </span>
      </button>
    </RouterLink>
    <!-- <CartDropdown v-if="cartStore.cartCount" /> -->
  </div>
</template>

<script setup>
import IconCart from "@/components/icons/commons/iconCart.vue";
import { useCartStore } from "@/stores/useCartStore";
import CartDropdown from "./CartDropdown.vue";

const cartStore = useCartStore();
</script>

<style lang="scss">
.cart-dropdown-module {
  position: relative;
  height: 2rem; /* h-8 */
  z-index: 10;
}

.cart-dropdown-module:hover .cart-dropdown {
  transform: scale(1, 1);
  visibility: visible;
  opacity: 1;
}

.header-btn-cart {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* fully rounded */
  font-size: 10px;
  color: #fff;
  font-weight: 600;
  width: 18px;
  height: 18px;
  background: #000;
  top: -3px;
  right: -3px;
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
</style>
