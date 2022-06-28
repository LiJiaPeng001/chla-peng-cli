import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import pinia from "./store";
import "./style/index.less"

const Vue = createApp(App);
Vue.use(router);
Vue.use(pinia);

Vue.mount("#app");
