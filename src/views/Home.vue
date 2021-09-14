<template>
	<div class="home">
		<section class="primary ">
			<h1 class="header mb-1">Color</h1>
			<p class="sub-heading mb-2">
				The Primary Application Colors are neutralized to allow the sparse user
				of the primary blue and content to take center stage.
			</p>
			<div class="primary-card-section grid-col-4">
				<primaryCards />
				<primaryCards />
				<primaryCards />
				<primaryCards />
			</div>
		</section>
	</div>
</template>

<script setup>
import primaryCards from '../components/primaryCards.vue';
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

@media only screen and (max-width: 900px) {
	.sub-heading {
		width: 90%;
	}
}
</style>
