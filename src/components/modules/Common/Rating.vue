<template>
  <div class="rating-box">
    <div class="rating-score">4.8</div>
    <div class="rating-subtitle">of 125 reviews</div>
    <div class="rating-stars">
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

<style scoped>
.rating-box {
  background-color: #fafafa;
  border-radius: 1rem; /* 2xl */
  padding: 1.5rem;
  width: 16rem; /* 64 */
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
}

.rating-score {
  font-size: 48px;
  font-weight: 600;
  color: #000;
  line-height: 1;
}

.rating-subtitle {
  color: #9ca3af; /* gray-400 */
  font-style: italic;
  font-size: 16px;
  margin-top: 0.5rem;
}

.rating-stars {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.25rem;
}
</style>
