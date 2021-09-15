<template>
	<transition appear @before-enter="beforeEnter" @enter="enter">
		<div class="card" ref="card">
			<div class="card-top" :style="{ backgroundColor: props.colorCode }">
				<button @click="copyToClipBoard"></button>
			</div>
			<div class="card-bottom">
				<div class="color-name">{{ props.colorName }}</div>
				<div class="color-code">{{ props.colorCode }}</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import useClipboard from 'vue-clipboard3';
import gsap from 'gsap';

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

//gsap
const beforeEnter = (el) => {
	gsap.set(el, {
		opacity: 0,
		x: 100,
	});
};
const enter = (el, done) => {
	gsap.to(el, {
		opacity: 1,
		x: 0,
		duration: 1,
		stagger: 0.1,
		onComplete: done,
	});
};
</script>

<style lang="scss" scoped>
.card {
	background: var(--background-color);
	// width: 180px;
	width: 100%;
	border-radius: 1rem;
	height: 18rem;
	display: flex;
	flex-direction: column;
	&-top {
		width: 100%;
		height: 70%;
		border-radius: 1rem 1rem 0 0;
		transition: 0.2s ease-in-out;
		button {
			height: 100%;
			width: 100%;
			background: transparent;
			outline: none;
			border: none;
			cursor: pointer;
		}
		&:hover {
			transform: scale(1.1) rotate(90deg);
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
			border-radius: 1rem;
		}
	}
	&-bottom {
		background: #fff;
		border-radius: 0 0 1rem 1rem;
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
