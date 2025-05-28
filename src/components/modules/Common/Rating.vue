<template>
  <div class="bg-[#fafafa] rounded-2xl p-6 w-64 text-center shadow-sm">
    <div class="text-[48px] font-semibold text-black leading-none">4.8</div>
    <div class="text-gray-400 italic text-[16px] mt-2">of 125 reviews</div>
    <div class="flex justify-center mt-4 space-x-1">
      <!-- 4 полных звезды -->
      <Star type="full" />
      <Star type="full" />
      <Star type="full" />
      <Star type="full" />
      <!-- 1 наполовину -->
      <Star type="half" />
    </div>
  </div>
</template>

<script setup>
import Star from "./Star.vue";
</script>
