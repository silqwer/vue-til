import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		token: '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '' ? true : false;
		},
	},
	mutations: {
		setUserName(state, username) {
			state.username = username;
		},
		clearUserName(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
});
