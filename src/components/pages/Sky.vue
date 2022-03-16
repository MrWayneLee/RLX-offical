<template>
    <div id="skypage">
        <section>
            <div class="title">
				<h1>光·遇 / Sky : Children of Light[该页面未适配移动端]</h1>
			</div>
        </section>
		<section>
			<div class="sky-content">
				<input type='radio' id="spirit" name="sky">
				<label for="spirit">先祖图鉴</label>
				<input type='radio' id="season" name="sky">
				<label for="season">季节图鉴[复刻]</label>
				<input type='radio' id="traveling-spirit" name="sky" checked>
				<label for="traveling-spirit">复刻表</label>
				<input type='radio' id="traveling-spirit-outserver" name="sky">
				<label for="traveling-spirit-outserver">复刻表[国际服]</label>
				<hr>
				<div class="sky-tab">
					<div class="map-title">
                        <div v-for="(map, index) of mapList" :key="index" @click="mapCheck(index)" :class="mapTab==index?'show':''">
							{{map.name}}
						</div>
                    </div>
                    <hr>
					<div class="map-content">
						<div v-for="(map, index) of mapList" :key="index" v-if="mapTab==index">
							<div v-for="(spirit, index) of spiritList" :key="index">
								<gift-tree class="gift-tree" :map="spirit.map" :sortIndex="spirit.id"></gift-tree>
							</div>
						</div>
					</div>
				</div>
				<div class="sky-tab">
					<div class="season-title">
						<div v-for="(season, index) of seasonList" :key="index" @click="seasonCheck(index)" :class="seasonTab==index?'show':''">
							{{season.name}}
						</div>
					</div>
					<hr>
					<div class="season-content">
						<div v-for="(season, index) of seasonList" :key="index" v-if="seasonTab==index">
							<div v-for="(spirit, index) of seasonSpiritList[season.id-1]" :key="index">
								<gift-tree class="gift-tree" :season="spirit.season" :sortIndex="spirit.id"></gift-tree>
							</div>
						</div>
					</div>
				</div>
				<div class="sky-tab">
					<div class="traveling-spirit-content">
						<gift-tree class="gift-tree" :season="travelingSpirit.season" :sortIndex="travelingSpirit.id"></gift-tree>
						<div class="traveling-spirit-list">
							<div class="list-title">
								<div class="w-5" @click="reverseTravelingSpiritList()">#</div>
								<div class="w-20" @click="reverseTravelingSpiritList()">到达日期</div>
								<div class="w-35">先祖名称</div>
								<div class="w-20">所属季节</div>
								<div class="w-20">所在地点</div>
							</div>
							<div class="list-item">
								<div class="item" v-for="(spirit, index) in travelingSpiritList" :key="index" @click="showTravelingSpiritGiftTree(spirit)">
									<div class="w-5">{{spirit.index}}</div>
									<div class="w-20">{{spirit.arrivalDate || "..."}}</div>
									<div class="w-35">{{seasonSpiritList[spirit.season-1][spirit.id-1].name}}</div>
									<div class="w-20">{{seasonList[spirit.season-1].name}}</div>
									<div class="w-20">{{mapList[seasonSpiritList[spirit.season-1][spirit.id-1].map-1].name}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sky-tab">
					<div class="traveling-spirit-content">
						<gift-tree class="gift-tree" :season="outServerTravelingSpirit.season" :sortIndex="outServerTravelingSpirit.id"></gift-tree>
						<div class="traveling-spirit-list">
							<div class="list-title">
								<div class="w-5" @click="reverseOutServerTravelingSpiritList()">#</div>
								<div class="w-20" @click="reverseOutServerTravelingSpiritList()">到达日期</div>
								<div class="w-35">先祖名称</div>
								<div class="w-20">所属季节</div>
								<div class="w-20">所在地点</div>
							</div>
							<div class="list-item">
								<div class="item" v-for="(spirit, index) in outServerTravelingSpiritList" :key="index" @click="showOutServerTravelingSpiritGiftTree(spirit)">
									<div class="w-5">{{spirit.index}}</div>
									<div class="w-20">{{spirit.arrivalDate || "..."}}</div>
									<div class="w-35">{{seasonSpiritList[spirit.season-1][spirit.id-1].name}}</div>
									<div class="w-20">{{seasonList[spirit.season-1].name}}</div>
									<div class="w-20">{{mapList[seasonSpiritList[spirit.season-1][spirit.id-1].map-1].name}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
	import giftTree from "../utils/giftTree.vue"

    export default {
        data() {
            return {
                name: "sky",
				mapTab: 0,
				seasonTab: 0,
                mapList: [],
				seasonList: [],
				spiritList: [],
				seasonSpiritList: [],
				travelingSpiritList: [],
				outServerTravelingSpiritList: [],
				travelingSpirit: {
					season: 1,
					id: 1
				},
				outServerTravelingSpirit: {
					season: 1,
					id: 1
				}
            }
        },
		components: {
			giftTree
		},
        mounted() {
            this.$axios.get('static/data/sky.json').then(res => {
                if(res.status == 200) {
                    this.mapList = res.data.sky.map
                    this.seasonList = res.data.sky.season
					this.seasonSpiritList = res.data.sky.seasonSpirit
					this.travelingSpiritList = res.data.sky.travelingSpirit.reverse()
					this.outServerTravelingSpiritList = res.data.sky.outServerTravelingSpirit.reverse()
                }
            })
			this.mapCheck(0)
			this.seasonCheck(0)
        },
        methods: {
            mapCheck: function(index) {
                this.mapTab = index
				this.$axios.get('static/data/sky.json').then(res => {
					if(res.status == 200) {
						this.spiritList = res.data.sky.skySpirit[index]
					}
				})
            },
            seasonCheck: function(index) {
                this.seasonTab = index
            },
			reverseTravelingSpiritList: function() {
				this.travelingSpiritList = this.travelingSpiritList.reverse()
			},
			reverseOutServerTravelingSpiritList: function() {
				this.outServerTravelingSpiritList = this.outServerTravelingSpiritList.reverse()
			},
			showTravelingSpiritGiftTree: function(spirit) {
				this.travelingSpirit.season = spirit.season
				this.travelingSpirit.id = spirit.id
			},
			showOutServerTravelingSpiritGiftTree: function(spirit) {
				this.outServerTravelingSpirit.season = spirit.season
				this.outServerTravelingSpirit.id = spirit.id
			}
        }
    }
</script>

<style scoped>
	#skypage {
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

    .sky-content {
		font-size: 0;
		width: 100%;
		padding: 40px 10% 10% 10%;
	}
	
	.sky-content input,
	.sky-tab {
		display: none;
	}
	
	.sky-content input:nth-of-type(1):checked ~ .sky-tab:nth-of-type(1),
	.sky-content input:nth-of-type(2):checked ~ .sky-tab:nth-of-type(2), 
	.sky-content input:nth-of-type(3):checked ~ .sky-tab:nth-of-type(3),
	.sky-content input:nth-of-type(4):checked ~ .sky-tab:nth-of-type(4) {
		display: block;
	}
	
	.sky-content input:checked + label {
		background: #000;
		color: #fff;
	}
	
	.sky-content label {
		font-size: 1rem;
		display: inline-block;
		text-align: center;
		user-select: none;
		cursor: pointer;
		width: 25%;
		padding: 18px 18px;
		box-sizing: border-box;
        transition: ease 0.3s;
	}
	
	hr {
		margin: 1rem 0;
		border: 1px solid #c5c5c5;
	}
	
    .sky-tab {
        font-size: 1rem;
        padding: 1rem;
        background: #fff;
        border-radius: 10px;
    }

    .map-title {
        display: flex;
    }

    .map-title > div {
        width: 100%;
        text-align: center;
        padding: 10px;
        user-select: none;
        cursor: pointer;
		background: #fff;
		color: #000;
        transition: ease 0.3s;
    }

	.map-title div.show {
		background: #000;
		color: #fff;
	}

	.map-content > div,
	.season-content > div {
		display: flex;
		flex-wrap: wrap;
		gap: 20px
	}

	.map-content > div > div, 
	.season-content > div > div {
		width: calc((100% - 40px) / 3);
		/* margin-bottom: 1rem; */
	}

	.map-content > div > div:last-of-type {
		margin-bottom: 0rem;
	}

	.gift-tree {
		width: 100%;
	}

	.season-title {
		display: flex;
		flex-wrap: wrap;
	}

	.season-title div {
		width: 16.666%;
		user-select: none;
		cursor: pointer;
		text-align: center;
		padding: 10px;
		color: #000;
		background: #fff;
		transition: ease 0.3s;
	}

	.season-title div.show {
		color: #fff;
		background: #000;
	}

	.traveling-spirit-content {
		display: flex;
		align-items: flex-start;
	}

	.traveling-spirit-list {
		width: 200%;
		margin-left: 20px;
	}

	.list-title {
		width: 100%;
		user-select: none;
		background: #c5c5c5;
		font-size: 0;
	}

	.list-title * {
		display: inline-block;
		font-size: 1rem;
		text-align: center;
		padding: 10px 0;
		font-weight: 700;
	}

	.w-5 {
		width: 5%;
	}

	.w-35 {
		width: 35%;
	}

	.w-20 {
		width: 20%;
	}

	.list-item {
		width: 100%;
		height: 504px;
		overflow-y: scroll;
	}

	.list-item::-webkit-scrollbar {
		display: none;
	}

	.list-item .item {
		width: 100%;
		font-size: 0;
		border-bottom: 1px solid #c5c5c5;
		border-left: 1px solid #c5c5c5;
		cursor: pointer;
	}

	.list-item .item:hover {
		background: #f5f5f5;
	}

	.list-item .item * {
		display: inline-block;
		font-size: 1rem;
		text-align: center;
		padding: 10px 0;
		border-right: 1px solid #c5c5c5;
	}

</style>
