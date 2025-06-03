<script setup>
import Logo from "./Logo.vue";
import SearchInput from "./SearchInput.vue";
import HeaderIcons from "./HeaderIcons.vue";
</script>

<template>
  <div class="header">
    <div class="header-top header-module">
      <Logo />
      <SearchInput />
      <HeaderIcons />
    </div>
  </div>
</template>

<style>
.header {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 20;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.header-module {
  height: 88px;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-module .logo {
  color: #000;
}
</style>
