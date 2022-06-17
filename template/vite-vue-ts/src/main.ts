import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import 'uno.css'

const Vue = createApp(App);

Vue.use(router);
Vue.use(store);

Vue.mount('#app')