<template>
  <div class="container pb-6">
    <div class="category-content-wrapper flex gap-6">
      <div class="product-filter w-[280px] shrink-0">
        <FilterSidebar />
      </div>
      <div class="product-list flex-1">
        <div class="product-list-top flex justify-between py-3">
          <ProductListCount :count="totalItemCount" />
          <Dropdown
            id="sort-list"
            :options="sortOptions"
            :defaultOption="defaultSortOption"
            @changeDropdown="onChangeDropdown"
          />
        </div>
        <ProductModule
          :error="error"
          :loading="loading"
          :products="products"
          class="py-3"
        />
        <Pagination
          :totalItems="totalItemCount"
          :itemsPerPage="limit"
          @pageChange="onPageChange"
          class="mb-3"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import ProductModule from "@/components/modules/Common/ProductModule.vue";
import Pagination from "@/components/modules/Common/Pagination.vue";
import ProductListCount from "@/components/modules/Common/ProductListCount.vue";
import Dropdown from "@/components/modules/Common/Dropdown.vue";
import FilterSidebar from "@/components/modules/Common/FilterSidebar.vue";

export default {
  components: {
    ProductModule,
    Pagination,
    ProductListCount,
    Dropdown,
    FilterSidebar,
  },
  setup() {
    const route = useRoute();
    const limit = 9;
    const products = ref([]);
    const allProducts = ref([]);
    const page = ref(1);
    const loading = ref(true);
    const error = ref(null);
    const totalItemCount = ref(0);
    const defaultSortOption = ref("By rating");
    const sort = ref("rating_asc");

    const sortOptions = ref([
      { id: 1, title: "By rating", sortBy: "rating_asc" },
      { id: 2, title: "By name, A-Z", sortBy: "title_asc" },
      { id: 3, title: "By name, Z-A", sortBy: "title_desc" },
      { id: 4, title: "By price, low to high", sortBy: "price_asc" },
      { id: 5, title: "By price, high to low", sortBy: "price_desc" },
    ]);

    const sortProducts = (list, sortBy) => {
      return [...list].sort((a, b) => {
        switch (sortBy) {
          case "rating_asc":
            return b.rating - a.rating;
          case "title_asc":
            return a.name.localeCompare(b.name);
          case "title_desc":
            return b.name.localeCompare(a.name);
          case "price_asc":
            return a.price - b.price;
          case "price_desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    };

    const updateProducts = () => {
      const start = (page.value - 1) * limit;
      const end = start + limit;
      products.value = allProducts.value.slice(start, end);
    };

    const onPageChange = (newPage) => {
      page.value = parseInt(newPage, 10);
      updateProducts();
    };

    const onChangeDropdown = (newSort) => {
      sort.value = newSort.sortBy;
      allProducts.value = sortProducts(allProducts.value, sort.value);
      page.value = 1;
      updateProducts();
    };

    const fetchProducts = async () => {
      loading.value = true;

      const categoryId = route.params.id;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_ENDPOINT}/api/category/${categoryId}`
        );
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        allProducts.value = sortProducts(data, sort.value);
        totalItemCount.value = allProducts.value.length;
        updateProducts();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    watch(
      () => route.params.id,
      () => {
        fetchProducts();
      }
    );

    return {
      limit,
      totalItemCount,
      error,
      loading,
      fetchProducts,
      onPageChange,
      products,
      sortOptions,
      defaultSortOption,
      onChangeDropdown,
    };
  },
};
</script>
