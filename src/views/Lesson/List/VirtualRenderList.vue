<script setup>
import { RouterLink } from "vue-router";
import { useInfiniteScroll, useVirtualList } from "@vueuse/core";
import { ref } from "vue";

const data = ref(Array.from(Array(20).keys(), () => "Lorem ipsum"));

const { list, containerProps, wrapperProps } = useVirtualList(data, {
  // Keep `itemHeight` in sync with the item's row.
  itemHeight: 60,
});

useInfiniteScroll(
  containerProps.ref,
  () => {
    data.value.push(...Array.from(Array(10).keys(), () => "More lorem ipsum"));
  },
  { distance: 10 }
);
</script>

<template>
  <div class="pt-3 mb-10">
    <router-link to="lesson">
      <span class="text-base text-c-primary">Lesson</span>
    </router-link>
    <span class="text-base text-c-primary"> > </span>
    <span class="text-base text-c-secondary">Lesson 1</span>
  </div>

  <div v-bind="containerProps" class="h-[600px] overflow-auto">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" class="rounded h-[60px]">
        Row: {{ item.data }}
      </div>
    </div>
  </div>
</template>
