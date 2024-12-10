<template>
  <SearchBox></SearchBox>
  <Navigation></Navigation>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import SearchBox from "./components/SearchBox.vue";
</script>
