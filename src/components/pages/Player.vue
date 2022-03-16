<template>
	<div id="playerpage">
		<section>
			<div class="title">
				<h1>玩家 / Player[该页面未适配移动端]</h1>
			</div>
		</section>
		<section>
			<div class="player-content">
				<input type='radio' id="player" name="players" checked>
				<label for="player" @click="request('wayne')">玩家</label>
				<input type='radio' id="admin" name="players">
				<label for="admin">管理员团队</label>
				<input type='radio' id="tag" name="players">
				<label for="tag">标签说明</label>
				<hr>
				<div class="player-tab">
					<div class="player-item" v-for="(item, index) in playerData" :key="index">
						<div class="player-avatar">
							<img src="static/imgs/sticker-4.png" alt="">
						</div>
						<div class="player-info">
							<h2>玩家ID：{{item.name}}<span></span></h2>
							<p>标签：<span :title="tagData[tag-1].desc" :class="tagData[tag-1].level" v-for="(tag, index) in item.tag" :key="index">{{tagData[tag-1].name}}</span></p>
							<p>总游戏时长：<b>{{item.time}}小时+</b></p>
							<p>玩家寄语：</p>
							<p class="note">{{item.note}}</p>
						</div>
					</div>
				</div>
				<div class="player-tab">
					<div class="player-item" v-for="(item, index) in adminData" :key="index">
						<div class="player-avatar">
							<img src="static/imgs/sticker-4.png" alt="">
						</div>
						<div class="player-info">
							<h2>玩家ID：{{item.name}}<span></span></h2>
							<p>标签：<span :title="tagData[tag-1].desc" :class="tagData[tag-1].level" v-for="(tag, index) in item.tag" :key="index">{{tagData[tag-1].name}}</span></p>
							<p>总游戏时长：<b>{{item.time}}小时+</b></p>
							<p>玩家寄语：</p>
							<p class="note">{{item.note}}</p>
						</div>
					</div>
				</div>
				<div class="player-tab">
					<div class="tag-info">
						<div class="tag-title">
							<span class="w-10">ID</span>
							<span class="w-20">名称</span>
							<span class="w-10">标识</span>
							<span class="w-60">描述</span>
						</div>
						<div class="tag-list">
							<div class="tag-item" v-for="(tag, index) in tagData" :key="index">
								<div class="w-10"><span>{{tag.id}}</span></div>
								<div class="w-20"><span>{{tag.name}}</span></div>
								<div class="w-10"><span :class="tag.level">{{tag.level}}</span></div>
								<div class="w-60"><span>{{tag.desc}}</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "playerpage",
		data() {
			return {
				playerData: [],
				adminData: [],
				tagData: []
			}
		},
		mounted() {
			// this.$axios.get('static/data/data.json').then(res => {
            //     if(res.status == 200) {
			// 		this.playerData = res.data.playerInfo
			// 		this.adminData = res.data.adminInfo
			// 		this.tagData = res.data.tags
			// 	}
			// })
		},
		methods: {
			request: function(player) {
				player = "MrWayneLee1"
				// this.$axios.get(`http://127.0.0.1:66/api/player`).then(res => {
				// 	console.log(res)
				// })
				// this.$axios.get(`http://127.0.0.1:66/api/player/${player}`).then(res => {
				// 	console.log(res)
				// })
				// this.$axios.post(`http://127.0.0.1:66/api/player`, {
				// 	"name": "MrWayneLee1",
				// 	"xuid": 7
				// }).then(res => {
				// 	console.log(res)
				// })
				// this.$axios.delete(`http://127.0.0.1:66/api/player/${player}`).then(res => {
				// 	console.log(res)
				// })
				this.$axios.post('http://127.0.0.1:66/admin/login', {
					"email": "1165461458@qq.com",
					"password": "123456"
				})
			}
		}
	}
</script>

<style scoped>
	#playerpage {
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
	
	.player-content {
		font-size: 0;
		width: 100%;
		padding: 40px 10% 10% 10%;
	}
	
	.player-content input,
	.player-tab {
		display: none;
	}
	
	.player-content input:nth-of-type(1):checked ~ .player-tab:nth-of-type(1),
	.player-content input:nth-of-type(2):checked ~ .player-tab:nth-of-type(2), 
	.player-content input:nth-of-type(3):checked ~ .player-tab:nth-of-type(3) {
		display: block;
	}
	
	.player-content input:checked + label {
		background: #000;
		color: #fff;
	}
	
	.player-content label {
		font-size: 1rem;
		display: inline-block;
		text-align: center;
		user-select: none;
		cursor: pointer;
		width: 33.3333%;
		padding: 18px 18px;
		box-sizing: border-box;
        transition: ease 0.3s;
	}
	
	hr {
		margin: 1rem 0;
		border: 1px solid #c5c5c5;
	}
	
	.player,
	.admin {
		font-size: 1rem;
	}
	
	.player-item {
		width: 100%;
		padding: 20px;
		background: #fff;
		font-size: 0;
		border-radius: 10px;
		margin-bottom: 1rem;
	}

	.player-item:last-of-type {
		margin-bottom: 0;
	}

	.player-avatar {
		width: 15%;
		display: inline-block;
		vertical-align: top;
		box-shadow: 0px 0px 5px 1px #c5c5c5;
		padding: 5px;
	}

	.player-avatar img {
		width: 100%;
	}

	.player-info {
		vertical-align: top;
		width: 85%;
		font-size: 1rem;
		display: inline-block;
		padding-left: 1rem;
	}

	.player-info p {
		margin: 5px 0;
	}

	.player-info p:last-of-type {
		margin-bottom: 0;
	}

	.player-info p span {
		padding: 3px 6px;
		font-weight: 700;
		margin-right: 9px;
	}

	span.gold {
		background: #f00;
		color: #ffee58;
	}

	span.iron {
		background: #d3d7d4;
		color: #000;
	}

	span.sliver {
		background: #000;
		color: #fff;
	}

	.player-info p span:last-of-type {
		margin-right: 0;
	}
	
	.player-info .note {
		text-indent: 2rem;
	}

	.tag-info {
		padding: 20px;
		background: #fff;
		border-radius: 10px;
	}

	.tag-title {
		background: #c5c5c5;
		width: 100%;
		font-size: 0;
	}

	.tag-title span {
		display: inline-block;
		font-size: 1rem;
		text-align: center;
		font-weight: 700;
		padding: 10px 0;
	}
	
	.w-10 {
		width: 10%
	}

	.w-20 {
		width: 20%
	}

	.w-60 {
		width: 60%
	}

	.tag-list {
		width: 100%;
	}

	.tag-item {
		border-left: 1px solid #c5c5c5;
		border-bottom: 1px solid #c5c5c5;
	}

	.tag-item div {
		display: inline-block;
		font-size: 1rem;
		padding: 10px 0;
		text-align: center;
		border-right: 1px solid #c5c5c5;
	}

	.tag-item span {
		padding: 3px 6px;
	}
	
	@media (max-width: 1023px) {
		.player-item {
			width: 100%;
			display: block;
		}
	}
	
</style>
