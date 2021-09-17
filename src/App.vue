<template>
	<Header />
	<router-view />
</template>

<script setup>
import Header from './layouts/Header.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--background-color: #23292f;
	--text-color: #dbdbdb;
	--text-color-dark: #707070;
}

body {
	font-family: 'Poppins', sans-serif;
	background: var(--background-color);
	color: var(--text-color);
}
</style>
