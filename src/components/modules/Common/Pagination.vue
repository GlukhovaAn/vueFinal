<template>
  <nav class="pagination-wrapper">
    <!-- Previous Button -->
    <button
      class="pagination-button"
      :class="{ disabled: currentPage === 1 }"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      <IconArrow :orientation="'left'" />
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in pages"
      :key="page"
      class="pagination-page"
      :class="{ active: page === currentPage }"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <!-- Next Button -->
    <button
      class="pagination-button"
      :class="{ disabled: currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      <IconArrow :orientation="'right'" />
    </button>
  </nav>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import IconArrow from "../../icons/commons/iconArrow.vue";

export default defineComponent({
  components: { IconArrow },
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
  },
  emits: ["page-change"],
  setup(props, { emit }) {
    const currentPage = ref(props.initialPage);

    const totalPages = computed(() =>
      Math.ceil(props.totalItems / props.itemsPerPage)
    );

    const pages = computed(() =>
      Array.from({ length: totalPages.value }, (_, i) => i + 1)
    );

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit("page-change", page);
      }
    };

    return {
      currentPage,
      totalPages,
      pages,
      goToPage,
    };
  },
});
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.pagination-button {
  padding: 6px;
  background-color: #fff;
  color: #4b5563;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: background 0.2s ease;
}

.pagination-button:hover {
  background-color: #d1d5db;
}

.pagination-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-page {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background-color: #e5e7eb;
  color: #000;
  cursor: pointer;
  transition: background 0.2s ease;
}

.pagination-page:hover {
  background-color: #d1d5db;
}

.pagination-page.active {
  background-color: #000;
  color: #fff;
}
</style>
