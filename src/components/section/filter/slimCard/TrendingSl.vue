<template>
  <div class="d-flex flex-column">
    <div v-for="(item, i) in props.meals" :key="i">
      <SellerEle :title="'trending'" :allItems="item"></SellerEle>
    </div>
  </div>
</template>

<script setup>
import SellerEle from "./SellerEleSl.vue";
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
