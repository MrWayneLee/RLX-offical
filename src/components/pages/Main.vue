<template>
	<div id="mainpage">
		<section>
			<div class="carousel" :style="'height:' + carousel.carouselHeight + 'px'">
				<div class="carousel-list" :style="'transform: translateX(-' + carousel.currentIndex * carousel.carouselWidth +'px)'">
					<div v-for="(item, index) of carousel.carouselList" class="page">
						<img :src="item.img">
						<div class="carousel-content">
							<h1>{{item.title}}</h1>
							<p>{{item.content}}</p>
						</div>
					</div>
				</div>
				<div class="carousel-controller">
					<div class="carousel-prev" @click="switchPage(carousel.currentIndex - 1)">
						<font-awesome-icon icon="arrow-left" />
					</div>
					<div class="carousel-next" @click="switchPage(carousel.currentIndex + 1)">
						<font-awesome-icon icon="arrow-right" />
					</div>
				</div>
				<div class="carousel-dots">
					<div v-for="(item, index) in carousel.carouselList" class="carousel-dot" @click="switchPage(index)"></div>
				</div>
			</div>
			<div class="carousel-mobile">
				
			</div>
		</section>
		<section class="info" v-for="(item, index) of infoList" :class="item.bg">
			<div class="section">
				<div class="section-title">
					<h1>{{item.title}}</h1>
					<h3>{{item.subTitle}}</h3>
				</div>
				<div class="section-content">
					<div class="content-left">
						<img :src="item.img" >
					</div>
					<div class="content-right">
						<p>{{item.text}}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'mainpage',
		data() {
			return {
				carousel: {
					carouselList: [],
					carouselWidth: 0,
					carouselHeight: 0,
					currentIndex: 0
				},
				infoList: []
			}
		},
		mounted() {
			this.$axios.get('static/data/data.json').then(res => {
				if(res.status == 200) {
					this.carousel.carouselList = res.data.carousel.carouselList
					this.infoList = res.data.indexInfo
				}
			})
			this.onresize()
		},
		methods: {
			onresize() {
				this.carousel.carouselWidth = window.innerWidth
				this.carousel.carouselHeight = document.body.clientWidth * 0.5625
				window.onresize = () => {
					this.carousel.carouselWidth = window.innerWidth
					this.carousel.carouselHeight = document.body.clientWidth * 0.5625
				}
			},
			switchPage(page) {
				if(page < 0) {
					this.carousel.currentIndex = 0
				} else if (page >= this.carousel.carouselList.length - 1) {
					this.carousel.currentIndex = this.carousel.carouselList.length - 1
				} else {
					this.carousel.currentIndex = page
				}
			}
		}
	}
</script>

<style scoped>
	.bg-blue {
		background: #0a74b9;
	}
	
	.bg-green {
		background: #3b8526;
	}
	
	.bg-blue, .bg-green {
		color: #fff;
		text-shadow: 0 0 4px #000;
	}
	
	#mainpage {
		/* margin-top: -144px; */
		background: url(../../../static/imgs/bg-wool-white.png);
		background-position: 50% 0;
	}

	.carousel {
		position: relative;
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
	}

	.carousel-list {
		display: block;
		height: 100%;
		width: max-content;
		transition: ease 0.8s;
	}

	.page {
		position: relative;
		float: left;
		width: 100vw;
		height: 100%;
	}

	.page img {
		width: 100%;
		height: 100%;
	}
	
	.carousel-content {
		position: absolute;
		bottom: 20%;
		left: 10%;
		background: transparent;
		color: #fff;
		font-family: "ZS";
		text-shadow: 0 0 10px #000;
	}
	
	.carousel-content h1 {
		font-size: 5rem;
	}
	
	.carousel-content p {
		font-size: 3rem;
	}
	
	.carousel-controller {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
		top: 0;
	}
	
	.carousel-prev, 
	.carousel-next {
		height: 50px;
		width: 50px;
		margin: 0 25px;
		border-radius: 50px;
		top: 0;
		background: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.3rem;
		color: #1a1a1a;
		cursor: pointer;
	}
	
	.carousel-prev {
		left: 0;
	}
	
	.carousel-next {
		right: 0;
	}
	
	.carousel-dots {
		position: absolute;
		width: 100%;
		padding: 20px 0;
		bottom: 0;
		display: flex;
		justify-content: center;
	}
	
	.carousel-dot {
		width: 10px;
		height: 10px;
		border-radius: 100px;
		margin-right: 10px;
		background: #ffffff;
		cursor: pointer;
	}
	
	.carousel-dot:last-of-type {
		margin-right: 0;
	}
	
	section.info {
		padding: 50px 0;
	}
	
	.section {
		padding: 0 10%;
	}
	
	.section-title {
		text-align: center;
		font-family: "times new roman", "ZS";
		margin-bottom: 20px;
	}
	
	.section-title h1 {
		font-size: 2rem;
	}
	
	.section-title h3 {
		font-size: 1.4rem;
	}
	
	.section-content {
		display: flex;
		align-items: center;
		gap: 20px
	}
	
	.info:nth-of-type(odd) .section-content {
		flex-direction: row-reverse;
	}
	
	.content-left, .content-right {
		flex: 1;
	}
	
	.content-left {
		border: 1px solid #dbdbdb;
		background: #f5f5f5;
		padding: 5px;
		border-radius: 5px;
	}
	
	.content-left img {
		width: 100%;
	}
	
	.content-right {
		text-indent: 2rem;
		text-wrap: none;
	}
	
	@media (max-width: 1023px) {
		.carousel-content h1 {
			font-size: 3.5rem;
		}
		
		.carousel-content p {
			font-size: 1.5rem;
		}
		
		.carousel-controller,
		.carousel-dots {
			display: none;
		}
		
		.section-content {
			flex-direction: column!important;
			align-items: flex-start;
		}
		
		.section-title h1 {
			font-size: 2rem;
		}
		
		.section-title h3 {
			font-size: 1.5rem;
		}
	}
</style>
