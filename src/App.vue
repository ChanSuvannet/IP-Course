<template>
  <div class="flex flex-col">
    <div
      class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-10 mt-10 w-full h-auto m-auto items-center mx-2"
    >
      <Category
        v-for="(f, index) in productStore.categories"
        :key="index"
        :name="f.name"
        :image="f.image"
        :productCount="f.productCount"
        :color="f.color"
      ></Category>
    </div>
    <div class="flex justify-center gap-2 mx-2">
      <Promotion
        v-for="(promotion, index) in productStore.promotions"
        :key="index"
        :title="promotion.title"
        :color="promotion.color"
        :buttonColor="promotion.buttonColor"
        :image="promotion.image"
      ></Promotion>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import { useProductStore } from "./productStore.service";
// Initialize the product store
const productStore = useProductStore();

const currentCategoryName = "Pet Foods";

// Computed property to get group names by category name
const groupNamesByCategory = computed(() => {
  return productStore.categories
    .filter((category) => category.group === currentCategoryName)
    .map((category) => category.name);
});

onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();

  console.log("Group name for category:", groupNamesByCategory.value);
});
</script>
