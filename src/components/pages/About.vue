<template>
	<div id="aboutpage">
		<section>
			<div class="title">
				<h1>关于我们 / About</h1>
			</div>
		</section>
		<section class="description">
			<div class="description-part">
				<div class="description-title">
					<h1>服务器基本信息</h1>
				</div>
				<div class="description-content">
					<p>RLX的名称来自于relax单词的首字母中间字母和尾字母，以养老为宗旨打造的一个服务器。</p>
					<p>RLX服务器使用了官方BDS + BDL mods。拥有白名单机制，添加了一些方便于生存的mod。拥有领地系统保证物品和建筑的安全，传送系统让玩家之间的来往更加方便。服务器开启了死亡不掉落规则，关闭了火焰蔓延。</p>
				</div>
			</div>
			<div class="description-part">
				<div class="description-title">
					<h1>服主的话</h1>
				</div>
				<div class="description-content">
					<p>欢迎大家来到RLX Minecraft BE服务器游玩，希望你能在这里找到属于自己的那份快乐。</p>
					<p>服务器为纯公益服务器，且不接受捐赠，服务器不会接受任何玩家的资金的帮助。</p>
					<h2>服务器历史</h2>
					<p>2019年11月：地图由其他团队运营</p>
					<p>2019年12月至今：地图由我们自己运营</p>
					<p>未来：这个地图会一直运营到关服</p>
					<h2>服主的开服目的</h2>
					<p>开这个服的目的，是服主想提供一个较稳定的多人联机的游戏环境。服主自己也是一个喜爱Minecraft的玩家，曾今也去过一些BE服务器玩，但是大多服务器一个周目的运营时间大概在2-4个月左右，到了时间又要重头再来，服主不喜欢这样的感觉。为了满足自己只玩一个周目的需求，才想着自己开服。</p>
					<p>（对的，服主的开服目的也是为了满足自己玩的需求。）</p>
					<h2>优势和短板</h2>
					<p>先说说优势，服主自己虽然不是专业运维，但是基本的技术问题大部分都能解决，在技术上应该是没有短板的，甚至相对于其他很多小服务器来说，技术上应该是有不小的优势的；</p>
					<p>服务器没有资金上的压力，应该也算是个小优势吧，不需要为了资金问题，做一些不该做的妥协。</p>
					<p>再说说短板，服主欠缺运营经验，Minecraft的游戏特点决定了，维护一个健康公平的环境，是非常重要的，不然一个创造性的游戏，就变成了破坏性的游戏，维护这样的一个良好的环境，需要一定的运营能力，在这点上，服主还在学习，让服务器的环境变得更好；</p>
					<p>服务器大部分的运行维护，目前大部分有且只能有服主完成，这样本身就是一个不稳定因素，如果服主在某个时间段没有足够的精力来维护服务器，那么服务器的运行质量会有急速下降的风险。</p>
					<h2>服主对服务器的定位</h2>
					<p>服主对服务器的定位，一言概之就是小众服务器。RLX没有成为大服的基因，以后也一直会是一个小服务器。服主的精力不足和运营能力的欠缺，会是制约服务器成长的主要因素。服主为了能够hold住服务器，会刻意控制服务器的人数，以防出现人数过多，超出服主能力范围，从而导致服务器最后崩盘。微软BDS服务器端的性能约束导致，在线人数超过5个人，就会出现延迟，服务器也无法承载过多的玩家（听说Windows端的性能要好不少，但是我这里只能用Linux）。</p>
					<p>对的，RLX只会是一个小众服务器。</p>
					<h2>服务器会开多久</h2>
					<p>如果我说会一直开着，你们不信，服主自己也不信。不过开始开服的时候，服主给了自己一个最低的时间期限，3年，服务器开始于2019年12月，那么3年就是2022年12月。如果没有其他不可抗力（比如服主出现什么意外），服务器至少会运营到2022年12月。至于之后嘛，也许还会有下一个3年？</p>
					<h2>关于玩家数量</h2>
					<p>RLX和其他服务器有些不太一样，服务器不会注重在线人数，或者群里活跃的人数，而会注重服务器的氛围。即使服务器的在线人数长期为0，但是氛围很好，服主也会觉得非常好。（说句自私的话，服务器天天爆满，对服主来说，没有任何好处，反而要耗费服主更多的精力来维护。）</p>
					<p>如果你喜欢的是在线人数多，比较热闹的服务器，RLX可能不太适合你。RLX只是一个纯粹的养老服。</p>
					<h2>写在最后</h2>
					<p>开服本身是一个需要耗费大量精力和时间的事情，肝Minecraft也需要投入巨大的时间和精力，请大家相互尊重，共同维护一个健康和谐的游戏环境。这个地图算是我们所有玩家共同完成的一个作品，希望在不久的将来，这个地图，能成为大家心之所向的世界。</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "pluginpage",
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	#aboutpage {
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
	
	section.description {
		padding: 0 10% 10% 10%	
	}
	
	.description-part h1 {
		margin: 20px 0;
	}
	
	.description-part h2 {
		margin: 16px 0;
		text-indent: 1rem;
		font-size: 1.1rem;
	}
	
	.description-content {
		text-indent: 2rem;
		line-height: 1.5rem;
		text-align: justify;
	}
</style>
