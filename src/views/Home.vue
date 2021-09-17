<template>
	<div class="home">
		<transition @enter="enter">
			<div class="copyToClipboard" v-if="isCopied">Copied 📋</div>
		</transition>
		<section class="primary section ">
			<h1 class="header mb-1">Click To Copy</h1>
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
		<section class="secondary section">
			<p class="sub-heading mb-2">
				Communication between the system and end user(s) are defined by
				secondary colors that compliment the brand
			</p>
			<div class="secondary-card-section grid-col-4">
				<primaryCards
					v-for="(card, index) in secondaryCardColors"
					:key="index"
					:colorCode="card.colorCode"
					:colorName="card.colorName"
					@copied="copiedToClipboard"
				/>
			</div>
		</section>
		<section class="teritary section">
			<p class="sub-heading mb-2">
				Teritary colors are more vibrant to help add emphasis, as well as
				compliment the core palette. They should be used sparingly.
			</p>
			<div class="secondary-card-section grid-col-4">
				<primaryCards
					v-for="(card, index) in teritaryColors"
					:key="index"
					:colorCode="card.colorCode"
					:colorName="card.colorName"
					@copied="copiedToClipboard"
				/>
			</div>
		</section>
		<section class="grey section">
			<p class="sub-heading mb-2">
				Grays are used to help define tent, ui and icons throughout the
				application including content, ui and icons.
			</p>
			<div class="secondary-card-section grid-col-4">
				<primaryCards
					v-for="(card, index) in greyColors"
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
const secondaryCardColors = [
	{ colorName: 'Action', colorCode: '#0DCAF0' },
	{ colorName: 'Success', colorCode: '#30C862' },
	{ colorName: 'Alert', colorCode: '#FED449' },
	{ colorName: 'Warning', colorCode: '#FE5157' },
	{ colorName: 'Dark', colorCode: '#212529' },
];
const teritaryColors = [
	{ colorName: 'Teal', colorCode: '#087E8B' },
	{ colorName: 'Cyan', colorCode: '#06BEE1' },
	{ colorName: 'Yellow', colorCode: '#FAF2A1' },
	{ colorName: 'Orange', colorCode: '#FF765A' },
	{ colorName: 'Red', colorCode: '#E34F4F' },
	{ colorName: 'Pink', colorCode: '#F2BAC9' },
	{ colorName: 'Purple', colorCode: '#3D348B' },
];
const greyColors = [
	{ colorName: 'Dark Gray', colorCode: '#2E353D' },
	{ colorName: 'Charcoal', colorCode: '#353C45' },
	{ colorName: 'Slate Gray', colorCode: '#444B53' },
	{ colorName: 'Campfire', colorCode: '#686C73' },
	{ colorName: 'Med Gray', colorCode: '#8C939C' },
	{ colorName: 'Light Gray', colorCode: '#C2C8CF' },
	{ colorName: 'Base Gray', colorCode: '#E1E1E1' },
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
section.section {
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
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
	gap: 2rem;
	justify-items: center;
	justify-content: center;
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
	.sub-heading {
		width: 90%;
	}
	section.section {
		padding: 1rem;
		.grid-col-4 {
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			gap: 1rem;
		}
	}
}
</style>
