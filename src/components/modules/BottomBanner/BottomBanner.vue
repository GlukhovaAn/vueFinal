<template>
  <div
    ref="observedElement"
    class="lazy-load-background bottom-banner"
    :style="{ backgroundImage: isLoaded ? '' : `url(${currentBackgroundUrl})` }"
  >
    <div class="module-head">
      <h3 class="module-head-title">Big Summer <span>Sale</span></h3>
    </div>
    <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
    <MainButton
      variant="secondary"
      href="#"
      title="Shop now"
      class="mt-10"
    ></MainButton>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MainButton from "../Common/MainButton.vue";
import { useImageUrl } from "@/hooks/useImageUrl.js";

const folder = "bottom-banners";
const { imageUrl } = useImageUrl();

const currentBackgroundUrl = imageUrl("banner.png", folder);
const isLoaded = ref(false);
</script>

<style>
.lazy-load-background {
  width: 100%;
  height: 440px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;
}

.bottom-banner {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  font-size: 16px;
  line-height: 2em;
  color: #787878;
}

.bottom-banner .module-head {
  margin-bottom: 0;
}

.bottom-banner .module-head-title {
  color: #fff;
  font-size: 48px;
  font-weight: 200;
  line-height: 72px; /* 150% */
  letter-spacing: -0.48px;
}

.bottom-banner .btn {
  border: 1px solid #fff;
  color: #fff;
  padding: 16px 56px;
  font-size: 16px;
}
</style>
