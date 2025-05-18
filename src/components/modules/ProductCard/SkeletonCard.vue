<script setup>
import SkeletonImage from '@/components/modules/ProductCard/SkeletonImage.vue'
import SkeletonRow from '@/components/modules/ProductCard/SkeletonRow.vue'
import SkeletonButton from '@/components/modules/ProductCard/SkeletonButton.vue'
import SkeletonIcon from '@/components/modules/ProductCard/SkeletonIcon.vue'
</script>
<template>
  <div class="product-card product-skeleton">
    <div class="product-header w-full">
      <SkeletonIcon />
    </div>
    <SkeletonImage />
    <div class="product-card-body w-full">
      <div class="product-title">
        <SkeletonRow class="mb-1" />
        <SkeletonRow />
      </div>
      <div class="product-price"><SkeletonRow /></div>
      <div class="product-price"><SkeletonButton /></div>
    </div>
  </div>
</template>
<style>
@import '@/assets/css/productCard/productCard.css';
</style>
