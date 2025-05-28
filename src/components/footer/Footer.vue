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
    <div class="container">
      <div class="footer-rows grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="footer-column footer-column-1 pr-10">
          <FooterCustom />
        </div>
        <div class="footer-column footer-column-2">
          <FooterInformation :title="servicesTitle" :menus="servicesMenus" />
        </div>

        <div class="footer-column footer-column-2">
          <FooterInformation
            :title="assistanceTitle"
            :menus="assistanceMenus"
          />
        </div>
      </div>
      <div class="mt-4">
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
