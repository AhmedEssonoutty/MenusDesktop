import "./assets/main.scss";
import "./assets/media-queries.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// i18n localization
import { createI18n } from "vue-i18n";
import EN from "@/locale/EN.json";
import AR from "@/locale/AR.json";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// i18n localization
const i18n = createI18n({
  locale: "EN",
  messages: {
    EN: EN,
    AR: AR,
  },
});

app.use(createPinia());
app.use(router);

// i18n localization
app.use(i18n);

// bootstrap
import "bootstrap";

app.mount("#app");

// <button type="button" @click="$i18n.locale = `AR`">AR</button>
