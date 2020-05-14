export function formatDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	const day = date.getDate();
	const minutes = date.getMinutes();

	let month = date.getMonth() + 1;
	let hours = date.getHours();

	month = month > 9 ? month : `0${month}`;
	hours = hours > 9 ? hours : `0${hours}`;

	return `${year}-${month}-${day} ${hours}:${minutes}`;
}
