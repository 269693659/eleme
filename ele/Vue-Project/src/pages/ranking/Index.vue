<template>
    <div class="ranking">
        <div class="tabsList">
            <ul>
                <li v-for="(item,index) in rankingPageData.tabs" :key="index" :class="{active:type==item.name}" @click="changeTabsList(item.name)">{{item.name}}</li>
            </ul>
        </div>
        <div class="content">
            <div class="saleList" v-for="(item,index) in rankingPageData.query_list" :key="index">
                <div class="saleList-header" @click="goShopPage()">
                    <div class="image">
                        <img :src="item.restaurant.image_path" alt="">
                    </div>
                    <div class="text">
                        <h4>
                            <span class="title">{{item.restaurant.name}}</span>
                            <span class="info">
                                <span class="grade">评分{{item.restaurant.rating}}</span>
                                <span class="year">月售{{item.restaurant.recent_order_num}}</span>
                            </span>
                        </h4>
                        <ul>
                            <li v-for="(value,index) in item.restaurant.recommend_reasons" :key="index">{{value.name}}</li>
                        </ul>
                    </div>
                </div>
                <ul class="itemList">
                    <li v-for="(foodsItem,index) in item.foods" :key="index" @click="goShopPage()">
                        <div class="bigImage">
                            <img :src="foodsItem.image_path" alt="">
                        </div>
                        <div class="main-content">
                            <h4>{{foodsItem.name}}</h4>
                            <div class="description">{{foodsItem.description}}</div>
                            <div class="popularity" v-show="foodsItem.reason">{{foodsItem.reason}}</div>
                            <div class="price">
                                <span class="real"><i>¥</i>{{foodsItem.price}}</span>
                                <span class="del" v-show="foodsItem.original_price">¥{{foodsItem.original_price}}</span>
                                <span class="activity" v-show="foodsItem.discount_activity">{{foodsItem.discount_activity}}</span>
                                <span class="add"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==" alt=""></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="last">没有更多了哦~</div>
        </div>
    </div>
</template>

<script>
import {getRankingPageData} from '@/services/rankingService.js'
export default {

    data(){
        return{
            rankingPageData:[],
            type:'全部类别'
        }
    },
    methods:{
        changeTabsList(name){
            this.type=name;
        },
        goShopPage(){
            this.$router.push({
                path:'/shop'
            })
        }
    },
    created(){
        getRankingPageData().then(result=>{
            this.rankingPageData=result;
        })
    }
}
</script>

<style scoped>
.ranking{
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: 24;
}
.ranking .tabsList{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    background: #fff;
}
.ranking .tabsList ul{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 12px;
}
.ranking .tabsList li{
    display: inline-block;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    overflow: hidden;
    margin-right: 20px;
    color: #999;
}
.ranking .tabsList li.active{
    color: #000;
    font-weight: 900;
    border-bottom: 2px solid #333;
}
.ranking .content{
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    background: #fff;
}
.ranking .content .saleList{
    padding: 0 15px 15px;
}
.saleList-header{
    padding: 15px 0;
    display: flex;
    vertical-align: middle;
}
.saleList .saleList-header .image{
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
}
.saleList .saleList-header .image img{
    width: 100%;
}
.saleList .saleList-header .text{
    display: inline-block;
    width: 84%;
    line-height: 20px;
    flex: 1;
    vertical-align: middle;
}
.saleList .saleList-header .text h4{
    width: 100%;
    font-weight: 400;
}
.saleList .saleList-header .text .title{
    font-size: 16px;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 200px;
}
.saleList .saleList-header .text .info{
    font-size: 12px;
    color: #aaa;
    float: right;
}
.saleList .saleList-header .text .info .grade{
    padding-right: 10px;
}
.saleList .saleList-header .text ul li{
    display: inline-block;
    color: #a45b1c;
    border: 1px solid #d1ab8d;
    font-size: 12px; 
    font-weight: 400;
    margin-right: 5px;
    padding: 0 4px;
}
.saleList .itemList li{
    width: 100%;
    padding: 10px 0;
    display: flex;
}
.saleList .itemList li .bigImage{
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-right: 15px;
}
.saleList .itemList li .bigImage img{
    width:100%;
}
.saleList .itemList li .main-content{
    display: inline-block;
    width: 64%;
    line-height: 20px;
    flex: 1;
    position: relative;
}
.saleList .itemList li .main-content h4{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
    font-size: 16px;
    font-weight: 400;
}
.saleList .itemList li .main-content .description{
    overflow: hidden;
    height: 32px;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    margin-top: 4px;
}
.saleList .itemList li .main-content .popularity{
    font-size: 12px;
    padding: 0 4px;
    color: #fff;
    background-image: linear-gradient(-135deg,#ff7000,#ff2f00);
    border-radius: 2px;
    display: inline-block;
    margin-top: 4px;
}
.saleList .itemList li .main-content .price{
    font-weight: 700;
    height: 20px;
    line-height: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.saleList .itemList li .main-content .price .real{
    color: #b91f20;
    margin-right: 10px;
    font-size: 18px;
}
.saleList .itemList li .main-content .price .real i{
    font-size: 12px;
    margin-right: 5px;
}
.saleList .itemList li .main-content .price .del{
    font-size: 12px;
    color: #666;
    font-weight: 300;
    text-decoration: line-through;
}
.saleList .itemList li .main-content .price .activity{
    height: 16px;
    line-height: 16px;
    border: 1px solid #999;
    font-size: 12px;
    font-weight: 100;
    color: #666;
    padding: 0 4px;
}
.saleList .itemList li .main-content .price span{
    display: inline-block;
}
.saleList .itemList li .main-content .price .add{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
}
.saleList .itemList li .main-content .price .add img{
    width: 100%;
}
.ranking .content .last{
    width: 100%;
    padding: 20px 0;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #eee;
}
</style>
