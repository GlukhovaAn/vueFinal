<template>
  <div class="filter-sidebar">
    <!-- Фильтр: Бренд -->
    <div class="filter-block">
      <div class="filter-header">
        <span>Brand</span>
        <span class="arrow">▾</span>
      </div>

      <div class="filter-search">
        <input type="text" placeholder="Search" />
      </div>

      <ul class="filter-options">
        <li v-for="(brand, index) in brands" :key="index">
          <label>
            <input type="checkbox" :checked="index === 0" />
            <span class="label-text">{{ brand.name }}</span>
            <span class="count">{{ brand.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Остальные фильтры -->
    <div class="filter-block" v-for="(item, idx) in otherFilters" :key="idx">
      <div class="filter-header">
        <span>{{ item }}</span>
        <span class="arrow">▾</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const brands = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 35 },
];

const otherFilters = [
  "Battery capacity",
  "Screen type",
  "Screen diagonal",
  "Protection class",
  "Built-in memory",
];
</script>

<style scoped>
.filter-sidebar {
  font-family: sans-serif;
  max-width: 320px;
  padding: 8px 0;
}

.filter-block {
  border-bottom: 1px solid #e5e5e5;
  padding: 8px 0;
}

.filter-header {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
}

.arrow {
  font-size: 14px;
}

.filter-search {
  margin: 8px 0;
  padding: 0 4px;
}

.filter-search input {
  width: 100%;
  padding: 6px 12px;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  font-size: 14px;
}

.filter-options {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-options li {
  margin: 6px 0;
  display: flex;
  align-items: center;
}

.filter-options label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  width: 100%;
}

.filter-options input[type="checkbox"] {
  margin-right: 8px;
  accent-color: black;
}

.label-text {
  flex: 1;
}

.count {
  font-size: 12px;
  color: #aaa;
  margin-left: 4px;
}
</style>
