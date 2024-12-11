<template>
  <HeaderPage></HeaderPage>
  <div style="display: flex; justify-content: start; gap: 200px;">
    <MenuPage></MenuPage>
    <RouterView></RouterView>
  </div>
  <FooterPage></FooterPage>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
import HeaderPage from "./components/HeaderPage.vue";
import MenuPage from "./components/MenuPage.vue";
export default {
  components: {
    HeaderPage,
    MenuPage,
    FooterPage,
  },
};
</script>
