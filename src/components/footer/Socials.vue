<script setup>
import IconTwitter from "@/components/icons/social/IconTwitter.vue";
import IconFaceBook from "@/components/icons/social/IconFacebook.vue";
import IconInstagram from "@/components/icons/social/IconInstagram.vue";
import IconTikTok from "@/components/icons/social/IconTikTok.vue";
</script>

<template>
  <div class="social-module">
    <a href="#" class="social-link" aria-label="Twitter - Cyber ecommerce"
      ><IconTwitter
    /></a>
    <a href="#" class="social-link" aria-label="Facebook - Cyber ecommerce"
      ><IconFaceBook
    /></a>
    <a href="#" class="social-link" aria-label="TikTok - Cyber ecommerce"
      ><IconTikTok
    /></a>
    <a href="#" class="social-link" aria-label="Instagram - Cyber ecommerce"
      ><IconInstagram
    /></a>
  </div>
</template>

<style scoped>
.social-module {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem; /* соответствует Tailwind `gap-6` */
}

@media (min-width: 768px) {
  .social-module {
    justify-content: flex-start;
  }
}

@media (max-width: 767px) {
  .social-module svg {
    width: 24px;
    height: 24px;
  }
}
</style>
