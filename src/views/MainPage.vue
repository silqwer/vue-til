<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<loading-spinner v-if="isLoading">Loading ...</loading-spinner>
			<ul v-else>
				<post-list-item
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
					@reflash="fetchNotes"
				></post-list-item>
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			<i class="ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

import { fetchPosts } from '@/api/posts.js';

export default {
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	components: {
		PostListItem,
		LoadingSpinner,
	},
	methods: {
		async fetchNotes() {
			this.isLoading = true;
			const response = await fetchPosts();
			this.postItems = response.data.posts;
			this.isLoading = false;
		},
	},
	created() {
		this.fetchNotes();
	},
};
</script>

<style></style>
