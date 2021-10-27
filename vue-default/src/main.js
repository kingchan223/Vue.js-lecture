import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(router);
app.mixin(api);
app.use(VueSweetalert2);
app.mount("#app");
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
// createApp(App)
//   .use(router)
//   .mount("#app");
