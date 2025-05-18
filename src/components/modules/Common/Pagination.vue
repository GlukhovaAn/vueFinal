<template>
  <nav class="flex items-center justify-center space-x-2">
    <!-- Previous Button -->
    <button
      class="p-1 rounded-md bg-white text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      <IconArrow :orientation="'left'" />
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in pages"
      :key="page"
      class="px-3 py-1 rounded-md border"
      :class="{
        'bg-black text-white': page === currentPage,
        'bg-gray-200 text-black hover:bg-gray-300': page !== currentPage,
      }"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <!-- Next Button -->
    <button
      class="p-1 rounded-md bg-white text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

    // Calculate total pages
    const totalPages = computed(() =>
      Math.ceil(props.totalItems / props.itemsPerPage)
    );

    // Generate page numbers
    const pages = computed(() =>
      Array.from({ length: totalPages.value }, (_, i) => i + 1)
    );

    // Change page
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit("page-change", page); // Emit the event for the parent
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
/* Add any custom styling here if needed */
</style>
