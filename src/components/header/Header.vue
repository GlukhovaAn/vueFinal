<script setup>
import Logo from './Logo.vue'
import SearchInput from './SearchInput.vue'
import HeaderIcons from './HeaderIcons.vue'
</script>
<template>
  <div class="header sticky top-0 bg-white z-20">
    <div class="header-top container header-module">
      <Logo />
      <SearchInput />
      <HeaderIcons />
    </div>
  </div>
</template>
<style>
.header-module {
  height: 88px;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header.sticky {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.header-module .logo {
  color: #000;
}
</style>
