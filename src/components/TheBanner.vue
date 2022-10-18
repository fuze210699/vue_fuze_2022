<script setup>
import { shortBanner } from "../assets/short";
</script>

<template>
  <div
    class="flex justify-center items-center h-full text-5xl relative overflow-x-auto overflow-y-hidden"
  >
    <video autoplay muted loop id="bannerVideo" class="w-full absolute">
      <source :src="shortBanner" type="video/mp4" />
    </video>
  </div>
</template>
