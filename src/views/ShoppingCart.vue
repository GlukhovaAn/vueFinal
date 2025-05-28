<template>
  <div class="p-[160px] grid grid-cols-1 md:grid-cols-2 gap-12">
    <!-- Shopping Cart -->
    <div>
      <h2 class="text-2xl font-semibold mb-6">Shopping Cart</h2>
      <div
        v-for="product in cart"
        :key="product.id"
        class="flex items-center justify-between border-b py-6"
      >
        <div class="flex items-center gap-4">
          <img
            :src="`${url}/${product.images[0]}`"
            alt="Product"
            class="w-20 h-20 object-contain"
          />
          <div>
            <h3 class="font-medium text-lg leading-5">{{ product.name }}</h3>
            <p class="text-sm text-gray-500">#{{ product.id }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="w-8 h-8 rounded flex items-center justify-center"
            @click="decreaseQuantity(product.id)"
          >
            −
          </button>

          <input
            type="number"
            min="1"
            class="w-12 text-center border border-gray-300 rounded"
            :value="product.quantity"
            @input="updateQuantity(product.id, $event.target.value)"
          />

          <button
            class="w-8 h-8 rounded flex items-center justify-center"
            @click="increaseQuantity(product.id)"
          >
            +
          </button>
        </div>

        <div class="text-xl font-semibold">
          ${{ product.price * product.quantity }}
        </div>

        <button
          @click="remove(product.id)"
          class="text-gray-500 text-xl hover:text-red-500"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Order Summary -->
    <div class="bg-white border rounded-lg p-8 shadow-sm">
      <h3 class="text-lg font-medium mb-6">Order Summary</h3>

      <div class="mb-4">
        <label class="block text-sm text-gray-500 mb-1"
          >Discount code / Promo code</label
        >
        <input
          type="text"
          placeholder="Code"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm text-gray-500 mb-1"
          >Your bonus card number</label
        >
        <div class="flex">
          <input
            type="text"
            placeholder="Enter Card Number"
            class="flex-1 border rounded-l px-3 py-2"
          />
          <button class="bg-white border border-l-0 rounded-r px-4">
            Apply
          </button>
        </div>
      </div>

      <div class="space-y-2 text-sm">
        <div class="flex justify-between text-lg font-semibold">
          <span>Subtotal</span>
          <span class="font-semibold">${{ subtotal }}</span>
        </div>
        <div class="flex justify-between">
          <span>Estimated Tax</span>
          <span>$0</span>
        </div>
        <div class="flex justify-between">
          <span>Estimated shipping & Handling</span>
          <span>$0</span>
        </div>
        <div class="flex justify-between text-lg font-semibold pt-4 mt-4">
          <span>Total</span>
          <span>${{ subtotal }}</span>
        </div>
      </div>

      <button
        class="w-full mt-6 bg-black text-white py-3 rounded text-lg hover:bg-gray-800"
        @click="checkout"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore.js";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const url = import.meta.env.VITE_BASE_ENDPOINT;

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const remove = (id) => {
  cartStore.removeFromCart(id);
};

const increaseQuantity = (id) => {
  const item = cart.value.find((p) => p.id === id);
  if (item) {
    cartStore.updateQuantity(id, item.quantity + 1);
  }
};

const decreaseQuantity = (id) => {
  const item = cart.value.find((p) => p.id === id);
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(id, item.quantity - 1);
  } else {
    cartStore.removeFromCart(id);
  }
};

const updateQuantity = (id, value) => {
  const quantity = parseInt(value);
  if (!isNaN(quantity)) {
    cartStore.updateQuantity(id, quantity);
  }
};

const checkout = () => {
  cartStore.clearCart();
};

const subtotal = computed(() =>
  cart.value.reduce(
    (total, product) =>
      total + (product.discountedPrice || product.price) * product.quantity,
    0
  )
);
</script>
