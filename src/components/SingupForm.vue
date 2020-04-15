<template>
	<form @submit.prevent="submitForm" action>
		<div>
			<label for="username">id:</label>
			<input type="text" name id="username" v-model="username" />
		</div>
		<div>
			<label for="password">pw:</label>
			<input type="text" name id="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname:</label>
			<input type="text" name id="nickname" v-model="nickname" />
		</div>
		<button type="submit">회원가입</button>
	</form>
</template>

<script>
import { registerUser } from '@/api/index.js';
export default {
	data() {
		return {
			// form value
			username: '',
			password: '',
			nickname: '',
			//log
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const response = await registerUser(userData);
			console.log(response.data);
			this.logMessage = `${response.data.username}님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
