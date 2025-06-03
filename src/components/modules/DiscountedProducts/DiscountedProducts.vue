<template>
  <div class="discounted-products module container">
    <div class="module-head">
      <h3 class="module-head-title">Discounts up to -50%</h3>
    </div>
    <div class="module-body">
      <ProductModule :error="error" :loading="loading" :products="products" />
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import ProductModule from "../Common/ProductModule.vue";

export default {
  components: { ProductModule },
  setup() {
    const limit = 4;
    const products = ref(
      Array(limit)
        .fill()
        .map(() => {
          [];
        })
    );
    const loading = ref(true);
    const error = ref(null);

    function getProductsWithBigDiscount(products) {
      return products.filter((product) => {
        const { price, discount_price } = product;

        if (!price || !discount_price) {
          return false;
        }

        const discountPercent = ((price - discount_price) / price) * 100;
        return discountPercent > 0;
      });
    }

    const fetchProducts = async () => {
      loading.value = true;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_ENDPOINT}/api/products`
        );

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        const dataWithDiscount = getProductsWithBigDiscount(data);
        products.value = dataWithDiscount.slice(2, limit + 2);
      } catch (error) {
        error.value = error.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      error,
      loading,
      fetchProducts,
      products,
    };
  },
};
</script>
