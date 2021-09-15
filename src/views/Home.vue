<template>
	<div class="home">
		<transition @enter="enter">
			<div class="copyToClipboard" v-if="isCopied">Copied 📋</div>
		</transition>
		<section class="primary ">
			<h1 class="header mb-1">Color</h1>
			<p class="sub-heading mb-2">
				The Primary Application Colors are neutralized to allow the sparse user
				of the primary blue and content to take center stage.
			</p>
			<div class="primary-card-section grid-col-4">
				<primaryCards
					v-for="(card, index) in primaryCardColors"
					:key="index"
					:colorCode="card.colorCode"
					:colorName="card.colorName"
					@copied="copiedToClipboard"
				/>
			</div>
		</section>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import primaryCards from '../components/primaryCards.vue';
import { ref } from 'vue';

let isCopied = ref(false);

const primaryCardColors = [
	{ colorName: 'Charcoal', colorCode: '#383F48' },
	{ colorName: 'Primary Blue', colorCode: '#06BEE1' },
	{ colorName: 'Base Grey', colorCode: '#E1E1E1' },
	{ colorName: 'White', colorCode: '#FFFFFF' },
];
//gsap

function copiedToClipboard() {
	isCopied.value = true;
}

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
section.primary {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
}
.sub-heading {
	text-align: center;
	width: 50%;
}
.header {
	font-size: clamp(2rem, 5vw, 2.5rem);
	font-weight: 500;
}
.mb-1 {
	margin-bottom: 1rem;
}
.mb-2 {
	margin-bottom: 2rem;
}
.grid-col-4 {
	width: 90%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
}

@media only screen and (max-width: 900px) {
	.sub-heading {
		width: 90%;
	}
}
</style>
