<template>
	<div id="indexheader">
		<div class="header">
			<div class="nav">
				<div class="left">
					<div class="left-content">
						<div class="logo">
							<img src="../../static/imgs/minecraft-logo.png" >
						</div>
						<div class="title">
							<h2>RLX Server</h2>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="right-content">
						<div class="navigation">
							<ul>
								<li v-for="item in routerList"><router-link :to="item.path">{{item.title}}</router-link></li>
							</ul>
						</div>
						<font-awesome-icon class="btn-menu" icon="bars" size="2x" @click="isNavShow = !isNavShow" />
						<div class="navigation-mobile" :class="{'show':isNavShow}" ref="nav">
							<ul>
								<li v-for="item in routerList" @click="isNavShow = !isNavShow"><router-link :to="item.path">{{item.title}} / {{item.name}}</router-link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "indexheader",
		data() {
			return {
				routerList: [],
				isNavShow: false
			}
		},
		mounted() {
			// 加载路由
			this.routerList = this.$router.options.routes
		},
		methods: {
			
		},
		watch: {
			
		}
	}
</script>

<style scoped="scoped">
	#indexheader {
		width: 100%;
		position: sticky;
		top: 0;
		color: #ffffff;
		z-index: 100;
	}
	
	.header {
		background: #1c1c1c;
		box-shadow: 0 0 5px #1c1c1c;
		padding: 1.5rem 0;
	}
		
	.nav {
		display: flex;
		justify-content: space-between;
		margin: 0 2rem;
	}
	
	.left, .right, 
	.left-content,
	.right-content {
		display: flex;
		align-items: center;
	}
	
	.logo img {
		width: 60px;
		height: 60px;
		margin-right: 1.5rem;
	}
	
	.title {
		user-select: none;
	}
	
	.title h2 {
		border-bottom: 3px solid #fff;
	}
		
	.navigation ul {
		display: flex;
		user-select: none;
	}
		
	.navigation ul li a {
		padding: 0 20px;
		height: 60px;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		font-weight: 100;
		font-size: 1.2rem;
		color: #fff;
	}
	
	.navigation ul li a::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 0;
		background-color: #FFFFFF;
		width: 100%;
		transition: ease 0.2s;
	}
	
	.navigation ul li a:hover::after {
		height: 4px;
		transition: ease 0.2s;
	}
	
	.btn-menu,
	.navigation-mobile {
		display: none;
	}
	
	@media (max-width: 1023px) {
		.logo img,
		.navigation,
		.carousel-controller {
			display: none;
		}
				
		.btn-menu,
		.navigation-mobile {
			display: block;
		}
		
		.navigation-mobile {
			position: absolute;
			background: #242424;
			width: 0;
			right: 0;
			top: 82px;
			opacity: 0;
			transition: ease 0.5s;
			padding: 0;
			overflow: hidden;
			white-space: nowrap;
		}
		
		.navigation-mobile.show {
			padding: 20px 2rem;
			width: 100%;
			opacity: 1;
		}
		
		.navigation-mobile ul li a {
			opacity: 0;
			transition: ease 0.3s;
		}
		
		.navigation-mobile.show ul li a {
			opacity: 1;
		}
		
		.navigation-mobile ul li {
			margin-bottom: 10px;
		}
		
		.navigation-mobile ul li a {
			color: #FFFFFF;
			text-align: right;
		}
	}
</style>
