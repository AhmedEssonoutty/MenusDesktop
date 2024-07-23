import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const cartItems = defineStore("cart", {
  state: () => ({
    cart: [],
    mealCounter: 0,
  }),
  actions: {
    handleMealStatus(ele) {
      if (!this.cart.includes(ele)) {
        ele.selected = true;
        this.cart.push(ele);
        this.cartCount();
      } else {
        ele.selected = false;
        this.cart = this.cart.filter((e) => e.id !== ele.id);
        this.cartCount();
      }
    },
    cartCount() {
      this.mealCounter = this.cart.length;
    },
    deleteCart() {
      this.cart.forEach((el) => (el.selected = false));
      this.cart = [];
      this.cartCount();
    },
  },
});
