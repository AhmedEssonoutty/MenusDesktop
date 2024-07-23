import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const menuItemsData = defineStore("items", {
  state: () => ({
    menuData: [
      {
        img: "/src/assets/media/Mask group.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "appetizers",
        id: 1,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/fish.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "fish",
        id: 2,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/grilled_ribeye_beef_steak_2022_09_08_23_54_06_utc.png",

        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "beef",
        id: 3,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/fish.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "fish",
        id: 4,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/Pasta.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "pasta",
        id: 5,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/ccc.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "beef",
        id: 6,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/grilled_ribeye_beef_steak_2022_09_08_23_54_06_utc.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "beef",
        id: 7,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/ccc.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "beef",
        id: 8,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/grilled_ribeye_beef_steak_2022_09_08_23_54_06_utc.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "beef",
        id: 9,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
      {
        img: "/src/assets/media/ccc.png",
        name: "Name Meal",
        selected: false,
        description: "Description meal Lorem Ipsum is simply dummy",
        price: "50 EGP",
        category: "beef",
        id: 10,
        discount: "10%",
        oldPrice: "60EGP",
        calor: "1086",
      },
    ],
  }),
  actions: {},
});
