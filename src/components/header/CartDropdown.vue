<template>
  <div class="cart-dropdown">
    <template v-for="item in cartStore.cart" :key="item.id">
      <div class="cart-dropdown-snapshot">
        <div class="cart-dropdown-snapshot-left">
          <ProductImage
            :imageThumb="item.imageThumb"
            :width="40"
            :height="40"
            :title="item.title"
            :href="'#'"
            class="product-image"
          />
        </div>
        <div class="cart-dropdown-snapshot-right">
          <div class="cart-dropdown-snapshot-title">
            <ProductTitle :title="item.title" :href="'#'" />
          </div>
          <div class="cart-dropdown-snapshot-right-action">
            <small class="cart-dropdown-qty">{{ item.quantity }} qty</small>
            <small class="cart-dropdown-delete" @click="removeFromCart(item.id)"
              >delete</small
            >
          </div>
        </div>
      </div>
    </template>
    <div class="cart-dropdown-total">
      <strong>Total:</strong>
      <small
        ><strong>${{ cartStore.cartTotalPrice }}</strong></small
      >
    </div>
    <div class="cart-dropdown-actions">
      <MainButton
        variant="secondary"
        :title="'To cart'"
        size="small"
        :href="'#'"
      />
      <MainButton
        variant="primary"
        :title="'To checkout'"
        size="small"
        :href="'#'"
      />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import ProductImage from "@/components/modules/ProductCard/ProductImage.vue";
import ProductTitle from "@/components/modules/ProductCard/ProductTitle.vue";
import MainButton from "@/components/modules/Common/MainButton.vue";

const cartStore = useCartStore();

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};
</script>

<style lang="scss">
.cart-dropdown {
  position: absolute;
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
  width: 160px;
}

.cart-dropdown-snapshot {
  display: flex;
  margin-bottom: 0.75rem;
  width: 100%;
}

.cart-dropdown-snapshot-right {
  padding-left: 0.5rem;
  width: 100%;
}

.cart-dropdown-snapshot-right-action {
  display: flex;
  justify-content: space-between;
}

.cart-dropdown-delete {
  color: #ef4444; /* Tailwind's text-red-500 */
  cursor: pointer;
  transition: text-decoration 0.2s ease;
}

.cart-dropdown-delete:hover {
  text-decoration: underline;
}

.cart-dropdown-total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.cart-dropdown-actions {
  display: flex;
  justify-content: space-between;
}

.cart-dropdown-snapshot .product-title {
  text-align: left;
  line-height: 1;
  font-size: 13px;
  font-weight: 300;
}
</style>
