<template>
	<div class="aipalette">
		<div class="header">
			<select v-model="mode">
				<option value="monochrome">monochrome</option>
				<option value="monochrome-dark">monochrome-dark</option>
				<option value="monochrome-light">monochrome-light</option>
				<option value="analogic">analogic</option>
				<option value="complement">complement</option>
				<option value="analogic-complement">analogic-complement</option>
				<option value="triad">triad</option>
				<option value="quad">quad</option>
			</select>
			<button @click="generateColor">Generate Color</button>
		</div>
		<div class="aipalette-body">
			<h1 class="heading">{{ mode }}</h1>
			<p class="subheading">Clip To Copy</p>
			<div class="cards">
				<aicards
					v-for="card in color.data"
					:key="card.hex.value"
					:colorHex="card.hex.value"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import aicards from '../components/aicards.vue';
import { reactive, ref } from 'vue';

const color = reactive({ data: [] });
const hexValue = ref('0047AB');
const mode = ref('monochrome');

const fetchColor = async () => {
	console.log(hexValue.value);
	const res = await axios.get(
		`https://www.thecolorapi.com/scheme?hex=${hexValue.value}&count=5&mode=${mode.value}`
	);
	color.data = res.data.colors;
};
fetchColor();

const generateColor = () => {
	hexValue.value = Math.floor(Math.random() * 16777215).toString(16);
	fetchColor();
};
</script>

<style lang="scss" scoped>
.aipalette {
	margin-bottom: 2rem;
	.header {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-bottom: 2rem;
		button {
			outline: none;
			padding: 0.5rem 0.8rem;
			border: none;
			border-radius: 5px;
			font-weight: 600;
			color: var(--text-color-dark);
			background: var(--text-color);
			&:hover {
				background: #c0c8d1;
			}
		}
		select {
			color: var(--text-color-dark);
			background: var(--text-color);
			outline: none;
			border: none;
			border-radius: 5px;
			padding: 0.5rem 0.8rem;
		}
	}
	&-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h1.heading {
			font-size: clamp(1.5rem, 5vw, 2rem);
			text-transform: uppercase;
			font-weight: 500;
		}
		p.subheading {
			color: var(--text-color-dark);
			margin-bottom: 2rem;
		}
		.cards {
			width: 70%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
		}
	}
}

@media only screen and (max-width: 768px) {
	.aipalette {
		&-body {
			.cards {
				flex-direction: column;
			}
		}
		.header {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}
}
</style>
