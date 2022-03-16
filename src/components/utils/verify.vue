<template>
	<div id="verify">
		<canvas @click="drawCanvas()" ref="canvas" :height="height" :width="width"></canvas>
	</div>
</template>

<script>
	export default {
		name: "verify",
		props: {
			length: {
				type: Number,
				default: 4
			},
			width: {
				type: Number,
				default: 120
			},
			height: {
				type: Number,
				default: 50
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			this.drawCanvas()
		},
		methods: {
			drawCanvas() {
				this.$refs.canvas.height = this.$refs.canvas.height
				let ctx = this.$refs.canvas.getContext('2d')
				for(var index = 0 ; index < this.$props.length ; index++) {
					ctx.font = ((Math.random() * (30 - 10)) + 30) + "px 'times new roman'"
					ctx.strokeText(this.getRandom(), (this.$refs.canvas.width / this.$props.length) * index, 40);
				}
			},
			getRandom() {
				var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
				return text.substr(Math.random() * text.length, 1)
			}
		}
	}
</script>

<style scoped>
	#verify {
		background-color: #cfcfcf;
		user-select: none;
		cursor: pointer;
	}
</style>
