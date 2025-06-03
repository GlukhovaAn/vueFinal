<template>
  <div ref="dropdownRef" class="dropdown-wrapper">
    <button
      :id="`${id}-dropdown`"
      class="dropdown-button"
      type="button"
      @click="toggleDropdown"
    >
      {{ selectedTitle }}
      <IconArrow
        :color="'#9F9F9F'"
        :orientation="isDropdownOpen ? 'top' : 'bottom'"
      />
    </button>

    <div v-if="isDropdownOpen" :id="`dropdown-${id}`" class="dropdown-list">
      <ul class="dropdown-options">
        <li v-for="item in options" :key="item.id">
          <a
            href="#"
            class="dropdown-option"
            @click.prevent="selectOption(item)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import IconArrow from "../../icons/commons/iconArrow.vue";

const emit = defineEmits(["change-dropdown"]);
const props = defineProps({
  id: String,
  options: Array,
  defaultOption: String,
});

const isDropdownOpen = ref(false);
const selectedTitle = ref(props.defaultOption);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (dropdown) => {
  emit("change-dropdown", dropdown);
  selectedTitle.value = dropdown.title;
  isDropdownOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  min-width: 256px;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  margin-top: 5px;
  z-index: 10;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 256px;
}

.dropdown-options {
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 0.875rem;
  color: #4b5563;
}

.dropdown-option {
  display: block;
  padding: 8px 16px;
  color: inherit;
  text-decoration: none;
  transition: background 0.2s ease;
}

.dropdown-option:hover {
  background-color: #f3f4f6;
  color: #111827;
}

/* Dark mode styles if needed */
.dark .dropdown-list {
  background-color: #374151;
}

.dark .dropdown-option {
  color: #e5e7eb;
}

.dark .dropdown-option:hover {
  background-color: #4b5563;
  color: #ffffff;
}
</style>
