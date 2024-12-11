<template>
  <div class="flex" style="border: 1px solid black;">
    <h1>Header</h1>
    <div class="flex-span">
      <span
        v-for="(page, index) in pages"
        :key="index"
        :style="{ color: activeIndex === index ? 'orange' : 'black' }"
        @click="navigateToPage(page, index)"
      >
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: ["Page 1", "Page 2", "Page 3"],
      activeIndex: null,
    };
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    navigateToPage(page, index) {
      this.setActiveIndex(index);
      
      // Now all pages use the dynamic route "/page/:id"
      this.$router.push(`/page/${index + 1}`);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.flex-span {
  display: flex;
  gap: 10px;
  font-size: 30px;
  cursor: pointer;
}
</style>
