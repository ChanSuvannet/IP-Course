<template>
  <div
    class="flex flex-col w-[300px] h-auto bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden relative"
  >
    <!-- Discount Label -->
    <div
      class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold rounded-lg px-2 py-1"
    >
      -{{ promotionAsPercentage ?? 0 }}%
    </div>

    <!-- Product Image -->
    <img
      :src="image"
      :alt="name || 'Product Image'"
      class="w-full h-[200px] object-contain bg-gray-100"
    />

    <!-- Product Details -->
    <div class="p-4 flex flex-col h-full justify-between">
      <!-- Product Name and Group -->
      <div>
        <p class="text-gray-500 text-xs">{{ group || "Category" }}</p>
        <h3
          class="text-gray-900 font-bold text-lg truncate"
          :title="name || 'Unnamed Product'"
        >
          {{ name || "Unnamed Product" }}
        </h3>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-1">
          <template v-for="i in 5" :key="i">
            <!-- Full Star -->
            <img
              v-if="i <= Math.floor(rating || 0)"
              src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
              alt="full star"
              class="w-3 h-3"
            />

            <!-- Half Star -->
            <img
              v-else-if="i === Math.floor(rating) + 1 && rating % 1 !== 0"
              src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
              alt="half star"
              class="w-3 h-3"
            />

            <!-- Empty Star -->
            <img
              v-else
              src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
              alt="empty star"
              class="w-3 h-3"
            />
          </template>
        </div>
        <p class="ml-2 text-sm text-gray-500">({{ rating || "No ratings" }})</p>
      </div>
    </div>

    <!-- Price and Discount -->
    <div class="flex justify-between px-4 mb-2">
      <div class="flex items-center mt-3">
        <p class="text-green-600 font-bold text-xl">
          ${{
            (price - (price * (promotionAsPercentage || 0)) / 100).toFixed(2)
          }}
        </p>
        <p
          v-if="promotionAsPercentage"
          class="ml-2 text-gray-500 line-through text-sm"
        >
          ${{ price.toFixed(2) }}
        </p>
      </div>

      <!-- Add to Cart Button -->
      <button
        class="mt-4 px-4 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Add +
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    id: Number,
    name: String,
    rating: Number,
    size: String,
    image: String,
    price: Number,
    promotionAsPercentage: Number,
    categoryId: Number,
    instock: Number,
    countSold: Number,
    group: String,
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
.product-card {
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: #f3f4f6;
}

.product-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
}

.product-rating {
  display: flex;
  align-items: center;
}

.product-rating fa {
  margin-right: 2px;
}

.product-price {
  color: #16a34a;
  font-size: 1.25rem;
  font-weight: bold;
}

.line-through {
  text-decoration: line-through;
}
</style>
