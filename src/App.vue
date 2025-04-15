<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
</script>
<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>
