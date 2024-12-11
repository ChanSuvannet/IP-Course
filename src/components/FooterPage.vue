<template>
  <footer class="footer">
    <p>Footer</p>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  font-size: 40px;
  border: 1px solid black;
}
</style>
