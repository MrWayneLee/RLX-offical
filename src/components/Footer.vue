<template>
	<div id="indexfooter">
		<div class="footer">
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
						<a class="btn-join" href="https://wj.qq.com/s2/6685116/f2f7/">填写问卷 加入我们</a>
						备案号：
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
	}
</script>

<style scoped>
	#indexfooter {
		z-index: 100;
		width: 100%;
		color: #ffffff;
	}
	
	.footer {
		background: #1c1c1c;
		box-shadow: 0 0 5px #1c1c1c;
		padding: 2.5rem 0;
	}
	
	.nav {
		display: flex;
		margin: 0 2rem;
		flex-direction: column;
		align-items: center;
		gap: 20px
	}
	
	.left-content {
		display: flex;
		align-items: center;
	}
	
	.left-content img {
		width: 60px;
		height: 60px;
		margin-right: 1.5rem;
	}
	
	.right-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
	
	.btn-join {
		color: #fff;
		padding: 10px 20px;
		border: 2px solid #fff;
	}
		
	@media (max-width: 1023px) {
		.left-content img {
			width: 60px;
			height: 60px;
		}
	}
	
</style>
