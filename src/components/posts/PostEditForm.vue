<template>
	<div class="contents">
		<div class="page-header">Edit Post</div>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p v-if="!isContentsValid" class="validation-text waring">
						Contents length must be less than 250
					</p>
				</div>
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { editPost, fetchPost } from '@/api/posts.js';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length < 250;
		},
	},
	methods: {
		async submitForm() {
			try {
				const id = this.$route.params.id;
				console.log(id);
				await editPost(id, {
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
			} catch (error) {
				console.log(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
	async created() {
		const id = this.$route.params.id;
		const { data } = await fetchPost(id);
		console.log(data);
		this.title = data.title;
		this.contents = data.contents;
	},
};
</script>

<style scoped>
.form-wrapper {
	width: 100%;
}
.btn {
	color: white;
}
</style>
