<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    fill="none"
    class="icon-arrow"
    :class="`orientation-${orientation}`"
  >
    <path d="M9 6L15 12L9 18" :stroke="color" />
  </svg>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: '#2E2E2E'
  },
  orientation: {
    type: String,
    default: 'right',
    validator: function (value) {
      return ['left', 'top', 'right', 'bottom'].includes(value)
    }
  }
})

const computedSize = computed(() => {
  return props.size * 0.75
})
</script>
<style lang="scss">
.orientation {
  transform-origin: center center;
  &-left {
    transform: rotate(180deg);
  }

  &-top {
    transform: rotate(270deg);
  }

  &-right {
    transform: rotate(0deg);
  }

  &-bottom {
    transform: rotate(90deg);
  }
}
</style>
