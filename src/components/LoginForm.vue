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
		<button type="submit">로그인</button>
	</form>
</template>

<script>
import { loginUser } from '@/api/index.js';
export default {
	data() {
		return {
			// form value
			username: '',
			password: '',
			//log
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const response = await loginUser(userData);
				this.logMessage = `${response.data.user.username}님 환영합니다.`;
				this.initForm();
			} catch (error) {
				this.logMessage = error.response.data;
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
