<template>
  <hr />
  <div class="container">
    <MenuItemComponent
      :groupItems="[
        {
          name: 'Browse All Categories',
          icon: ['fas', 'border-all'],
          icon1: ['fas', 'caret-down'],
          iconColor: '#FFFFFF',
          fontWeight: 'bold',
        },
        {
          name: 'Hot Deals',
          icon: ['fas', 'fire'],
          iconColor: '#3BB77E',
          fontWeight: 'bold',
        },
        { name: 'Home', fontWeight: 'bold' },
        {
          name: 'Food',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
          subItems: [{ name: 'Fruits' }, { name: 'Dairy' }],
        },
        {
          name: 'Vegetables',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
          subItems: [{ name: 'Leafy Greens' }, { name: 'Root Vegetables' }],
        },
        { name: 'Drink', fontWeight: 'bold' },
        { name: 'Cookies', fontWeight: 'bold' },
        {
          name: 'Meat & Seafood',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
          subItems: [{ name: 'Chicken' }, { name: 'Fish' }],
        },
        { name: 'Bakery', fontWeight: 'bold' },
      ]"
    />
    <div class="ml-5">
      <img src="https://i.ibb.co/wzkRsYF/img.jpg" alt="Logo" class="h-20" />
    </div>
  </div>

  <hr />
</template>

<script>
import MenuItemComponent from "./MenuItem_component.vue";
export default {
  name: "MenuItemView",
  components: {
    MenuItemComponent,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  width: auto;
}
hr {
  margin: 0.5%;
  color: #e5e5e5;
  width: auto;
}
</style>
