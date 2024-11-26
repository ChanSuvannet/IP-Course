<template>
  <div class="flex flex-col">
    <div class="flex justify-between mt-5 mx-3">
      <h1 class="text-3xl font-semibold">Featured Categories</h1>
      <div>
        <div class="flex gap-2 items-center">
          <!-- Display group names -->
          <FeatureCategory
            v-for="(group, index) in productStore.groups"
            :key="index"
            :name="group"
            @click="selectGroup(group)"
          />
        </div>
      </div>
    </div>

    <!-- Display categories by group -->
    <div
      class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-10 mt-10 w-full h-auto m-auto items-center mx-2"
    >
      <Category
        v-for="(category, index) in filteredCategories"
        :key="index"
        :name="category.name"
        :image="category.image"
        :productCount="category.productCount"
        :color="category.color"
      />
    </div>

    <!-- Display promotions -->
    <div class="flex justify-center gap-2 mx-2">
      <Promotion
        v-for="(promotion, index) in productStore.promotions"
        :key="index"
        :title="promotion.title"
        :color="promotion.color"
        :buttonColor="promotion.buttonColor"
        :image="promotion.image"
      />
    </div>
    <br />
    <div></div>
    <!-- part 3 popular product -->
    <div class="flex justify-between mt-5 mx-3">
      <h1 class="text-3xl font-semibold">Popular Product</h1>
      <div>
        <div class="flex gap-2 items-center">
          <!-- Display group names -->
          <FeatureCategory
            v-for="(group, index) in productStore.groups"
            :key="index"
            :name="group"
            @click="selectProduct(group)"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mx-5">
      <Product
        v-for="(product, index) in productStore.filteredProduct"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :image="product.image"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :categoryId="product.categoryId"
        :instock="product.instock"
        :countSold="product.countSold"
        :group="product.group"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import Category from "./components/Category.vue";
import FeatureCategory from "./components/FeatureCategory.vue";
import Product from "./components/Product.vue";
import Promotion from "./components/Promotion.vue";
import { useProductStore } from "./productStore.service";
// Initialize the product store
const productStore = useProductStore();

// Computed property to get filtered categories from store
const filteredCategories = computed<Category[]>(
  () => productStore.filteredCategories
);

// Method to select a group and update the store state
const selectGroup = (group: string) => {
  productStore.setSelectedGroup(group);
};


// Method to select a group for filtering products in the popular section
const selectProduct = (group: string) => {
  productStore.setSelectedGroupProduct(group);
};

// Fetch categories, promotions, and groups on component mount
onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();
  await productStore.fetchGroups();
  await productStore.fetchProducts();
  console.log("Categories loaded:", productStore.categories);
  console.log("Promotions loaded:", productStore.promotions);
  console.log("Groups loaded:", productStore.groups);
  console.log("Product:", productStore.products);
});
</script>
