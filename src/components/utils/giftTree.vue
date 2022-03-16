<template>
    <div id="gift-tree" ref="giftTree">
        <div class="tree-content">
            <h2>{{spiritInfo.name}}</h2>
            <div class="tree-row" v-for="(row, index) in spiritTreeData" :key="index" v-if="spiritTreeData.length">
                <div class="tree-node left" v-if="row.left">
                    <img :src="'static/imgs/sky/'+row.left.type+'/'+row.left.id+'.png'">
                    <div class="exp-lv" v-if="row.left.expLv">Lv.{{row.left.expLv}}</div>
                    <div class="node-price" v-if="row.left.price">
                        <img :src="currencyData[row.left.currency-1].icon">
                        <div class="price">{{row.left.price}}</div>
                    </div>
                    <div class="line left" v-if="row.left.line.left"></div>
                    <div class="line middle" v-if="row.left.line.middle"></div>
                    <div class="line right" v-if="row.left.line.right"></div>
                </div>
                <div class="tree-node middle" v-if="row.middle">
                    <img :src="'static/imgs/sky/'+row.middle.type+'/'+row.middle.id+'.png'">
                    <div class="exp-lv" v-if="row.middle.expLv">Lv.{{row.middle.expLv}}</div>
                    <div class="node-price" v-if="row.middle.price">
                        <img :src="currencyData[row.middle.currency-1].icon">
                        <div class="price">{{row.middle.price}}</div>
                    </div>
                    <div class="line left" v-if="row.middle.line.left"></div>
                    <div class="line middle" v-if="row.middle.line.middle"></div>
                    <div class="line right" v-if="row.middle.line.right"></div>
                </div>
                <div class="tree-node right" v-if="row.right">
                    <img :src="'static/imgs/sky/'+row.right.type+'/'+row.right.id+'.png'">
                    <div class="exp-lv" v-if="row.right.expLv">Lv.{{row.right.expLv}}</div>
                    <div class="node-price" v-if="row.right.price">
                        <img :src="currencyData[row.right.currency-1].icon">
                        <div class="price">{{row.right.price}}</div>
                    </div>
                    <div class="line left" v-if="row.right.line.left"></div>
                    <div class="line middle" v-if="row.right.line.middle"></div>
                    <div class="line right" v-if="row.right.line.right"></div>
                </div>
            </div>
        </div>
        <div class="tree-empty" v-if="!spiritTreeData.length">无兑换树数据</div>
    </div>
</template>

<script>
    export default {
        name: "gift-tree",
        props: {
            season: {
                type: Number
            },
            map: {
                type: Number
            },
            sortIndex: {
                type: Number
            }
        },
        data() {
            return {
                spiritInfo: [],
                spiritTreeData: [],
                currencyData: [],
                itemTypeData: []
            }
        },
        mounted() {
            this.requestJson()
        },
        methods: {
            requestJson: function() {
                this.$axios.get('static/data/sky.json').then(res => {
                    if(res.status == 200) {
                        if(this.$props.map) {
                            this.showSkySpirit(res)
                        }
                        if(this.$props.season) {
                            this.showTravelingSpirit(res)
                        }
                        this.currencyData = res.data.sky.currency
                        this.itemTypeData = res.data.sky.itemType
                    }
                })
            },
            showSkySpirit: function(res) {
                res.data.sky.skySpirit[this.$props.map-1].forEach(element => {
                    if(element.id == this.$props.sortIndex) {
                        this.spiritInfo = element
                        this.spiritTreeData = element.giftTree.reverse()
                    }
                });
            },
            showTravelingSpirit: function(res) {
                res.data.sky.seasonSpirit[this.$props.season-1].forEach(element => {
                    if(element.id == this.$props.sortIndex) {
                        this.spiritInfo = element
                        this.spiritTreeData = element.giftTree.reverse()
                    }
                });
            }
        },
        computed: {
            seasonVal() {
                return this.$props.season
            },
            sortIndexVal() {
                return this.$props.sortIndex
            }
        },
        watch: {
            seasonVal() {
                this.requestJson()
            },
            sortIndexVal() {
                this.requestJson()
            }
        }
    }
</script>

<style scoped>
    #gift-tree {
        position: relative;
        background: #fff;
        box-shadow: 0 0 4px 1px #c5c5c5;
    }

    #gift-tree * {
        box-sizing: border-box;
    }

    .tree-content {
        width: 100%;
        position: relative;
        padding: 1rem 2.5rem;
    }

    .tree-content h2 {
        text-align: center;
        margin-bottom: -0.8rem;
    }

    .tree-row {
        position: relative;
        display: flex;
        height: 130px;
    }

    .tree-node {
        width: 60px;
        height: 60px;
        position: relative;
    }

    .line {
        position: absolute;
        width: 2px;
        height: 100%;
        top: -100%;
        transform-origin: bottom;
        background: #999999;
    }

    .line.left {
        left: 0%;
        transform: rotate(-45deg);
    }

    .line.middle {
        left: calc(50% - 1px);
        transform: rotate(0deg);
    }

    .line.right {
        right: 0%;
        transform: rotate(45deg);
    }

    .exp-lv {
        position: absolute;
        right: -30%;
        font-size: 0.8rem;
        top: 0;
    }

    .tree-node > img {
        max-height: 100%;
        max-width: 100%;
    }

    .node-price {
        position: absolute;
        width: 50%;
        height: 50%;
        background: transparent;
        right: -40%;
        bottom: -30%;
    }

    .node-price img {
        max-height: 100%;
        max-width: 100%;
    }

    .price {
        position: absolute;
        right: -20%;
        bottom: -30%;
    }

    .tree-node.left {
        position: absolute;
        left: 0;
        top: 0;
    }

    .tree-node.middle {
        position: absolute;
        left: calc(50% - 30px);
        bottom: 0;
    }

    .tree-node.right {
        position: absolute;
        right: 0;
        top: 0;
    }
    
    .tree-empty {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
    }
</style>