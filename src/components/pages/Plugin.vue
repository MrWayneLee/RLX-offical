<template>
	<div id="pluginpage">
		<section>
			<div class="title">
				<h1>功能性组件 / Plugin</h1>
			</div>
		</section>
		<section>
			<div class="plugin-area">
				<div class="plugin-title">
					<div class="">查询在线时长</div>
				</div>
				<div class="plugin-content">
					<div class="content">
						<form>
							<div class="form-group">
								<span>XUID / XBOX ID：</span>
								<input type="text" class="input-text"/>
							</div>
							<div class="form-group">
								<span>验证码：</span>
								<input type="text" class="input-text"/>
							</div>
							<div class="form-group align-center">
								<verify></verify>
								<div class="btn-confirm">提交</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import verify from "../utils/verify.vue"
	
	export default {
		name: "pluginpage",
		components: {
			verify
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	#pluginpage {
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
	
	.plugin-area {
		padding: 0 10% 10%;
	}
	
	.plugin-title {
		padding: 20px 0 40px;
		font-size: 1.5rem;
		text-align: center;
	}
	
	.plugin-content {
		padding: 20px;
		background: #fff;
		border-radius: 10px;
	}
	
	.form-group {
		width: 40%;
		margin: 10px auto;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	
	.input-text {
		width: 100%;
		border: 1px solid #808080;
		border-radius: 100px;
		padding: 8px 16px;
		margin: 10px 0;
		font-size: 1rem;
	}
	
	.btn-confirm {
		border: 2px solid #000;
		width: 50%;
		padding: 10px 20px;
		text-align: center;
		margin: 20px 0 0;
		cursor: pointer;
		user-select: none
	}
	
	.align-center {
		align-items: center;
	}
	
	@media (max-width: 1023px) {
		.form-group {
			width: 100%;
		}
	}
</style>
