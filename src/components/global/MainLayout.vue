<template>
  <div class="test-container">
    <Navbar></Navbar>
    <img
      src="/src/assets/Media/Banners/Maskgroup.png"
      style="width: 100%"
      alt="menu main image"
    />
    <img
      src="/src/assets/Media/images/Appetizers.png"
      style="width: 100%"
      alt="menu main image"
    />
    <main>
      <div style="min-height: 80vh">
        <slot></slot>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss" scoped></style>
