import store from '@/store/index.js';

export function setInterceptors(instance) {
	// 인터셉터 모듈화

	// Add a request interceptor
	instance.interceptors.request.use(
		function(config) {
			// Do something before request is sent
			// 리퀘스트를 보내기 직전의 처리
			config.headers.Authorization = store.state.token;
			return config;
		},
		function(error) {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function(error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		},
	);

	return instance;
}
