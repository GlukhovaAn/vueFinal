<template>
  <div class="footer-information module">
    <div class="module-head">
      <h3 class="module-head-title">{{ title }}</h3>
    </div>
    <div class="module-body mb-5">
      <ul class="footer-information-list">
        <li class="footer-information-item" v-for="menu in menus" :key="menu.id">
          <a :href="menu.url" class="footer-information-link">{{ menu.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Module'
  },
  menus: {
    type: Array
  }
})
</script>
<style scoped>
.module-head {
  color: #fff;
  margin-bottom: 6px;
}

.footer-information-item {
  padding: 5px 0;
  text-align: center;
}

.footer-information-link {
  color: #cfcfcf;
  font-size: 0.875rem;
  font-weight: 300;
}

@media (min-width: 768px) {
  .footer-information-item {
    text-align: left;
  }
}
</style>
