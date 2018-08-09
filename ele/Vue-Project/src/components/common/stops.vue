<template>
    <div class="stops">
        <div class="pic">
            <img :src="data.image_path">
        </div>
        <div class="text">
            <h3 class="title">
                <i v-if="data.is_premium">品牌</i>
                <span>{{data.name}}</span>
                <span class="right" v-for="(item,i) in data.supports" :key="i" >{{item.icon_name}}</span>

            </h3>
            <div class="grade">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=">
                <span>{{data.rating}}</span>
                <span>月售{{data.recent_order_num}}单</span>
                <span class="right">
                   {{delivery}}
                </span>
            </div>
            <div class="money">
                <span>￥{{data.float_minimum_order_amount}}起送</span>
                <span>配送费￥{{data.float_delivery_fee}}</span>
                <span class="right">{{data.order_lead_time}}分钟</span>
                <span class="right">{{data.distance}}m</span>
                
            </div>

            <div class="type">
                <span class="bor" v-for="(item,i) in data.support_tags" :key="i">{{item.text}}</span>
                <!-- <span class="bor">品质联盟</span> -->
                <img v-if="data.recommend.reason" src="//fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/">
                <span class="moods">{{data.recommend.reason}}</span>
            </div>

            <div class="active">
                <ul>
                    <li v-for="(item,i) in showActive" :key="i" class="activData">
                        <span class=icon_name :style="{backgroundColor:'#'+item.icon_color}">{{item.icon_name}}</span>
                        <span class="description">{{item.description}}</span>
                    </li>
                </ul>
                
                <div class="activenum" @click="animat()">
                    <span class="right">{{activeNum}}个活动</span>
                    
                    <img ref="in" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
                </div>
                
                 <ul v-if="isShow">
                    <li v-for="(item,i) in hidActive" :key="i" class="activData">
                        <span class=icon_name :style="{backgroundColor:'#'+item.icon_color}">{{item.icon_name}}</span>
                        <span class="description">{{item.description}}</span>
                    </li>
                </ul>
                

            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:Object
    },
    data(){
        return{
            showActive:[],
            hidActive:[],
            activeNum:'',
            isShow:false,
            delivery:''
        }
    },
    created(){
        if(this.data.delivery_mode){
            this.delivery = '蜂鸟专送'
        }
        this.activeNum = this.data.activities.length;
        for(var i=0;i<this.activeNum;i++){
          
            if(i<2){
                this.showActive.push(this.data.activities[i])
            }else{
                this.hidActive.push(this.data.activities[i])
            }
        }
        

    },
    mounted(){
        
        // console.log(this.bgcolor)
        // console.log(this.data.activities[0].description)
    },
    methods:{
        animat(){
            
            if(!this.isShow){
                
                this.isShow  = true
                this.$refs.in.className = 'up';
            }else{
                this.isShow  = false
                this.$refs.in.className = '';
            }
        }
    }
}
</script>

<style scoped>
    .activenum img{
        display: inline-block;
        transition: transform 200ms;
    }
    .activenum img.up {
        transform: rotate(180deg);
        
    }
    .stops{
        background:#fff;
        display: flex;
        padding: 15px 10px;
        border-bottom: 1px solid rgb(238, 238, 238);
        background: #fff;
    }
    .pic{
        width: 65px;
        height: 65px;
        /* background: red; */
        border: 1px solid rgb(238, 238, 238)
    }
    .pic img{
        width: 100%
    }
    .text{
        flex:1;
        margin-left: 10px;
    }
    .title i{
        font-style:normal;
        font-size: 10px;
        background: #ffe339;
        color: #6f3f15;
        padding: 2px
    }
    .title .right{
        float: right;
        color: #999;
        font-size: 12px;
        font-weight: normal;
        margin-left: 2px;
        border: 1px solid rgb(238, 238, 238)
       
    }
    
    .money .right{
        float: right;
        color: #999;
        font-size: 12px;
        font-weight: normal;
        margin-left: 4px;

    }
    .grade{
        margin: 6px 0;
    }
    .grade .right{
        background: #0af;
        color: #fff;
        font-size: 12px;
        float: right;
    }
    .grade img{
        display: inline-block;
    }
    .grade span{
        font-size: 12px;
        color: #666
    }
    .money{
        font-size: 12px;
        color: #666
    }
    .type{
        font-size: 12px;
        color: #666;
        margin: 14px 0;
    }
    .type img{
        display: inline-block;
        width: 10px;
        margin-left:4px 
        
    }
    .type .bor{
        border: 1px solid rgb(238, 238, 238);
        padding:0 1px;
        margin-right:4px;
    }
    .type .moods{
        color: #e8470b
    }
    .active{
        font-size: 12px;
        line-height: 20px;
        position: relative;
    }
    .active .activData .icon_name{
        font-size: 12px;
        color:#fff;
        border-radius: 3px;
        padding: 0 1px;

    }
    
    .active .activData .description{
        font-size: 12px;
        color: #666
    }
    .active img{
        display: inline-block;
        width: 7px;
        position: relative;
        bottom: 5px
    }
    .active .activenum{
        color: #999;
        position: absolute;
        right: 10px;
        top: 0;
    }
</style>
