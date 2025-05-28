<template>
  <svg
    v-if="type === 'full'"
    class="w-6 h-6 text-[#fbbf24] fill-current"
    viewBox="0 0 20 20"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.159c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.922-.755 1.688-1.539 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.196-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.025 9.383c-.783-.57-.38-1.81.588-1.81h4.159a1 1 0 00.95-.69l1.287-3.956z"
    />
  </svg>

  <svg
    v-else-if="type === 'half'"
    class="w-6 h-6 text-[#fbbf24]"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stop-color="currentColor" />
        <stop offset="50%" stop-color="transparent" stop-opacity="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half)"
      d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.179L12 18.896l-7.336 3.861 1.402-8.179L.132 9.211l8.2-1.193z"
    />
  </svg>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "full",
  },
});
</script>
