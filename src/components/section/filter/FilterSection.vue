<template>
  <div class="container-custom">
    <CategorySection @filter="handleFilter($event)"></CategorySection>

    <!-- slider -->
    <div class="center-row justify-content-between align-items-center">
      <div class="center-row justify-content-start align-items-center">
        <div class="slider-box">
          <div
            class="menu-indicator"
            :style="{ left: slideTo, width: slideWidth }"
          ></div>
          <button
            class="slider-box-btns"
            v-for="(el, i) in filteBtns"
            :key="i"
            @click="handleIndicator(el.id)"
            :id="`menu-item_${el.id}`"
          >
            <div
              style="position: absolute; right: 0; top: -5px"
              v-html="el.icon"
            ></div>

            <div class="style-6">{{ $t(el.title) }}</div>
          </button>
        </div>

        <button
          class="p-3 mx-5"
          :class="`${square ? 'active' : ''}`"
          @click="square = true"
        >
          <svg
            style="width: 1.9rem; height: 1.8rem"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5443 1.34735L13.5078 1.34605C13.393 1.34194 13.2666 1.38609 13.1617 1.49104L13.1568 1.49595L13.1518 1.5008C12.2752 2.35955 11.4056 3.22032 10.5564 4.09607L10.5492 4.1035L10.5228 4.12989C10.3402 4.32165 10.3424 4.63292 10.5389 4.82454L10.5523 4.83764L10.5654 4.85111C11.4171 5.72941 12.2776 6.58992 13.1559 7.44161L13.1633 7.44882L13.1987 7.4842C13.3905 7.66685 13.7017 7.66457 13.8933 7.46811L13.9089 7.45215L13.925 7.43672C14.797 6.5999 15.655 5.7333 16.5104 4.85111L16.5176 4.84367L16.553 4.8083C16.7356 4.61655 16.7334 4.30528 16.5369 4.11367L16.5235 4.10057L16.5104 4.0871C15.8049 3.35957 15.0856 2.64872 14.3522 1.92409C14.2052 1.77886 14.0577 1.63305 13.91 1.48694L13.9014 1.47837L13.8929 1.46963C13.8194 1.39418 13.7054 1.34436 13.5808 1.34667L13.5443 1.34735ZM17.5124 5.75208L17.4765 5.78797C16.6152 6.67618 15.745 7.55542 14.8568 8.40775C14.8133 8.45235 14.768 8.49428 14.7213 8.53354C14.0402 9.1056 13.0372 9.10988 12.354 8.53354C12.3202 8.50499 12.2871 8.47503 12.2549 8.44363L12.219 8.40775C11.3308 7.54645 10.4606 6.67618 9.59926 5.78797C9.56052 5.75018 9.52379 5.71109 9.48908 5.67085C8.89635 4.98352 8.89181 3.95663 9.48899 3.26705C9.51282 3.23953 9.53762 3.21254 9.56337 3.18613L9.59029 3.15922C10.4516 2.271 11.3308 1.40073 12.2101 0.539436C12.5689 0.180562 13.0534 -0.0168183 13.5558 0.00112541C14.0403 -0.00784644 14.5158 0.180562 14.8568 0.530464C15.0039 0.676106 15.151 0.821496 15.2981 0.966803C16.0297 1.68972 16.7594 2.41073 17.4765 3.15024C18.2033 3.85902 18.2212 5.02536 17.5124 5.75208ZM10.8204 9.87931C10.1861 9.90689 9.63992 10.2498 9.3237 10.7497C9.1551 11.0162 9.05186 11.3274 9.03548 11.6591C9.03509 11.6669 9.03475 11.6748 9.03446 11.6827C9.03354 11.7076 9.03312 11.7327 9.03319 11.7578C9.03319 11.7597 9.0332 11.7616 9.03321 11.7635C9.03335 11.7873 9.03394 11.8112 9.03498 11.8352V16.2045C9.04681 16.5445 9.14925 16.8591 9.31822 17.127C9.66199 17.6719 10.2811 18.0229 10.9729 17.9988H15.3512C16.3829 17.9719 17.1904 17.1106 17.1635 16.0789V13.9256L17.1724 13.9436V11.6468C17.1096 10.615 16.2214 9.81651 15.1897 9.87931H10.8204ZM15.8267 11.7C15.7941 11.4128 15.5405 11.2062 15.2714 11.2226L15.2306 11.2251H10.8588C10.5861 11.2478 10.3669 11.4873 10.3795 11.7767L10.3808 11.8059V16.1737C10.3987 16.4427 10.6301 16.6642 10.9261 16.6539L10.9495 16.6531H15.3281C15.6018 16.6395 15.8258 16.4081 15.8182 16.114L15.8177 16.0964V13.9256L15.8267 13.9235V11.7ZM8.12965 16.0969C8.12974 16.0819 8.12983 16.0669 8.12992 16.0519C8.13839 14.6595 8.13853 13.267 8.13032 11.8745C8.13024 11.8614 8.13016 11.8483 8.13008 11.8352C8.12994 11.8113 8.1298 11.7874 8.12965 11.7635V11.6827C8.12063 11.337 8.01896 11.0166 7.84895 10.7442C7.56299 10.2861 7.08366 9.96406 6.52654 9.88734C6.47574 9.88034 6.42428 9.87539 6.37227 9.87255C6.357 9.87172 6.34168 9.87107 6.32632 9.87061C6.29066 9.86953 6.25476 9.86945 6.21864 9.87039H4.11026V9.86142H1.80449C1.72774 9.86409 1.65224 9.87138 1.57822 9.883C0.657268 10.0277 -0.0320665 10.8443 0.00115138 11.7993V16.1776C0.0280669 17.2004 0.889365 18.0168 1.92113 17.9899H6.30836C6.95534 17.9786 7.51975 17.6369 7.84263 17.1263C8.00703 16.8663 8.10881 16.5624 8.127 16.236C8.12758 16.2255 8.12808 16.215 8.12849 16.2045C8.12988 16.1688 8.13027 16.133 8.12965 16.0969ZM6.29289 16.6441C6.56664 16.635 6.78908 16.4084 6.78407 16.1203L6.7838 16.1044L6.7839 16.0885C6.79283 14.6496 6.79283 13.2107 6.7839 11.7718L6.78384 11.7635L6.78387 11.7055C6.77018 11.4242 6.53983 11.2082 6.25374 11.2157L6.23619 11.2162H2.76448V11.2072H1.83514C1.55781 11.2255 1.33611 11.465 1.34612 11.7526L1.34693 11.7759V16.1542C1.36069 16.4239 1.5964 16.6521 1.88603 16.6446L1.90358 16.6441H6.29289ZM1.93908 8.5513H6.32632C6.39367 8.54896 6.46006 8.54313 6.52533 8.53401C7.45994 8.40337 8.16379 7.59574 8.13863 6.63132C8.13975 6.45189 8.14073 6.27259 8.14157 6.0934C8.14667 5.00871 8.14662 3.92788 8.14144 2.84312C8.14063 2.67346 8.13969 2.5037 8.13863 2.33381V2.2082C8.09377 1.17644 7.23247 0.377946 6.20071 0.413834H1.79553C0.763771 0.458693 -0.0347237 1.33793 0.00116371 2.3697V6.73899C0.0407499 7.64947 0.716115 8.38529 1.58336 8.52719C1.64103 8.53663 1.69955 8.54344 1.75879 8.5475C1.77398 8.54854 1.78921 8.5494 1.80449 8.55008C1.84899 8.55206 1.89387 8.55248 1.93908 8.5513ZM1.34694 6.70112C1.37032 6.99343 1.617 7.21347 1.90399 7.20598L1.92153 7.20552H6.29605C6.58663 7.18698 6.80068 6.949 6.79331 6.66642L6.79274 6.64467L6.79288 6.62291C6.80182 5.19302 6.80182 3.77211 6.79288 2.34222L6.79283 2.33381L6.79285 2.24611C6.76994 1.96051 6.53205 1.7489 6.24749 1.7588L6.22411 1.75961H1.83398C1.56277 1.78226 1.33569 2.02285 1.34613 2.32292L1.34694 2.3463V6.70112Z"
              fill="#464A61"
            />
          </svg>
        </button>
        <button
          class="p-3"
          :class="`${!square ? 'active' : ''}`"
          @click="square = false"
        >
          <svg
            style="width: 1.8rem; height: 1rem"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2V0H18V2H4ZM4 6V4H18V6H4ZM4 10V8H18V10H4ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0C1.28333 0 1.52083 0.0958333 1.7125 0.2875C1.90417 0.479167 2 0.716667 2 1C2 1.28333 1.90417 1.52083 1.7125 1.7125C1.52083 1.90417 1.28333 2 1 2ZM1 6C0.716667 6 0.479167 5.90417 0.2875 5.7125C0.0958333 5.52083 0 5.28333 0 5C0 4.71667 0.0958333 4.47917 0.2875 4.2875C0.479167 4.09583 0.716667 4 1 4C1.28333 4 1.52083 4.09583 1.7125 4.2875C1.90417 4.47917 2 4.71667 2 5C2 5.28333 1.90417 5.52083 1.7125 5.7125C1.52083 5.90417 1.28333 6 1 6ZM1 10C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8C1.28333 8 1.52083 8.09583 1.7125 8.2875C1.90417 8.47917 2 8.71667 2 9C2 9.28333 1.90417 9.52083 1.7125 9.7125C1.52083 9.90417 1.28333 10 1 10Z"
              fill="#464A61"
            />
          </svg>
        </button>
      </div>
      <div v-if="!square" class="w-25 center-row justify-content-between">
        <span class="style-6">{{ $t("Price") }} </span>
        <span class="style-6">{{ $t("Calories") }} </span>
      </div>
    </div>

    <!-- sections -->
    <div class="border-top pt-5">
      <TransitionGroup name="list" tag="ul">
        <AllMealsSq
          :meals="allMeals"
          v-if="selectedTap == 1 && square"
        ></AllMealsSq>
        <AllMealsSl
          :meals="allMeals"
          v-if="selectedTap == 1 && !square"
        ></AllMealsSl>

        <TrendingSq
          :meals="allMeals"
          v-if="selectedTap == 2 && square"
        ></TrendingSq>
        <TrendingSl
          :meals="allMeals"
          v-if="selectedTap == 2 && !square"
        ></TrendingSl>

        <DiscountSq
          :meals="allMeals"
          v-if="selectedTap == 3 && square"
        ></DiscountSq>
        <DiscountSl
          :meals="allMeals"
          v-if="selectedTap == 3 && !square"
        ></DiscountSl>
      </TransitionGroup>
    </div>

    <!-- pagination -->
    <div class="pagination-comp">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">
              <svg
                style="width: 4.4rem; height: 4.4rem"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 14L14 22M14 22L22 30M14 22H30M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z"
                  stroke="#464A61"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">7</a></li>
          <li class="page-item"><a class="page-link" href="#">8</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <svg
                style="width: 4.4rem; height: 4.4rem"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 30L30 22M30 22L22 14M30 22H14M2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22Z"
                  stroke="#464A61"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import CategorySection from "../category/CategorySection.vue";
