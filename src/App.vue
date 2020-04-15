<template>
	<section>
		<app-header></app-header>
		<router-view></router-view>
	</section>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: {
		AppHeader,
	},
};
</script>

<style></style>
