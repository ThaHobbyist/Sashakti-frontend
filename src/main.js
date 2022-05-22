/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import createApi from "@/services/api";

loadFonts();

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.config.globalProperties.$api = createApi();

app.mount("#app");
