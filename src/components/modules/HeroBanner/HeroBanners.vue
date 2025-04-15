<template>
  <section class="hero-banners">
    <div class="container">
      <template v-for="banner in banners" :key="banner.image">
        <HeroBanner>
          <template #title> <span v-html="banner.title"></span> </template>
          <template #beforeTitle>
            {{ banner.beforeTitle }}
          </template>
          <template #subTitle>
            {{ banner.subTitle }}
          </template>
          <template #btn>
            <MainButton variant="secondary" :href="banner.btnUrl" :title="banner.btn"></MainButton>
          </template>
          <template #image>
            <img :alt="banner.alt" :src="imageUrl(banner.image, folder)" fetchpriority="high" />
          </template>
        </HeroBanner>
      </template>
    </div>
  </section>
</template>
<script setup>
import HeroBanner from '@/components/modules/HeroBanner/HeroBanner.vue'
import { useImageUrl } from '@/composables/useImageUrl.js'
import MainButton from '@/components/modules/Common/MainButton.vue'

const banners = [
  {
    beforeTitle: 'Pro.Beyond.',
    title: 'IPhone 14 <span>Pro</span>',
    subTitle: 'Created to change everything for the better. For everyone',
    alt: 'IPhone 14 Pro',
    image: 'hero_banner_desktop.webp',
    imageMobile: 'hero_banner_mobile.webp',
    btn: 'Shop Now',
    btnUrl: '#'
  }
]

const folder = 'hero-banners'
const { imageUrl } = useImageUrl()
</script>
<style scoped lang="scss">
.hero-banners {
  background: linear-gradient(91deg, #211c24 0.64%, #211c24 101%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  min-height: 600px;

  .container {
    height: 100%;
  }
}

.hero-banners::v-deep .btn-secondary {
  border-color: #fff;
  color: #fff;
  padding: 16px 56px;
  font-size: 16px;
}

@media (min-width: 768px) {
  .hero-banners {
    height: 632px;
  }
}

@media (min-width: 992px) {
  .hero-banners {
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
}
</style>
