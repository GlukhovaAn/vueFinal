<template>
  <component :is="href ? 'a' : 'button'" :href="href || null" class="btn" :class="computedClasses">
    {{ title }}
  </component>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String
  },
  size: {
    type: String,
    default: 'medium' // Add a default size if needed
  },
  title: {
    type: String,
    default: 'Button'
  },
  block: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    required: true,
    validator: function (value) {
      return ['primary', 'secondary'].includes(value)
    }
  },
  classes: {
    type: Array,
    default: () => []
  }
})

const computedClasses = computed(() => {
  const sizeClass = `btn-${props.size}` // Create a class based on size prop
  const variantClass = `btn-${props.variant}`
  const blockClass = props.block ? 'btn-block' : null
  return [sizeClass, blockClass, variantClass, ...props.classes] // Combine size class with provided classes
})
</script>
<style scoped>
.btn {
  border-radius: 8px;
  display: flex;
  padding: 13px 16px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  transition: var(--transition);
}

.btn-small {
  padding: 8px;
  font-size: 12px;
  border-radius: 6px;
  min-width: 75px;
  font-weight: 500;
}

.btn:focus,
.btn:hover {
  opacity: 0.75;
}

.btn-primary {
  background: #000;
  color: #fff;
}

.btn-secondary {
  border-radius: 6px;
  border: 1px solid #000;
  background: transparent;
  color: #000;
}

.btn-secondary:focus,
.btn-secondary:hover {
  opacity: 0.75;
}

.btn-block {
  width: 100%;
}
</style>
