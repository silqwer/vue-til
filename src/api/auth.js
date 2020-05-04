// 로그인, 회원 가입, 회원 탈퇴, 계정 동작과 연관된 API
import { instance } from './index.js';

// 회원가입 api
function registerUser(userData) {
	return instance.post('/signup', userData);
}

// 로그인 api
function loginUser(userData) {
	return instance.post('/login', userData);
}

export { registerUser, loginUser };
