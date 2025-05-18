<template>
  <section class="category-offer module">
    <div class="category-offer-module container">
      <div class="module-head">
        <h3 class="module-head-title">Browse By Category</h3>
        <div class="carousel-nav">
          <button @click="prev" class="category-offer-carousel-prev">
            <IconArrow />
          </button>
          <button @click="next" class="category-offer-carousel-next">
            <IconArrow />
          </button>
        </div>
      </div>
      <div class="category-offer-list module-body">
        <Carousel v-bind="carouselConfig" ref="carouselRef">
          <Slide v-for="category in categoryItems" :key="category.id">
            <RouterLink
              :to="`/category/${category.id}`"
              class="category-menu-item"
            >
              <div class="category-offer-box flex flex-col items-center">
                <component
                  class="category-offer-img"
                  :is="category.icon"
                ></component>
                <span class="category-offer-name">{{ category.name }}</span>
              </div>
            </RouterLink>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import IconArrow from "../../icons/commons/iconArrow.vue";

const categoryIcons = [
  {
    id: 1,
    smallIcon: defineAsyncComponent(
      () => import("../../icons/categoryMenu/iconPhones.vue")
    ),
    icon: defineAsyncComponent(
      () => import("../../icons/categoryOffer/iconPhones.vue")
    ),
  },
  {
    id: 2,
    smallIcon: defineAsyncComponent(
      () => import("../../icons/categoryMenu/iconComputers.vue")
    ),
    icon: defineAsyncComponent(
      () => import("../../icons/categoryOffer/iconComputers.vue")
    ),
  },
  {
    id: 3,
    smallIcon: defineAsyncComponent(
      () => import("../../icons/categoryMenu/iconWatches.vue")
    ),
    icon: defineAsyncComponent(
      () => import("../../icons/categoryOffer/iconWatches.vue")
    ),
  },
  {
    id: 4,
    smallIcon: defineAsyncComponent(
      () => import("../../icons/categoryMenu/iconCameras.vue")
    ),
    icon: defineAsyncComponent(
      () => import("../../icons/categoryOffer/iconCameras.vue")
    ),
  },
  {
    id: 5,
    smallIcon: defineAsyncComponent(
      () => import("../../icons/categoryMenu/iconHeadphones.vue")
    ),
    icon: defineAsyncComponent(
      () => import("../../icons/categoryOffer/iconHeadphones.vue")
    ),
  },
  {
    id: 6,
    smallIcon: defineAsyncComponent(
      () => import("../../icons/categoryMenu/iconGaming.vue")
    ),
    icon: defineAsyncComponent(
      () => import("../../icons/categoryOffer/iconGaming.vue")
    ),
  },
];

const categoryItems = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchCategories = async () => {
  loading.value = true;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_ENDPOINT}/api/category/`
    );
    if (!response.ok) {
      throw new Error("Failed to load categories");
    }
    const data = await response.json();
    categoryItems.value = data.map((el) => {
      return {
        ...el,
        smallIcon: categoryIcons.find((item) => item.id === el.id).smallIcon,
        icon: categoryIcons.find((item) => item.id === el.id).icon,
      };
    });
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCategories();
});

const carouselRef = ref();

const carouselConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: true,
  snapAlign: "end",
  breakpoints: {
    200: {
      itemsToShow: 2,
    },
    768: {
      itemsToShow: 3,
    },
    992: {
      itemsToShow: 4,
    },
    1200: {
      itemsToShow: 5,
    },
    1400: {
      itemsToShow: 6,
    },
  },
};

const next = () => {
  carouselRef.value.next();
};
const prev = () => {
  carouselRef.value.prev();
};
</script>
<style scoped lang="scss">
.category-offer {
  padding: 64px 0;
  background: #fafafa;
}

.category-offer-list {
  --carousel-padding: 0.5rem;
  .carousel {
    margin: 0 calc(var(--carousel-padding) * -1);
    width: calc(100% + calc(var(--carousel-padding) * 2));
  }

  .carousel__slide {
    padding: 0 var(--carousel-padding);
  }
}

.category-offer .module-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-offer-carousel-prev {
  transform: rotate(180deg);
}

.carousel-nav {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.category-menu-item {
  padding: 1.5rem 1rem;
  border-radius: 15px;
  background: var(--card-background);
  transition: var(--transition);
  color: #000;
  display: flex;
  width: 100%;
}

.category-menu-item:hover {
  background: var(--card-hover-background);
}

.category-offer-name {
  line-height: 1;
  text-align: center;
}

.category-offer-box {
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
}

@media (min-width: 1200px) {
  .category-offer-list {
    --carousel-padding: 1rem;
  }
}
</style>
