import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors.js';

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// 엑시오스 초기화 함수
function createInstancewithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstancewithAuth('posts');
