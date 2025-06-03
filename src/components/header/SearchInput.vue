<template>
  <div class="search-input-module">
    <div
      class="search-overlay"
      @click="closeFilter"
      :class="{ active: filteredProducts.length || error }"
    ></div>

    <div class="search-wrapper">
      <div class="search-icon-wrapper">
        <iconSearch />
      </div>
      <input
        type="text"
        autocomplete="off"
        v-model="filteredPhrase"
        name="search"
        id="search"
        class="search-input"
        placeholder="Search"
        @keyup="filter"
        ref="searchInput"
      />
    </div>

    <div
      class="search-results not-found"
      :class="{ active: !filteredProducts.length && filteredPhrase.length > 3 }"
    >
      <small>Not found any product.</small>
    </div>

    <div
      class="search-results"
      :class="{ active: filteredProducts.length || error }"
    >
      <div class="search-results-products">
        <h3 class="search-results-title">Search results:</h3>
      </div>
      <div class="search-results-actions">
        <MainButton
          variant="secondary"
          block
          size="small"
          title="Clear filter"
          @click="clearFilter"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import iconSearch from "@/components/icons/commons/iconSearch.vue";
import { ref } from "vue";
import MainButton from "@/components/modules/Common/MainButton.vue";

const products = ref([]);
const memoizedProducts = ref(null);
const filteredProducts = ref([]);
const filteredPhrase = ref("");
const searchInput = ref(null);

const clearFilter = () => {
  filteredProducts.value = [];
  filteredPhrase.value = "";
  searchInput.value.focus();
};

const closeFilter = () => {
  filteredProducts.value = [];
  filteredPhrase.value = "";
};

const filter = (event) => {
  const phrase = event.target.value;
  if (phrase.length > 3) {
    if (memoizedProducts.value) {
      filteredProducts.value = memoizedProducts.value
        .filter((product) =>
          product.title.toLowerCase().includes(phrase.toLowerCase())
        )
        .slice(0, 5);
    } else {
      fetchProducts(phrase);
    }
  }
};

const loading = ref(true);
const error = ref(null);

const fetchProducts = async (phrase) => {
  // implement your product fetch logic
};
</script>

<style scoped>
.search-input-module {
  position: relative;
  display: none;
}

@media (min-width: 992px) {
  .search-input-module {
    display: block;
    width: 250px;
  }
}

@media (min-width: 1200px) {
  .search-input-module {
    width: 350px;
  }
}

@media (min-width: 1400px) {
  .search-input-module {
    width: 435px;
  }
}

.search-wrapper {
  position: relative;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

.search-icon-wrapper {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
}

.search-input {
  display: block;
  width: 100%;
  height: 56px;
  padding: 0.375rem 5rem 0.375rem 2.5rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 1.5;
  outline: none;
  transition: all 0.2s;
}

.search-input:focus {
  box-shadow: 0 0 0 1px #d1d5db;
}

.search-overlay {
  position: fixed;
  z-index: 40;
  visibility: hidden;
}

.search-overlay.active {
  visibility: visible;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
}

.search-results {
  position: absolute;
  top: 100%;
  right: 0;
  display: block;
  visibility: hidden;
  opacity: 0.3;
  transform: scale(1, 0);
  width: 100%;
  transition: var(--transition);
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  transform-origin: top;
  animation-fill-mode: forwards;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 50;
}

.search-results.active {
  transform: scale(1, 1);
  visibility: visible;
  opacity: 1;
}

.search-results.not-found {
  padding: 0.5rem;
}

.search-results-products h3.search-results-title {
  margin-bottom: 1rem;
}

.search-result-snapshot .product-title {
  text-align: left;
  line-height: 1;
  font-size: 13px;
  font-weight: 300;
}
</style>
