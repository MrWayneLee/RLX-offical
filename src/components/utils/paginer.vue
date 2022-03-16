<template>
    <div id="paginer">
        <div class="traveling-spirit-list">
            <table cellspacing="0" cell>
                <tr @click="reverse()">
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <!-- <th v-for="(title, index) in dataTitle" :key="index">{{title}}</th> -->
                </tr>
                <tr class="item" v-for="(dataRow, index) in this.dataList" :key="index">
                    <td v-for="(dataItem, index) in dataRow" :key="index">{{dataItem}}</td>
                </tr>
            </table>
            <div class="pagination">
                <div class="page-prev"></div>
                <div class="page-list">
                    
                </div>
                <div class="page-next"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "paginer",
        props: {
            sourceData: Array,
            perPage: Number
        },
        data() {
            return {
                dataList: [],
                curPage: 0
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData: function() {
                var arr = new Array
                var formatArray = new Array
                this.$axios.get('static/data/sky.json').then(res => {
                    if(res.status == 200) {
                        arr = res.data.sky.outServerTravelingSpirit.reverse()
                    }
                    for(var index in arr) {
                        if(!formatArray[Math.floor(index / this.$props.perPage)]) {
                            formatArray[Math.floor(index / this.$props.perPage)] = []
                        }
                        formatArray[Math.floor(index / this.$props.perPage)].push(arr[index])
                    }
                })
                this.dataList = formatArray
                this.$nextTick()
            }
        }
    }
</script>

<style>
    
</style>