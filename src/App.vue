<template>
	<div id="app">
		<indexheader></indexheader>
		<router-view></router-view>
		<indexfooter></indexfooter>
	</div>
</template>

<script>
	import indexheader from "./components/Header"
	import indexfooter from "./components/Footer"
	export default {
		name: 'App',
		components: {
			indexheader,
			indexfooter
		}
	}
</script>

<style>
	@font-face {
		font-family: "ZS";
		src: url(../static/fonts/huawenzhongsong.ttf);
	}
	
	* {
		box-sizing: border-box;
	}
	html, body, ul, li, p, a, input,
	h1, h2, h3, h4, h5, h6 {
		text-decoration: none;
		list-style: none;
		outline: none;
		padding: 0;
		margin: 0;
	}
	img, a {
		display: block;
	}
</style>
