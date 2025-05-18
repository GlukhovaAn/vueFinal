<template>
  <div ref="dropdownRef" class="dropdown-wrapper relative">
    <button
      :id="`${id}-dropdown`"
      class="dropdown text-black font-normal rounded-md text-sm px-5 py-2.5 text-center justify-between inline-flex items-center border-gray-200 border-solid border-1"
      type="button"
      @click="toggleDropdown"
    >
      {{ selectedTitle }}

      <IconArrow
        :color="'#9F9F9F'"
        :orientation="isDropdownOpen ? 'top' : 'bottom'"
      />
    </button>

    <div
      v-if="isDropdownOpen"
      :id="`dropdown-${id}`"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dropdown-list absolute"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="item in options" :key="item.id">
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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

<style lang="scss">
@media (min-width: 768px) {
  .dropdown,
  .dropdown-list {
    min-width: 256px;
  }
}
</style>
