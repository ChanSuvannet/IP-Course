<template>
  <div class="max-w" style="padding-top: 10px;">
    <div class="menu">Menu</div>
    <br>
    <div class="flex-col">
      <span 
        class="section" 
        v-for="(section, index) in sections" 
        :key="index"
        :style="{ backgroundColor: selectedSection === section ? 'blue' : 'transparent', color: selectedSection === section ? 'white' : 'black' }"
        @click="updatePage(section)"
      >
        {{ section }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: ["Section 1", "Section 2", "Section 3", "Section 4"],
      selectedSection: "Section 1", // Default section
    };
  },
  created() {
    const section = this.$route.query.section || "Section 1";
    this.selectedSection = section; // Set default or selected section
  },
  methods: {
    updatePage(section) {
      this.selectedSection = section;
      this.$router.push({ 
        path: `/page/${this.$route.params.id}`, 
        query: { section: section } // Pass the selected section as query
      });
    },
  },
};
</script>

<style scoped>
.max-w {
  min-width: 300px;
}

.menu {
  font-size: 30px;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.section {
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
}

.section:hover {
  background-color: lightgray;
}
</style>
