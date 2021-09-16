<template>
	<div class="gradient">
		<transition @enter="enter">
			<div class="copyToClipboard" v-if="isCopied">Copied 📋</div>
		</transition>
		<section class="primary-gradient section">
			<h1 class="header">Clip To Copy</h1>
			<p class="subheader">
				A handpicked collection of beautiful color gradients for designers and
				developers.
			</p>
			<div class="gradient-card-section grid-6">
				<gradientCards
					@copied="copied"
					v-for="(card, index) in gradientColors"
					:key="index"
					:colorOne="card.colorOne"
					:colorTwo="card.colorTwo"
				/>
			</div>
		</section>
	</div>
</template>

<script setup>
import gradientCards from '../components/gradientCards.vue';
import gsap from 'gsap';
import { ref } from 'vue';

let isCopied = ref(false);

const gradientColors = [
	{ colorOne: '#F40076', colorTwo: '#DF98FA' },
	{ colorOne: '#F06966', colorTwo: '#FAD6A6' },
	{ colorOne: '#FF0076', colorTwo: '#590FB7' },
	{ colorOne: '#9055FF', colorTwo: '#13E2DA' },
	{ colorOne: '#0863F6', colorTwo: '#003CC5' },
	{ colorOne: '#D6FF7F', colorTwo: '#0083CC' },
	{ colorOne: '#E233FF', colorTwo: '#FF6B00' },
	{ colorOne: '#DF98FA', colorTwo: '#9055FF' },
	{ colorOne: '#ED7B84', colorTwo: '#9055FF' },
	{ colorOne: '#402565', colorTwo: '#30BE96' },
	{ colorOne: '#402662', colorTwo: '#3900A6' },
	{ colorOne: '#F1465B', colorTwo: '#DC2537' },
	{ colorOne: '#F40076', colorTwo: '#342711' },
	{ colorOne: '#000066', colorTwo: '#6699FF' },
	{ colorOne: '#CB5EEE', colorTwo: '#4BE1EC' },
	{ colorOne: '#FA7CBB', colorTwo: '#F14658' },
	{ colorOne: '#737DFE', colorTwo: '#FFCAC9' },
	{ colorOne: '#2F80ED', colorTwo: '#B2FFDA' },
];

const copied = () => {
	isCopied.value = true;
};

const enter = (el, done) => {
	gsap.to(el, {
		x: -100,
		ease: 'elastic.inOut(2.5, 1)',
		opacity: 1,
		duration: 1,
	});
	gsap.to(el, {
		y: 100,
		ease: 'elastic.inOut(2.5, 1)',
		opacity: 0,
		duration: 1,
		delay: 1,
		onComplete: () => {
			isCopied.value = false;
			done();
		},
	});
};
</script>

<style lang="scss" scoped>
.section {
	display: flex;
	flex-direction: column;
	align-items: center;
	.header {
		margin-top: 1rem;
		font-weight: 500;
		font-size: clamp(2rem, 5vw, 2.5rem);
	}
	.subheader {
		text-align: center;
		width: 60%;
		margin: 0.5rem 0 2rem 0;
	}
}
.grid-6 {
	width: 90%;
	max-width: 1200px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	gap: 2rem;
	justify-items: center;
}
.copyToClipboard {
	background: #fff;
	padding: 0.8rem 2rem;
	position: fixed;
	bottom: 10px;
	right: 0;
	opacity: 0;
	color: var(--text-color-dark);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	font-size: 1.5rem;
	font-weight: 600;
	z-index: 10000;
}
@media only screen and (max-width: 900px) {
	.section {
		.subheader {
			width: 90%;
		}
	}
	.grid-6 {
		gap: 1rem;
	}
}
</style>
