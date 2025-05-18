<script setup>
import KickerImage from "./KickerImage.vue";
import MainButton from "../Common/MainButton.vue";
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { ref } from "vue";
import { useImageUrl } from "@/hooks/useImageUrl";
const folder = "kicker-images";
const { imageUrl } = useImageUrl();

const kickerImages = ref([
  {
    title: "Popular Products",
    alt: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "popular_products.png",
    btn: "Shop Now",
    btnUrl: "#",
  },
  {
    title: "Ipad Pro",
    alt: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "ipad_pro.png",
    btn: "Shop Now",
    btnUrl: "#",
  },
  {
    title: "Samsung Galaxy",
    alt: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "samsung_galaxy.png",
    btn: "Shop Now",
    btnUrl: "#",
  },
  {
    title: "Macbook Pro",
    alt: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "macbook_pro.png",
    btn: "Shop Now",
    btnUrl: "#",
  },
]);

const carouselConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  // breakpoints are mobile first
  // any settings not specified will fallback to the carousel settings
  breakpoints: {
    // 200px and up
    576: {
      itemsToShow: 2,
    },
    // 400px and up
    992: {
      itemsToShow: 3,
    },
    1200: {
      itemsToShow: 4,
    },
  },
};
</script>
<template>
  <div class="kicker-images-section module">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(banner, index) in kickerImages" :key="banner.image">
        <KickerImage :class="`kicker-image-item-${index + 1}`">
          <template #image>
            <img
              :src="imageUrl(banner.image, folder)"
              :alt="banner.alt"
              loading="lazy"
              class="w-full"
              width="360"
              height="360"
            />
          </template>
          <template #title>
            {{ banner.title }}
          </template>
          <template #description>
            <p>{{ banner.description }}</p>
          </template>
          <template #btn v-if="banner?.btn">
            <MainButton
              variant="secondary"
              :classes="['kicker-images-btn']"
              :href="banner?.btnUrl"
              :title="banner?.btn"
            ></MainButton>
          </template>
        </KickerImage>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<style lang="scss">
.kicker-image-item-1 {
  background: #fff;
}

.kicker-images-section {
  .carousel__slide {
    display: flex;
  }

  .kicker-image-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }
}

.kicker-image-item-2 {
  background: #f9f9f9;
}

.kicker-image-item-3 {
  background: #eaeaea;
}

.kicker-image-item-4 {
  background: #2c2c2c;
}

.kicker-image-item-4 .kicker-image-title h3 {
  color: #fff;
}

.kicker-image-item-4 .kicker-images-btn {
  border-color: #fff;
  color: #fff;
}

.kicker-image-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn.kicker-images-btn {
  padding-left: 56px;
  padding-right: 56px;
}

.carousel__pagination-button::after {
  --vc-pgn-width: 8px;
  --vc-pgn-height: 8px;

  --vc-clr-secondary: #000;
  border-radius: 100%;
}

.carousel__pagination {
  margin: -30px 0 0;
  position: relative;
}

.carousel__pagination-button:not(.carousel__pagination-button--active) {
  opacity: 0.1;
}

@media (min-width: 1200px) {
  .kicker-image-btn-container {
    justify-content: start;
  }

  .carousel__pagination {
    display: none;
  }
}
</style>
