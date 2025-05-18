<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  title: {
    type: String,
    default: 'Product name'
  }
})
</script>
<template>
  <div class="product-title">
    <RouterLink to="#" class="product-title-link hover:underline">{{ title }}</RouterLink>
  </div>
</template>
<style scoped>
.product-title {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  min-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
