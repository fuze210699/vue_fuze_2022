<script setup>
import { RouterLink } from "vue-router";
import LessonCard from "./components/LessonCard.vue";

import { LS1_Thumbnail } from "../../assets/images";
const mockLessons = [
  {
    title: "Better Rendering Performance with Virtual Lists",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "LearnVue",
    thumbnail: LS1_Thumbnail,
  },
];
</script>

<template>
  <div class="pt-3 mb-10">
    <span class="text-base text-c-primary">Lesson</span>
  </div>
  <div class="grid grid-flow-row grid-cols-2">
    <router-link to="virtual-render">
      <LessonCard
        v-for="(lessonData, index) in mockLessons"
        :key="index"
        :lesson="lessonData"
      />
    </router-link>
  </div>
</template>
