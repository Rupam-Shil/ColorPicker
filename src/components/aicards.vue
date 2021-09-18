<template>
	<section>
		<div class="card" :style="{ backgroundColor: props.colorHex }">
			<button @click="copiedToClipboard"></button>
			<transition @before-enter="beforeEnter" @enter="enter">
				<p v-if="isCopied">Copied 📋</p>
			</transition>
		</div>
		<p class="card-hex">{{ props.colorHex }}</p>
	</section>
</template>

<script setup>
import gsap from 'gsap';
import { defineProps, ref } from 'vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

const props = defineProps({
	colorHex: String,
});
const isCopied = ref(false);

const copiedToClipboard = async () => {
	await toClipboard(props.colorHex);
	isCopied.value = true;
};

const beforeEnter = (el) => {
	gsap.set(el, {
		opacity: 0,
		x: 10,
	});
};
const enter = (el, done) => {
	gsap.to(el, {
		opacity: 1,
		duration: 1,
		ease: 'elastic.inOut(2.5, 1)',
		x: 0,
	});
	gsap.to(el, {
		opacity: 0,
		duration: 1,
		delay: 1,
		ease: 'elastic.inOut(2.5, 1)',
		y: 50,
		onComplete: () => {
			isCopied.value = false;

			done();
		},
	});
};
</script>

<style lang="scss" scoped>
section {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
}
.card {
	background: #fff;
	height: 18rem;
	width: 90%;
	border-radius: 1rem;
	transition: 0.3s;
	display: grid;
	place-content: center;
	position: relative;
	p {
		font-weight: 600;
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	}
	button {
		position: absolute;
		outline: none;
		border: none;
		background: transparent;
		width: 100%;
		height: 100%;
	}
	&:hover {
		transform: scale(1.1);
	}
}

@media only screen and (max-width: 768px) {
	.card {
		height: 5rem;
	}
}
</style>
