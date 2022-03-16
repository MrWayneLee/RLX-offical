<template>
	<div id="gallerypage">
		<section>
			<div class="title">
				<h1>图册 / Gallery</h1>
			</div>
		</section>
		<section>
			<div class="gallery" ref="gallery">
				<div class="gallery-title" :class="{hide: isGalleryShow}">
					<ul>
						<li @click="loadInfoByArea(0)">All</li>
						<li @click="loadInfoByArea(1)">C1</li>
						<li @click="loadInfoByArea(2)">C2</li>
						<li @click="loadInfoByArea(3)">C3</li>
						<li @click="loadInfoByArea(4)">C4</li>
						<li @click="loadInfoByArea(5)">C5</li>
						<li @click="loadInfoByArea(6)">C6</li>
						<!-- -1为其他区域，0加载全部 -->
						<li @click="loadInfoByArea(-1)"><font-awesome-icon icon='bars'></font-awesome-icon></li>
					</ul>
					<div class="hide-gallery" :class="{hide: isGalleryShow}" @click="isGalleryShow = !isGalleryShow">
						<font-awesome-icon icon='caret-left'></font-awesome-icon>
					</div>
				</div>
				<div 
					ref="galleryItem"
					class="gallery-item" 
					v-for="item of resultList" 
					:style="{'background-image':'url(' + item.img + ')', 'height': itemHeight + 'px'}"
					>
					<!-- :style="{'height':itemHeight + 'px'}" -->
					<!-- <div class="item-carousel">
						<img v-for="img of item.img" :src="img" :style="{'width': itemWidth + 'px'}">
					</div> -->
					<div class="item-info">
						<h1>
							<div 
								class="tag" 
								:class="{'original':item.original}"
								:title="item.creator ? '来源：' + item.creator : null"
								>
								{{item.original ? '原创' : '非原创'}}
							</div>
							{{item.name}}
						</h1>
						<h2>建造者：{{item.owner}}</h2>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "gallerypage",
		data() {
			return {
				galleryList: [],
				isGalleryShow: false,
				itemHeight: "",
				itemWidth: "",
				resultList: []
			}
		},
		mounted() {
			this.$axios.get('static/data/data.json').then(res => {
				if(res.status == 200) {
					this.galleryList = res.data.galleryList
					this.loadInfoByArea(0)
				}
			})
			this.onresize()
		},
		methods: {
			onresize() {
				this.itemHeight = this.$refs.galleryItem[0].clientWidth * 0.5625
				this.itemWidth = this.$refs.gallery.clientWidth
				window.onresize = () => {
					this.itemHeight = this.$refs.galleryItem[0].clientWidth * 0.5625
					this.itemWidth = this.$refs.gallery.clientWidth
				}
			},
			loadInfoByArea(num) {
				this.isGalleryShow = !this.isGalleryShow
				if(num == 0) {
					this.resultList = this.galleryList; return
				}
				this.resultList = []
				this.galleryList.forEach(item => {
					if(item.area == num) this.resultList.push(item)
					document.documentElement.scrollTop = 0
				})
				if(this.resultList == 0) this.resultList.push({
					img: "static/imgs/bg-wool-white",
					name: "暂未有作品",
					owner: "屏幕前的你，等待你的加入",
					original: true
				})
			}
		}
	}
</script>

<style scoped>
	#gallerypage {
		/* margin-top: -144px; */
		background: url(../../../static/imgs/bg-wool-white.png);
		background-position: 50% 0;
	}
		
	.title {
		width: 100%;
		padding: 30px 0;
		text-shadow: 0 0 4px #000;
		color: #fff;
		text-align: center;
		background: url(../../../static/imgs/bg-wool-trans.png);
		background-position: 50% 0;
	}
	
	.gallery {
		position: relative;
		width: 100%;
	}
	
	.gallery-title {
		position: fixed;
		height: 100vh;
		z-index: 10;
		top: 0;
		text-align: center;
		display: flex;
		align-items: center;
		transition: ease 0.5s;
	}
	
	.gallery-title.hide {
		transform: translateX(-60px);
	}
	
	.gallery-title ul {
		width: 60px;
		padding: 0 10px;
		background: transparent;
	}
	
	.gallery-title ul li {
		border: 2px solid #000;
		padding: 9px;
		margin-bottom: 10px;
		background: #fff;
		cursor: pointer;
	}
	
	.gallery-title ul li:last-of-type {
		margin-bottom: 0;
	}
	
	.hide-gallery {
		border: 2px solid #000;
		background: #F5F5F5;
		padding: 15px 10px;
		font-size: 1rem;
	}
	
	.hide-gallery svg {
		transition: ease 0.5s;
	}
	
	.hide-gallery.hide svg {
		transform: rotate(180deg);
	}
	
	.gallery-item {
		position: relative;
		height: 100vh;
		overflow: hidden;
		background-attachment: fixed;
		background-size: cover;
		background-position: 50% 50%;
		background-repeat: no-repeat;
	}
	
	.item-carousel {
		height: 100%;
		width: max-content;
		font-size: 0;
	}
	
	.item-carousel img {
		height: 100%;
		display: inline-block;
	}
	
	.item-info {
		text-shadow: 0 0 4px #000;
		font-family: "ZS"; 
		position: absolute;
		text-align: center;
		width: 100%;
		padding: 0 30%;
		bottom: 10%;
		color: #fff;
	}
	
	.item-info h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.8rem;
	}
	
	.tag {
		display: inline-block;
		font-family: "微软雅黑";
		font-size: 1rem;
		padding: 4px 10px;
		background: #fff;
		color: #111;
		margin-right: 1rem;
		text-shadow: none;
		cursor: default;
		user-select: none
	}
	
	.original {
		background: #f44336;
		color: #ffee58;
	}
	
	.item-info h2 {
		font-size: 1.6rem;
	}
	
	@media (max-width: 1023px) {
		.gallery-item {
			width: 100%;
			height: calc(100vw * 0.5625);
			background-attachment: scroll;
			background-size: contain;
		}
		
		.item-info {
			padding: 0 10% 0 30%;
			text-align: right;
		}
		
		.item-info h1 {
			font-size: 1rem;
			justify-content: flex-end;
		}
		
		.tag {
			font-size: 0.6rem;
			padding: 2px 5px;
			margin-right: 0.5rem;
		}
		
		.item-info h2 {
			font-size: 0.7rem;
		}
	}
	
</style>
