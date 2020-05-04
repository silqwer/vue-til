<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">
			{{ postItem.createdAt }}
			<i class="icon ion-md-create" @click="routerEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts.js';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (!confirm('You want to delete it?')) {
				return;
			}

			await deletePost(this.postItem._id);
			this.$emit('reflash');
		},
		routerEditPage() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
	},
};
</script>

<style></style>
