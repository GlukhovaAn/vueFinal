<template>
  <div class="small-banner">
    <div class="small-banner-image">
      <slot name="image" />
    </div>

    <div class="small-banner-text-contents">
      <div class="small-banner-title">
        <slot name="title" />
      </div>
      <div class="small-banner-description">
        <slot name="description" />
      </div>
      <slot name="btn" />
    </div>
  </div>
</template>

<style scoped>
.small-banner {
  position: relative;
  overflow: hidden;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.small-banner-image img {
  max-height: 200px;
  width: auto;
  display: block;
}

.small-banner-text-contents {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
}

.small-banner-title h2 {
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  color: #000;
}

.small-banner-title h2 span {
  font-weight: 500;
}

.small-banner-description {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #909090;
}

/* Дополнительные стили для различных вариантов баннера */
.small-banner-item-1 {
  background-color: #ededed;
}

.small-banner-item-2 {
  background-color: #353535;
}

.small-banner-item-2 .small-banner-title h2 {
  color: #fff;
}

.small-banner-item-3 {
  background-color: #fff;
}

.small-banner-item-4 {
  background-color: #ededed;
  padding-left: 60px;
}
</style>
