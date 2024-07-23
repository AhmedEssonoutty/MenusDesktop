<template>
  <div>
    <Navbar></Navbar>
    <img
      src="/src/assets/media/Mask group.png"
      style="width: 100%"
      alt="menu main image"
    />
    <main class="content">
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss" scoped></style>
