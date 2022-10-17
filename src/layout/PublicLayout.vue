<script setup>
import { RouterView } from "vue-router";
import { Sidebar, Banner, Header, Footer } from "../components";
</script>

<template>
  <div class="min-h-screen relative">
    <div class="fixed w-full">
      <Header />
    </div>
    <div class="h-70-vh pt-[60px] bg-orange-500">
      <Banner />
    </div>
    <main class="content-wrapper relative max-w-5xl pb-[45px] m-auto">
      <router-view></router-view>
      <div class="absolute w-[200px] right-[-200px] top-0">
        <Sidebar />
      </div>
    </main>
    <div class="grid place-items-center h-[45px] w-full absolute bottom-0">
      <Footer />
    </div>
  </div>
</template>
