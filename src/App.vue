<script setup>
import { RouterView } from "vue-router";
import MainLayout from "@/components/global/MainLayout.vue";
</script>

<template>
  <div class="content">
    <MainLayout>
      <RouterView />
    </MainLayout>
  </div>
</template>

<style scoped></style>
