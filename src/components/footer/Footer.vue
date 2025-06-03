<script setup>
import { ref } from "vue";
import FooterCustom from "./FooterCustomContent.vue";
import Socials from "./Socials.vue";
import FooterInformation from "./FooterInformation.vue";

const servicesTitle = "Services";
const servicesMenus = ref([
  { name: "Bonus program", id: "1", url: "#" },
  { name: "Gift cards", id: "2", url: "#" },
  { name: "Credit and payment", id: "3", url: "#" },
  { name: "Service contracts", id: "4", url: "#" },
  { name: "Non-cash account", id: "5", url: "#" },
  { name: "Payment", id: "6", url: "#" },
]);

const assistanceTitle = "Assistance to the buyer";
const assistanceMenus = ref([
  { name: "Find an order", id: "1", url: "#" },
  { name: "Terms of delivery", id: "2", url: "#" },
  { name: "Exchange and return of goods", id: "3", url: "#" },
  { name: "Guarantee", id: "4", url: "#" },
  { name: "Frequently asked questions", id: "5", url: "#" },
  { name: "Terms of use of the site", id: "6", url: "#" },
]);
</script>

<template>
  <section class="footer">
    <div class="footer-container">
      <div class="footer-rows">
        <div class="footer-column footer-column-1">
          <FooterCustom />
        </div>
        <div class="footer-column footer-column-2">
          <FooterInformation :title="servicesTitle" :menus="servicesMenus" />
        </div>
        <div class="footer-column footer-column-3">
          <FooterInformation
            :title="assistanceTitle"
            :menus="assistanceMenus"
          />
        </div>
      </div>
      <div class="footer-socials">
        <Socials />
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer {
  background: #000;
  padding: 3rem 1rem;
}

@media (min-width: 992px) {
  .footer {
    padding: 6.5rem 0;
  }
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-rows {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .footer-rows {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-column {
  padding-right: 0;
}

.footer-column-1 {
  padding-right: 2.5rem;
}

.footer-socials {
  margin-top: 1rem;
}
</style>

<style>
.footer .logo {
  color: #fff;
}

.footer .module {
  margin-bottom: 0;
}

.footer .module-head {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

@media (min-width: 768px) {
  .footer .module-head {
    text-align: left;
  }
}
</style>
