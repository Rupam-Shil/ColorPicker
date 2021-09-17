<template>
	<div class="header">
		<header>
			<router-link to="/" class="logo" @click="changeGradient"
				>Color<span>Picker</span></router-link
			>
			<nav>
				<ul>
					<li>
						<router-link to="/gradient" class="gradient btn"
							>Gradient</router-link
						>
						<router-link to="/" class="solid btn">Solid</router-link>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';

// const store = useStore();
// const isGradient = computed(() => store.state.isGradient);

// const changeGradient = () => store.commit('changeGradient');
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
	li {
		display: flex;
		gap: 1rem;
	}
	.btn {
		padding: 0.5rem 0.8rem;
		border-radius: 5px;
		font-weight: 700;
		text-align: center;
	}
	.gradient {
		background: linear-gradient(86deg, #e233ff, #ff6b00);
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}
	.solid {
		background: #b9345a;
	}
}

@media only screen and (max-width: 900px) {
	header {
		height: max-content;
		padding: 1rem;
	}
	ul {
		li {
			flex-direction: column;
		}
	}
}
</style>
