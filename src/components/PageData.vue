<template>
  <div style="flex-direction: column; width: 100%; margin-top: 25px">
    <h1>Welcome to Page {{ id }}</h1>
    <hr />
    <div>
      <p>This is {{ sectionData ?? "N/A" }} of page {{ id }}</p>
    </div>
    <br />
    <div>
      <h1 v-fi="!saveMessage">
        Message from page {{ getPage }}: {{ message }}
      </h1>
    </div>
    <div>
      <label for="message">Message: </label>
      <input
        type="text"
        name="message"
        id="message"
        v-model="message"
        @input="saveMessage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageData",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10) || 1;
    },
    nextPageId() {
      const nextPage = this.id + 1;
      return nextPage > 3 ? 1 : nextPage;
    },
    getPage() {
      return this.id === 1 ? 3 : this.id - 1;
    },
    sectionData() {
      const sectionContent = {
        "Section 1": "Content for Section 1",
        "Section 2": "Content for Section 2",
        "Section 3": "Content for Section 3",
        "Section 4": "Content for Section 4",
      };
      const section = this.$route.query.section || "Section 1";
      return sectionContent[section] || "Select a section";
    },
  },
  methods: {
    saveMessage() {
      const storedMessages = JSON.parse(localStorage.getItem("messages")) || {};
      storedMessages[this.nextPageId] = this.message;
      localStorage.setItem("messages", JSON.stringify(storedMessages));
    },
    loadMessage() {
      const storedMessages = JSON.parse(localStorage.getItem("messages")) || {};
      this.message = storedMessages[this.id] || "";
    },
    goToNextPage() {
      // Navigate to the next page
      this.$router.push(`/page/${this.nextPageId}`);
    },
  },
  watch: {
    $route: "loadMessage",
  },
  mounted() {
    this.loadMessage();
  },
};
</script>

<style scoped></style>
