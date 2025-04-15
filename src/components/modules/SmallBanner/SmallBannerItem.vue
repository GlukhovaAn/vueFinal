<template>
  <div
    class="small-banner relative overflow-hidden flex gap-6 justify-center items-center flex-col"
  >
    <div class="small-banner-image">
      <slot name="image" />
    </div>
    <div class="small-banner-text-contents flex gap-6 justify-center items-center flex-col">
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
<style>
.small-banner {
  padding: 40px 16px;
}

.small-banner-item-1 {
  background: #ededed;
}

.small-banner-item-2 {
  background: #353535;
}

.small-banner-item-2 .small-banner-title h2 {
  color: #fff;
}

.small-banner-item-3 {
  background: #fff;
}

.small-banner-item-4 {
  background: #ededed;
}

.small-banner-title h2 {
  font-size: 34px;
  font-weight: 300;
  line-height: 40px; /* 117.647% */
  color: #000;
}

.small-banner-title h2 span {
  font-weight: 500;
}

.small-banner-description {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: #909090;
  text-align: center;
}

.small-banner-image img {
  max-height: 200px;
}
</style>
