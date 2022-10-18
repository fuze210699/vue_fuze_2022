<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
store.count++;
store.increment(2);

const increaseCount = () => {
  store.increment(1);
};
const decreaseCount = () => {
  store.increment(-1);
};
</script>

<template>
  <div class="pt-3 mb-10">
    <router-link to="lesson">
      <span class="text-base text-c-primary">Lesson</span>
    </router-link>
    <span class="text-base text-c-primary"> > </span>
    <span class="text-base text-c-secondary">Lesson 2</span>
  </div>
  <div class="pt-5 mb-5">Count is {{ store.count }}</div>
  <span role="button" @click="increaseCount" class="btn btn-primary mr-3">
    Increase
  </span>
  <span role="button" @click="decreaseCount" class="btn btn-secondary">
    Decrease
  </span>
</template>
