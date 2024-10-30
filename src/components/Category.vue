<template>
  <div
    class="flex flex-col w-full h-[177px] rounded-lg justify-center items-center transition-transform duration-300 hover:scale-95 cursor-pointer"
  >
    <img class="w-full pt-1 h-[130px] object-cover scale-50" :src="image" :alt="name" />
    <h3 class="text-lg sm:text-xl md:text-lg">{{ name }}</h3>
    <h4 class="opacity-50 mb-5 text-sm sm:text-base">{{ description }}</h4>
  </div>
</template>
<script>
export default {
  name: "Category",
  props: {
    image: String,
    name: String,
    description: String,
  },
};
</script>
