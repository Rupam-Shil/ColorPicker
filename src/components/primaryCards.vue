<template>
	<div class="card">
		<div class="card-top" :style="{ backgroundColor: props.colorCode }"></div>
		<div class="card-bottom">
			<div class="color-name">{{ props.colorName }}</div>
			<div class="color-code">{{ props.colorCode }}</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	colorCode: String,
	colorName: String,
});
</script>

<style lang="scss" scoped>
.card {
	background: #fff;
	width: 200px;
	border-radius: 1rem;
	height: 20rem;
	display: flex;
	flex-direction: column;
	&-top {
		background: red;
		width: 100%;
		height: 70%;
		border-radius: 1rem 1rem 0 0;
	}
	&-bottom {
		height: 30%;
		color: var(--text-color-dark);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.color-name {
		}
	}
}
</style>
