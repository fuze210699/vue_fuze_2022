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
  <div class="grid grid-flow-col gap-4 bg-transparent px-3 py-2">
    <div class="col-span-3">
      <img :src="LOGO" class="w-[45px] h-[45px]" alt="logo" />
    </div>
    <div class="col-span-9 flex items-center">
      <nav class="w-full app-nav">
        <ul>
          <li
            class="inline-block font-bold"
            v-for="(navItem, index) in navItems"
            :key="index"
          >
            <router-link :to="navItem.pathName">{{ navItem.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-nav > ul > li:not(:first-child) {
  margin-left: 20px;
}
</style>
