<template>
  <div class="center-row flex-wrap">
    <div v-for="(item, i) in props.meals" :key="i" class="mx-auto">
      <SellerEle :title="'allMeals'" :allItems="item"></SellerEle>
    </div>
  </div>
</template>

<script setup>
import SellerEle from "./SellerEleSq.vue";
const props = defineProps({
  meals: {
    type: Array,
    require: true,
    default: () => {
      [];
    },
  },
});
</script>

<style lang="scss" scoped></style>
