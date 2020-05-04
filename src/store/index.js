import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies.js';
import { loginUser } from '@/api/auth.js';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
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
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			commit('setToken', data.token);
			commit('setUserName', data.user.username);
			return data;
		},
	},
});
