<script setup>
import SmallBannerItem from "@/components/modules/SmallBanner/SmallBannerItem.vue";
import MainButton from "@/components/modules/Common/MainButton.vue";
import { ref } from "vue";
import { useImageUrl } from "@/hooks/useImageUrl";
const folder = "small-banners";
const { imageUrl } = useImageUrl();

const smallBanners = ref([
  {
    title: "Apple AirPods <span>Max</span>",
    alt: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
    image: "apple_airpods_max.webp",
  },
  {
    title: "Apple Vision <span>Pro</span>",
    alt: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
    image: "apple_vision_pro.webp",
  },
  {
    title: "Playstation <span>5</span>",
    alt: "Playstation 5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    image: "playstation.webp",
  },
  {
    title: "Macbook <span>Air</span>",
    alt: "Macbook Air",
    description:
      "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    image: "macbook_air.webp",
    btn: "Shop Now",
    btnUrl: "#",
  },
]);
</script>
<template>
  <div class="small-banners-section">
    <template v-for="(banner, index) in smallBanners" :key="banner.image">
      <SmallBannerItem :class="`small-banner-item-${index + 1}`">
        <template #image>
          <img
            :src="imageUrl(banner.image, folder)"
            :alt="banner.alt"
            loading="lazy"
          />
        </template>
        <template #title>
          <h2 v-html="banner.title"></h2>
        </template>
        <template #description>
          <p>{{ banner.description }}</p>
        </template>
        <template #btn v-if="banner?.btn">
          <MainButton
            variant="secondary"
            :block="true"
            :classes="['small-banner-btn']"
            :href="banner?.btnUrl"
            :title="banner?.btn"
          ></MainButton>
        </template>
      </SmallBannerItem>
    </template>
  </div>
</template>
<style>
@media (min-width: 576px) {
  .btn.small-banner-btn {
    width: initial;
    padding-left: 56px;
    padding-right: 56px;
  }
}

@media (min-width: 768px) {
  .small-banners-section {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }
}

@media (min-width: 1200px) {
  .small-banners-section {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-height: 600px;
  }

  .small-banner {
    padding: 3rem;
  }

  .small-banner .small-banner-image {
    position: absolute;
  }

  .small-banner-item-1 {
    grid-area: 2 / 1 / 3 / 2;
    height: 272px;
  }

  .small-banner-item-2 {
    grid-area: 2 / 2 / 3 / 3;
    height: 272px;
  }
  .small-banner-item-3 {
    grid-area: 1 / 1 / 2 / 3;
    height: 328px;
  }
  .small-banner-item-4 {
    grid-area: 1 / 3 / 3 / 5;
    height: 600px;
  }

  .small-banner-text-contents {
    align-items: start;
  }

  .small-banner-description {
    text-align: left;
    font-size: 14px;
  }

  .small-banner-item-1 .small-banner-title h2,
  .small-banner-item-2 .small-banner-title h2 {
    font-size: 29px;
  }

  .small-banner-item-3 .small-banner-title h2 {
    font-size: 49px;
  }

  .small-banner-item-4 .small-banner-title h2 {
    font-size: 64px;
  }

  .small-banner-item-1 .small-banner-text-contents {
    padding-left: 7.5vw;
  }

  .small-banner-item-2 .small-banner-text-contents {
    padding-left: 8vw;
  }

  .small-banner-item-3 .small-banner-text-contents {
    padding-left: 18vw;
  }

  .small-banner-item-4 .small-banner-text-contents {
    padding-right: 16vw;
  }

  .small-banner-item-1 .small-banner-image img {
    height: 272px;
    max-height: 272px;
  }

  .small-banner-item-2 .small-banner-image img {
    height: 190px;
    max-height: 190px;
  }

  .small-banner-item-1 .small-banner-image {
    left: -150px;
  }

  .small-banner-item-2 .small-banner-image {
    left: -180px;
  }

  .small-banner-item-3 .small-banner-image {
    left: -80px;
  }

  .small-banner-item-4 .small-banner-image {
    right: -510px;
  }

  .small-banner-item-3 .small-banner-image img {
    height: 343px;
    max-height: 343px;
  }

  .small-banner-item-4 .small-banner-image img {
    height: 502px;
    max-height: 502px;
  }
}
</style>