import { ref, computed, onMounted } from "vue";
import AllMealsSq from "./squareCard/AllMealsSq.vue";
import AllMealsSl from "./slimCard/AllMealsSl.vue";
import TrendingSq from "./squareCard/TrendingSq.vue";
import TrendingSl from "./slimCard/TrendingSl.vue";
import DiscountSq from "./squareCard/DiscountSq.vue";
import DiscountSl from "./slimCard/DiscountSl.vue";

import { menuItemsData } from "@/stores/menuItems.js";
import { storeToRefs } from "pinia";
const menuItems = menuItemsData();
const { menuData } = storeToRefs(menuItems);

const square = ref(true);

// slider
const sliderPosition = ref(0);
const sliderWidth = ref(0);
const selectedTap = ref(1);
const allMeals = ref([]);

const filteBtns = ref([
  {
    icon: "",
    title: "All Meals",
    id: 1,
    rout: "allMeals",
  },
  {
    icon: `<svg
            xmlns="http://www.w3.org/2000/svg"
            style="width:2.3rem;height:2.3rem"
            viewBox="0 0 23.027 23.037"
          >
            <g
              id="Group_457"
              data-name="Group 457"
              transform="translate(-2910.61 -615.447)"
            >
              <path
                id="Path_516"
                data-name="Path 516"
                d="M67.685,17a27,27,0,0,1,.3-2.986,2.574,2.574,0,0,0-.866-2.648A32.617,32.617,0,0,1,64.847,8.89c-1.143-1.3-.834-2.224.876-2.615,1.246-.285,2.491-.587,3.751-.787a2.094,2.094,0,0,0,1.647-1.193c.631-1.157,1.33-2.277,2.039-3.389.764-1.2,1.749-1.186,2.493.02.734,1.191,1.469,2.382,2.157,3.6a1.755,1.755,0,0,0,1.306.916c1.41.277,2.82.566,4.216.908s1.684,1.282.77,2.377c-.436.521-.908,1.012-1.367,1.514-2.14,2.34-2.137,2.34-1.751,5.463.074.595.144,1.192.171,1.79.069,1.51-.68,2.027-2.11,1.445-1.294-.527-2.584-1.068-3.855-1.648a1.735,1.735,0,0,0-1.584.008c-1.195.555-2.414,1.056-3.63,1.565-1.7.711-2.413.2-2.291-1.864"
                transform="translate(2847.708 615.437)"
                fill="#464A61"
              />
              <path
                id="Path_519"
                data-name="Path 519"
                d="M72.21,3.867a3.96,3.96,0,0,1-2.5-2.461A1.22,1.22,0,0,1,71.5.216a5.087,5.087,0,0,1,1.847,1.83A1.217,1.217,0,0,1,72.21,3.867"
                transform="translate(2843.497 615.401)"
                fill="#464A61
                "
              />
              <path
                id="Path_520"
                data-name="Path 520"
                d="M132.031,1.086a3.681,3.681,0,0,1-2.546,2.737A1.179,1.179,0,0,1,128.4,3.2a1.133,1.133,0,0,1,.066-1.348,14.522,14.522,0,0,1,1.605-1.6A1.1,1.1,0,0,1,131.419.2a1.119,1.119,0,0,1,.612.887"
                transform="translate(2799.035 615.448)"
                fill="#464A61
                "
              />
              <path
                id="Path_521"
                data-name="Path 521"
                d="M62.723,54.781c-.049.856-.655,1.162-1.275,1.455-.635.3-1.26.77-1.983.232a1.166,1.166,0,0,1-.431-1.562A3.441,3.441,0,0,1,61.793,53.6a1.21,1.21,0,0,1,.93,1.183"
                transform="translate(2851.718 574.737)"
                fill="#464A61
                "
              />
              <path
                id="Path_522"
                data-name="Path 522"
                d="M140.141,53.473c1.181.009,2.675,1.144,2.609,1.945a1.216,1.216,0,0,1-1.227,1.216c-.988.064-2.615-1.131-2.583-1.895a1.194,1.194,0,0,1,1.2-1.266"
                transform="translate(2790.885 574.809)"
                fill="#464A61
                "
              />
              <path
                id="Path_523"
                data-name="Path 523"
                d="M103.92,81.909c.012.833.056,1.634-.894,1.917a1.093,1.093,0,0,1-1.366-.447,3.122,3.122,0,0,1-.074-2.641,1.06,1.06,0,0,1,1.288-.622c1.014.227,1.093,1.017,1.046,1.794"
                transform="translate(2819.467 554.588)"
                fill="#464A61
                "
              />
            </g>
          </svg>`,
    title: "Trending",
    id: 2,
    rout: "trending",
  },
  { icon: "", title: "Discounts", id: 3, rout: "discounts" },
]);

onMounted(() => {
  allMeals.value = menuData.value;
});

const handleIndicator = (id) => {
  const el = document.querySelector(`#menu-item_${id}`);
  sliderPosition.value = el.offsetLeft;
  sliderWidth.value = el.offsetWidth;
  selectedTap.value = id;
};

const handleFilter = (el) => {
  allMeals.value = menuData.value.filter((e) => e.category == el);
};

//  computed
const slideTo = computed(() => {
  return sliderPosition.value + "px";
});
const slideWidth = computed(() => {
  return sliderWidth.value + "px";
});
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
