<template>
	<div class="header">
		<header>
			<router-link to="/" class="logo" @click="isGradient = false"
				>Color<span>Picker</span></router-link
			>
			<nav>
				<ul>
					<li>
						<router-link
							to="/gradient"
							class="gradient btn"
							v-if="!isGradient"
							@click="isGradient = !isGradient"
							>Gradient</router-link
						>
						<router-link
							to="/"
							class="solid btn"
							v-else
							@click="isGradient = !isGradient"
							>Solid</router-link
						>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const isGradient = ref(false);
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	.logo {
		font-size: 2rem;
		font-weight: 600;
		letter-spacing: 1px;
	}
}

a {
	text-decoration: none;
	color: inherit;
}
ul {
	list-style: none;
	.btn {
		padding: 0.5rem 0.8rem;
		border-radius: 5px;
		font-weight: 700;
	}
	.gradient {
		background: linear-gradient(86deg, #e233ff, #ff6b00);
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}
	.solid {
		background: #b9345a;
	}
}
</style>
