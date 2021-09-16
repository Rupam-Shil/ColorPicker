<template>
	<div class="card">
		<div class="card-top" :style="{ background: gradientColor }" ref="cardtop">
			<button @click="copyToClipBoard"></button>
		</div>
		<div class="card-bottom">
			#f40076 -- #df98fa
		</div>
	</div>
</template>

<script setup>
import { defineEmits, defineProps, computed, ref, onMounted } from 'vue';
import useClipboard from 'vue-clipboard3';

const cardtop = ref(null);
const emits = defineEmits(['copied']);
const props = defineProps({
	colorOne: String,
	colorTwo: String,
});
const colorAngle = ref(120);

onMounted(() => {
	calculateDegree();
});

const calculateDegree = () => {
	cardtop.value.addEventListener('mousemove', (e) => {
		const center = {
			width: cardtop.value.clientWidth / 2,
			height: cardtop.value.clientHeight / 2,
		};
		const calculatedValue = {
			width: e.offsetX - center.width,
			height: e.offsetY - center.height,
		};
		const meanLine = Math.sqrt(
			Math.pow(calculatedValue.width, 2) + Math.pow(calculatedValue.height, 2)
		);
		const finalDegreeValue =
			180 + ((Math.atan(meanLine / calculatedValue.width) * 180) / Math.PI) * 2;
		colorAngle.value = parseInt(finalDegreeValue);
	});
};

const gradientColor = computed(() => {
	return `linear-gradient(${colorAngle.value}deg,${props.colorOne},${props.colorTwo})`;
});

const { toClipboard } = useClipboard();

const copyToClipBoard = async () => {
	try {
		await toClipboard(gradientColor.value);
		emits('copied');
	} catch (e) {
		console.log(e);
	}
};
</script>

<style lang="scss" scoped>
.card {
	width: 100%;
	height: 15rem;
	background: var(--background-color);
	margin-bottom: 2rem;
	&-top {
		button {
			width: 100%;
			height: 100%;
			outline: none;
			border: none;
			background: transparent;
		}
		width: 100%;
		height: 11rem;
		border-radius: 1rem 1rem 0 0;
		transition: 0.2s ease-in-out;
		&:hover {
			transform: rotate(90deg) scale(1.1);
			border-radius: 1rem;
		}
	}
	&-bottom {
		width: 100%;
		height: 4rem;
		background: #fff;
		border-radius: 0 0 1rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--text-color-dark);
		font-size: 0.9rem;
		font-weight: 500;
	}
}
</style>
