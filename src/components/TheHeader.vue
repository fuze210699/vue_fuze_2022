<script setup>
import { LOGO } from "../assets/images";
import { RouterLink } from "vue-router";
const navItems = [
  {
    name: "Home",
    pathName: "/",
  },
  {
    name: "Lesson",
    pathName: "lesson",
  },
];
</script>

<template>
  <div class="app-header grid grid-flow-col gap-4 px-8 py-4 h-[60px]">
    <div class="col-span-3 flex items-center">
      <img :src="LOGO" class="w-[90px] h-[20px]" alt="logo" />
    </div>
    <div class="col-span-9 flex items-center">
      <nav class="w-full app-nav">
        <ul>
          <li
            class="inline-block font-bold"
            v-for="(navItem, index) in navItems"
            :key="index"
          >
            <router-link :to="navItem.pathName" class="text-lg">{{
              navItem.name
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
