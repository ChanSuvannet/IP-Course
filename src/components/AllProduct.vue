<template>
  <div class="flex flex-col">
    <!-- part 3 popular product -->
    <div class="flex justify-between mt-5 mx-3">
      <h1 class="text-3xl font-semibold">All Product</h1>
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
import { useProductStore } from "../productStore.service";
import Category from "./Category.vue";
import FeatureCategory from "./FeatureCategory.vue";
import Product from "./Product.vue";
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
});
</script>
