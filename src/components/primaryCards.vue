<template>
	<div class="card">
		<div class="card-top" :style="{ backgroundColor: props.colorCode }">
			<button @click="copyToClipBoard"></button>
		</div>
		<div class="card-bottom">
			<div class="color-name">{{ props.colorName }}</div>
			<div class="color-code">{{ props.colorCode }}</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import useClipboard from 'vue-clipboard3';

const props = defineProps({
	colorCode: String,
	colorName: String,
});

const emits = defineEmits(['copied']);
//Clipboard Function

const { toClipboard } = useClipboard();

const copyToClipBoard = async () => {
	try {
		await toClipboard(props.colorCode);
		emits('copied');
	} catch (e) {
		console.log(e);
	}
};
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
		button {
			height: 100%;
			width: 100%;
			background: transparent;
			outline: none;
			border: none;
			cursor: pointer;
		}
	}
	&-bottom {
		height: 30%;
		color: var(--text-color-dark);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
		.color-name {
			font-weight: 600;
		}
	}
}
</style>
