<script setup>
import iconFavorites from "@/components/icons/commons/iconFavorites.vue";
import { useWishlistStore } from "@/stores/wishlist.js";
import HeaderCart from "./HeaderCart.vue";
import { computed } from "vue";

const wishlistStore = useWishlistStore();
const wishlistCount = computed(() => wishlistStore.wishlistCount);
</script>

<template>
  <div class="header-icons">
    <RouterLink to="/wishlist" aria-label="Cyber - Ecommerce">
      <button class="header-btn-favorite" aria-label="Wishlist">
        <iconFavorites />
        <span class="wishlist-count red-pulse" v-if="wishlistCount > 0">
          {{ wishlistCount }}
        </span>
      </button>
    </RouterLink>
    <HeaderCart />
  </div>
</template>

<style scoped>
.header-icons {
  display: flex;
  gap: 1.5rem; /* gap-6 = 1.5rem */
}

.header-btn-favorite {
  height: 2rem; /* h-8 */
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}

.wishlist-count {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* fully rounded */
  font-size: 10px;
  color: #fff;
  font-weight: 600;
  width: 18px;
  height: 18px;
  background: #ff0000;
  top: -3px;
  right: -3px;
}

.red-pulse {
  box-shadow: 0 0 0 0 rgba(255, 0, 0, 1);
  transform: scale(1);
  animation: redPulse 2s infinite;
}

@keyframes redPulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(255, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}
</style>
