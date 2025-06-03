<template>
  <div class="product-accordions">
    <div class="product-accordion-menu">
      <ul>
        <li
          @click="fetchProducts('newArrival')"
          :class="{ selected: isActive === 'newArrival' }"
        >
          New Arrival
        </li>
        <li
          @click="fetchProducts('bestSeller')"
          :class="{ selected: isActive === 'bestSeller' }"
        >
          Bestseller
        </li>
        <li
          @click="fetchProducts('featured')"
          :class="{ selected: isActive === 'featured' }"
        >
          Featured Products
        </li>
      </ul>
    </div>

    <ProductModule :error="error" :loading="loading" :products="products" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductModule from "../Common/ProductModule.vue";

export default {
  components: { ProductModule },
  setup() {
    const limit = 8;
    const products = ref(
      Array(limit)
        .fill()
        .map(() => [])
    );
    const isActive = ref("newArrival");
    const loading = ref(true);
    const error = ref(null);

    const fetchProducts = async (productType) => {
      loading.value = true;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_ENDPOINT}/api/products`
        );
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();

        if (productType === "bestSeller") {
          products.value = data.slice(4, limit + 4);
        } else if (productType === "featured") {
          products.value = data.slice(6, limit + 6);
        } else {
          products.value = data.slice(0, limit);
        }
      } catch (err) {
        error.value = err.message;
      } finally {
        isActive.value = productType;
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts("newArrival");
    });

    return {
      products,
      fetchProducts,
      loading,
      error,
      isActive,
    };
  },
};
</script>

<style scoped>
.product-accordions {
  padding: 1rem;
  max-width: 1120px;
  margin: auto;
}

.product-accordion-menu {
  margin-bottom: 2rem;
}

.product-accordion-menu ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-accordion-menu li {
  color: #8b8b8b;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.product-accordion-menu li:hover,
.product-accordion-menu li.selected {
  color: #000;
}

.product-accordion-menu li.selected::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000;
}
</style>
