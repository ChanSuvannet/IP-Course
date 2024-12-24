<template>
  <div class="flex" style="border: 1px solid black; padding: 10px">
    <h1>Header</h1>
    <div class="flex-span">
      <span
        v-for="(page, index) in pages"
        :key="index"
        :style="{ color: activeIndex === index ? 'orange' : 'black' }"
        @click="navigateToPage(index + 1)"
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
      activeIndex: 0,
    };
  },
  created() {
    this.initializeActiveIndex();
  },
  watch: {
    "$route.params.id": function () {
      this.initializeActiveIndex();
    },
  },
  methods: {
    initializeActiveIndex() {
      const id = parseInt(this.$route.params.id, 10);
      this.activeIndex =
        !isNaN(id) && id >= 1 && id <= this.pages.length ? id - 1 : 0;
    },
    navigateToPage(id) {
      // Navigate to the specified page number
      this.$router.push(`/page/${id}`);
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
  border: 1px solid black;
  background-color: #f9f9f9;
}

.flex-span {
  display: flex;
  gap: 15px;
  font-size: 18px;
  cursor: pointer;
}

.flex-span span:hover {
  color: blue;
}
</style>
