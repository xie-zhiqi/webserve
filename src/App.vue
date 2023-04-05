<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
@import 'styles/reset.scss';
@import 'styles/variables.scss';
@import 'styles/element.scss';

#tsparticles {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000000;
	z-index: -10;
}
</style>
