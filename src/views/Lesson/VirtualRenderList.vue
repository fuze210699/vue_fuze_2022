<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="mb-10">
    <router-link to="lesson">
      <span class="text-base font-bold text-red-300">Lesson</span>
    </router-link>
    <span class="text-base font-bold text-red-300"> > </span>
    <span class="text-base font-bold text-red-300">Lesson 1</span>
  </div>

  <p>Virtual Render List</p>
</template>
