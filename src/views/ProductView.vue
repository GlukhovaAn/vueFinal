<template>
  <!-- Loading & Error States -->
  <div v-if="loading" class="flex justify-center items-center h-64 text-lg">
    Loading...
  </div>
  <div v-else-if="error" class="text-red-500 text-center py-6 text-lg">
    {{ error }}
  </div>
  <div v-else>
    <div
      class="flex flex-col lg:flex-row gap-10 p-10 justify-center pt-[112px]"
    >
      <!-- Left: Images -->
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="flex lg:flex-col gap-3">
          <img
            v-for="(img, index) in product.images"
            :key="index"
            :src="`${url}/${img}`"
            class="w-16 h-16 object-cover border rounded-lg cursor-pointer"
            :class="{ 'ring-2 ring-black': img === mainImage }"
            @click="mainImage = img"
          />
        </div>
        <img
          :src="`${url}/${mainImage}`"
          class="w-[400px] h-auto object-contain rounded-xl"
        />
      </div>

      <!-- Right: Product Info -->
      <div class="flex-1 max-w-[545px]">
        <h1 class="text-[40px] font-regular italic mb-2">{{ product.name }}</h1>

        <div class="flex items-baseline gap-4 mb-4">
          <span class="text-[32px] font-semibold"
            >${{ product.discount_price / 100 }}</span
          >
          <span class="line-through text-gray-400 text-[24px]"
            >${{ product.price / 100 }}</span
          >
        </div>

        <!-- Grid Features -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div
            v-for="(char, index) in product.characteristics.slice(0, 6)"
            :key="index"
            class="flex items-center p-[16px] rounded-[7px] bg-[#F4F4F4] gap-[12px]"
          >
            <img
              :src="`/src/components/icons/product/${index + 1}.svg`"
              class="w-6 h-6 mb-2"
            />
            <div class="flex flex-col items-start">
              <span class="text-xs text-gray-500">{{
                char.characteristic
              }}</span>
              <span class="text-sm font-semibold"
                >{{ char.value }}
                {{ char.unit_type !== "значение" ? char.unit_type : "" }}</span
              >
            </div>
          </div>
        </div>

        <p class="text-gray-600 text-sm leading-relaxed mb-6 max-w-xl">
          Enhanced capabilities thanks to an enlarged display of 6.7 inches and
          work without recharging throughout the day. Incredible photos in weak,
          yes and in bright lighting using the new system with two cameras.
        </p>

        <!-- Buttons -->
        <div class="flex gap-4 mb-6">
          <button
            @click="addToWishlist"
            class="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition flex-grow"
          >
            Add to Wishlist
          </button>
          <button
            @click="addToCart"
            class="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition flex-grow"
          >
            Add to Cart
          </button>
        </div>

        <!-- Info Icons -->
        <div
          class="flex justify-between gap-6 text-center text-sm text-gray-600"
        >
          <div class="flex gap-6 items-center">
            <div class="bg-[#F4F4F4] rounded-[7px]">
              <img
                src="../components/icons/product/truck.svg"
                class="mx-auto mb-1 p-[16px]"
              />
            </div>
            Free Delivery<br />1–2 day
          </div>
          <div class="flex gap-6 items-center">
            <div class="bg-[#F4F4F4] rounded-[7px]">
              <img
                src="../components/icons/product/check.svg"
                class="mx-auto mb-1 p-[16px]"
              />
            </div>
            In Stock<br />Today
          </div>
          <div class="flex gap-6 items-center">
            <div class="bg-[#F4F4F4] rounded-[7px]">
              <img
                src="../components/icons/product/verified.svg"
                class="mx-auto mb-1 p-[16px]"
              />
            </div>
            Guaranteed<br />{{ product.guarantee }} year
          </div>
        </div>
      </div>
    </div>

    <!-- Details Block -->
    <div class="bg-gray-50 p-10 mt-10 flex items-center justify-center">
      <div class="w-[1120px] bg-[#fff] p-[40px]">
        <h2 class="italic text-xl mb-2">Details</h2>
        <p class="text-gray-500 italic text-sm mb-6 max-w-4xl">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display...
        </p>
        <table class="w-full text-sm border-t border-b">
          <tbody>
            <tr
              v-for="char in product.characteristics"
              :key="char.characteristic"
              class="border-t"
            >
              <td class="py-3 text-gray-600">{{ char.characteristic }}</td>
              <td class="py-3 text-right">
                {{ char.value }}
                {{ char.unit_type !== "значение" ? char.unit_type : "" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="pt-[88px] pb-[88px] pl-[200px]">
      <Rating />
    </div>
    <RelatedProducts :categoryName="product.category" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/useCartStore.js";
import { useWishlistStore } from "@/stores/wishlist.js";
import Rating from "@/components/modules/Common/Rating.vue";
import RelatedProducts from "@/components/modules/RelatedProducts/RelatedProducts.vue";
const url = import.meta.env.VITE_BASE_ENDPOINT;

const route = useRoute();
const productId = route.params.id;

const product = ref(null);
const mainImage = ref("");
const loading = ref(true);
const error = ref(null);

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

const fetchProduct = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_ENDPOINT}/api/products/${productId}`
    );
    if (!response.ok) throw new Error("Failed to fetch product");
    const data = await response.json();
    product.value = data;
    mainImage.value = data.images[0];
  } catch (err) {
    error.value = err.message || "Something went wrong";
  } finally {
    loading.value = false;
  }
};

const addToCart = () => {
  cartStore.addToCart(product.value);
};

const addToWishlist = () => {
  wishlistStore.addToWishlist(product.value);
};

onMounted(() => {
  fetchProduct();
});
</script>

<style scoped>
table {
  border-collapse: collapse;
}
td {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
}
</style>
