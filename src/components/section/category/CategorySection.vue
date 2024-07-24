<template>
  <div>
    <div class="center-row justify-content-between" style="height: fit-content">
      <button
        @click="handleFilter(item.title, item.id)"
        v-for="(item, i) in categCards"
        class="center-col justify-content-between categ-card mx-auto"
        :class="`${item.active ? 'shadow' : ''}`"
        :key="i"
        :id="`item-${item.id}`"
      >
        <img :src="item.img" class="meal-img" alt="meal image" />
        <p class="style-4">{{ $t(item.title) }}</p>
        <p class="style-3 text-center">{{ $t(item.content) }}</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const emits = defineEmits(["filter"]);

const categCards = ref([
  {
    img: "/src/assets/Media/Banners/meatGrill.png",
    id: 1,
    active: false,
    title: "beef",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/src/assets/Media/Banners/fish.png",
    id: 2,
    active: false,
    title: "fish",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/src/assets/Media/Banners/Appetizers.png",
    id: 3,
    active: false,
    title: "appetizers",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/src/assets/Media/Banners/Pasta.png",
    id: 4,
    active: false,
    title: "pasta",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]);

const handleFilter = (categ, id) => {
  const allEl = document.querySelectorAll(".categ-card");
  allEl.forEach((element) => {
    element.classList.remove("shadow");
  });

  const el = document.querySelector(`#item-${id}`);
  el.classList.add("shadow");
  emits("filter", categ);
};
</script>

<style lang="scss" scoped></style>
