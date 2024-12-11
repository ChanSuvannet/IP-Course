<template>
    <div style="flex-direction: column; width: 100%; margin-top: 25px;">
      <h1>Welcome to Page {{ id }}</h1>
      <hr />
      <div>
        <p>This is {{ sectionData ?? "N/A" }} of page {{ id }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PageData",
    computed: {
      id() {
        return this.$route.params.id;
      },
      sectionData() {
        const sectionContent = {
          "Section 1": "Content for Section 1",
          "Section 2": "Content for Section 2",
          "Section 3": "Content for Section 3",
          "Section 4": "Content for Section 4",
        };
  
        // Default to "Section 1" if no section is selected in the query
        const section = this.$route.query.section || "Section 1";
        return sectionContent[section] || "Select a section";
      },
    },
  };
  </script>
  
  <style scoped></style>
  