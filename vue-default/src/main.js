import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import i18nPlugin from "./plugins/i18n";

const i18nStrings = {
  en: { hi: "Hello", save: "save" },
  ko: { hi: "안녕하세요", save: "저장" },
  fr: { hi: "bonjour" },
};

const app = createApp(App);
app.use(router);
app.mixin(api);
app.use(VueSweetalert2);
app.mount("#app");
app.use(i18nPlugin, i18nStrings);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
// createApp(App)
//   .use(router)
//   .mount("#app");
