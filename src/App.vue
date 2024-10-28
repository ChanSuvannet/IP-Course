<template>
  <div class="flex flex-col">
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 mt-10 w-full h-auto m-auto items-center mx-2"
    >
      <Category
        :class="fruit.Bg"
        v-for="(fruit, index) in fruits"
        :key="index"
        :image="fruit.ImageUrl"
        :description="fruit.Description"
        :name="fruit.name"
      ></Category>
    </div>
    <div class="flex justify-center gap-2 mx-2">
      <Promotion
        :class="promotion.bg_img"
        v-for="(promotion, index) in promotions"
        :bg_bnt="promotion.bg_bnt"
        :key="index"
        :image="promotion.ImageUrl"
        :description="promotion.Description"
      ></Promotion>
    </div>
  </div>
</template>

<script setup>
import img1 from "./assets/images/1.png";
import img10 from "./assets/images/10.png";
import img11 from "./assets/images/11.png";
import img12 from "./assets/images/12.png";
import img13 from "./assets/images/13.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.png";
import img6 from "./assets/images/6.png";
import img7 from "./assets/images/7.png";
import img8 from "./assets/images/8.png";
import img9 from "./assets/images/9.png";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
const promotions = [
  {
    ImageUrl: img11,
    Description: "Everyday Fresh & Clean with Our Product",
    bg_img: "bg-[#F0E8D5]",
    bg_bnt: "bg-green-300",
  },
  {
    ImageUrl: img12,
    Description: "Make your Breakfast Healthy and Easy",
    bg_img: "bg-[#F3E8E8]",
    bg_bnt: "bg-green-300",
  },
  {
    ImageUrl: img13,
    Description: "The Best Organic Products Online",
    bg_img: "bg-[#E7EAF3]",
    bg_bnt: "bg-yellow-300",
  },
];

const fruits = [
  {
    name: "Cat & Milk",
    ImageUrl: img1,
    Description: "14 Items",
    Bg: "bg-[#F2FCE4]",
  },
  {
    name: "Peach",
    ImageUrl: img2,
    Description: "17 Items",
    Bg: "bg-[#FFFCEB]",
  },
  {
    name: "Oganic Kiwi",
    ImageUrl: img3,
    Description: "21 Items",
    Bg: "bg-[#ECFFEC]",
  },
  {
    name: "Red Apple",
    ImageUrl: img4,
    Description: "68 Items",
    Bg: "bg-[#FEEFEA]",
  },
  {
    name: "Snack",
    ImageUrl: img5,
    Description: "34 Items",
    Bg: "bg-[#FFF3EB]",
  },
  {
    name: "Black plum",
    ImageUrl: img6,
    Description: "25 Items",
    Bg: "bg-[#FFF3EB]",
  },
  {
    name: "Vegetable",
    ImageUrl: img7,
    Description: "65 Items",
    Bg: "bg-[#F2FCE4]",
  },
  {
    name: "Headphone",
    ImageUrl: img8,
    Description: "33 Items",
    Bg: "bg-[#FFFCEB]",
  },
  {
    name: "Cake & Milk",
    ImageUrl: img9,
    Description: "54 Items",
    Bg: "bg-[#F2FCE4]",
  },
  {
    name: "Orange",
    ImageUrl: img10,
    Description: "63 Items",
    Bg: "bg-[#FFF3FF]",
  },
];
</script>
