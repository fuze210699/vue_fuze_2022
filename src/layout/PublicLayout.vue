<script setup>
import { RouterView } from "vue-router";
import { Sidebar, Banner, Header, Footer } from "../components";
</script>

<template>
  <div class="min-h-screen relative">
    <div class="fixed w-full">
      <Header />
    </div>
    <div class="h-70-vh pt-[60px]">
      <Banner />
    </div>
    <main class="content-wrapper relative max-w-5xl m-auto">
      <router-view></router-view>
      <div class="absolute right-0 top-0">
        <Sidebar />
      </div>
    </main>
    <div class="absolute bottom-0">
      <Footer />
    </div>
  </div>
</template>
