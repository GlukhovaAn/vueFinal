<template>
  <div class="kicker-image-item">
    <div class="kicker-image-item-image">
      <slot name="image" />
    </div>
    <div class="kicker-image-body">
      <div class="kicker-image-title">
        <h3>
          <slot name="title" />
        </h3>
      </div>
      <div class="kicker-image-description">
        <slot name="description" />
      </div>
      <div class="kicker-image-btn-container">
        <slot name="btn" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.kicker-image-item-image {
  display: flex;
  justify-content: center;
}

.kicker-image-body {
  padding: 0px 32px 56px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  text-align: center;
}

.kicker-image-description {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  color: #909090;
  text-align: center;
}

.kicker-image-title {
  display: flex;
  width: 100%;
  justify-content: center;
}

.kicker-image-title h3 {
  font-size: 49px;
  font-weight: 40;
  line-height: 48px; /* 97.959% */
}

@media (min-width: 992px) {
  .kicker-image-title h3 {
    font-size: 33px;
  }
}

@media (min-width: 1200px) {
  .kicker-image-description,
  .kicker-image-item {
    text-align: left;
  }

  .kicker-image-title {
    justify-content: start;
  }
}
</style>
