import { posts } from './index.js';

// 학습 노트 데이터를 조회하는 api
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습 노트를 조회하는 API
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
	return posts.post('/', postData);
}

// 학습노트 삭제
function deletePost(postId) {
	return posts.delete(postId);
}

// 학습노트 수정
function editPost(postId, postData) {
	console.log(postData);
	return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
