<template>
  <div class="hero-banner-item">
    <div class="hero-banner-text-contents">
      <p class="hero-banner-before-text"><slot name="beforeTitle" /></p>
      <h1 class="hero-banner-title"><slot name="title" /></h1>
      <p class="hero-banner-sub-title"><slot name="subTitle" /></p>
      <div class="hero-banner-btn-container">
        <slot name="btn" />
      </div>
    </div>
    <div class="hero-banner-image float-animate">
      <slot name="image" />
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
.hero-banner-before-text {
  color: #fff;
  font-family: 'Figtree';
  font-size: 25px;
  font-weight: 600;
  line-height: 32px; /* 128% */
  opacity: 0.4;
}

.hero-banner-item {
  display: flex;
  height: 100%;
  padding: 88px 16px 0px 16px;
  gap: 48px;
  flex-direction: column;
  justify-content: space-between;
}

.hero-banner-title {
  font-size: 72px;
  line-height: 1;
  letter-spacing: -0.96px;
  color: #fff;
}

.hero-banner-image {
  align-self: end;
  margin-bottom: -20px;
}

.hero-banner-title span {
  font-weight: 200;
  width: 100%;
  display: inline-block;
}

.hero-banner-title span span {
  font-weight: 600;
}

.hero-banner-text-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  justify-content: center;
}

.hero-banner-sub-title {
  color: #909090;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
}

.float-animate {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

@media (min-width: 768px) {
  .hero-banner-item {
    flex-direction: row;
    padding: 0;
  }

  .hero-banner-title {
    font-size: 96px;
  }

  .hero-banner-title span {
    width: initial;
  }

  .hero-banner-text-contents {
    align-items: start;
    text-align: left;
  }
}
</style>
