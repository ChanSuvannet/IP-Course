<template>
  <div
    class="w-full bg-green-100 h-[500px] flex justify-start items-center pl-[100px]"
  >
    <div class="flex flex-col">
      <h1 class="text-[100px]">Coke & Mile</h1>
      <div class="flex gap-2 pl-5 cursor-pointer">
        <span @click="$router.push('/')">Home</span>
        <span>></span>
        <span @click="$router.push('/all-product')">Categories</span>
        <span>></span>
        <span>Coke & Mile</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
