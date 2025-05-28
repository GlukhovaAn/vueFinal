<template>
  <div class="discounted-products module container">
    <div class="module-head">
      <h3 class="module-head-title">Related Products</h3>
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
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const limit = 4;
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchProducts = async () => {
      loading.value = true;

      try {
        // 1. Получаем список категорий
        const categoryRes = await fetch(
          `${import.meta.env.VITE_BASE_ENDPOINT}/api/category/`
        );

        if (!categoryRes.ok) {
          throw new Error("Failed to load categories");
        }

        const categoryData = await categoryRes.json();

        // 2. Ищем категорию по имени из пропса
        const foundCategory = categoryData.find(
          (cat) => cat.name.toLowerCase() === props.categoryName.toLowerCase()
        );

        if (!foundCategory) {
          throw new Error("Category not found");
        }

        // 3. Получаем продукты по ID категории
        const productRes = await fetch(
          `${import.meta.env.VITE_BASE_ENDPOINT}/api/category/${foundCategory.id}`
        );

        if (!productRes.ok) {
          throw new Error("Failed to load products");
        }

        const productData = await productRes.json();

        // 4. Сохраняем только первые limit товаров
        products.value = productData.slice(0, limit);
      } catch (err) {
        error.value = err.message;
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
      products,
    };
  },
};
</script>
