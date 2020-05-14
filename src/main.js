import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';
import store from '@/store/index.js';
import { formatDate } from '@/utils/filters.js';

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
