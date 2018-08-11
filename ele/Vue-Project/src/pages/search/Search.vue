<template>
     <div class="search">
         <div class="search-header">
            <button class="backBtn" @click="goHomePage()">返回</button>
            <input type="text" placeholder="输入商家 商家名称" v-model="word" @click="searchAction(word)">
            <button class="searchBtn" @click="search(word)">搜索</button>
        </div>
        <div class="content">
            <div class="searchList" v-show="showList">
                <ul>
                    <li v-for="(item,index) in showListData.restaurants" :key="index">
                        <div class="searchImage">
                            <img :src="item.image_path" alt="">
                        </div>
                        <div class="searchShop">
                            <p>
                                <span>{{item.name}}</span>
                                <span class="tags-reduce" v-show="item.tags.length==1||2">减</span>
                                <span class="tags-bird" v-show="item.tags.length==2">蜂鸟</span>
                            </p>
                            <p class="time" v-show="item.next_business_time">接受预定，{{item.next_business_time}}开始配送</p>
                        </div>
                        <span class="rating">评价{{item.rating}}</span>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in showListData.words" :key="index">
                        <div class="name">{{item}}</div>
                    </li>
                </ul>
            </div>
            <div v-show="!showList">
                <div class="history" v-if="isShow">
                    <h4>历史搜索</h4>
                    <button class="delBtn" @click="delHistory()">删除</button>
                    <ul class="historyList">
                        <li v-for="(item,index) in historyListData" :key="index">{{item}}</li>
                    </ul>
                </div>
                 <div class="hot">
                    <h4>热门搜索</h4>
                    <ul class="hotList">
                       <li v-for="(item,index) in hotSearchData" :key="index" @click="wordSearch(item.word)">{{item.word}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getHotSearchData,getSearchTypeaheadData} from '@/services/searchService.js'
export default {
    data(){
        return{
            word:'',
            hotSearchData:[],
            historyListData:['奶茶','水果'],
            isShow:true,
            showList:false,
            showListData:[],
        }
    },
    methods:{
        //跳转到首页
        goHomePage(){
            this.$router.push({
                path:'/home'
            })
        },
        //搜索事件
        wordSearch(word){
            this.word=word;
            this.historyListData.push(word);
        },
        search(word){
            this.historyListData.push(word);
        },
        delHistory(){
            this.historyListData=[];
            this.isShow=false;
        },
        searchAction(word){
            if(word){
                getSearchTypeaheadData(word).then(result=>{
                    this.showListData=result;
                    this.showList=true;
                })
            }
        }
    },
    mounted(){
        getHotSearchData().then(result=>{
            this.hotSearchData=result;
        })
    }
}
</script>

<style scoped>
 .search{
     width: 100%;
     height: 100%;
     background: #fff;
     position: absolute;
     top: 0;
     left: 0;
     z-index: 20;
 }
 .search .search-header{
     width: 100%;
     height: 44px;
     position: absolute;
     top: 0;
     left: 0;
     padding: 8px 0;
 }
 .search .search-header button{
     height: 44px;
     line-height: 44px;
     border: 0;
     background: #fff;
     text-align: center;
 }
 .search .search-header input{
     width: 68%;
     height: 24px;
     background: #f8f8f8;
     padding: 5px 10px;
     border: 0;
     color: #666;
 }
 .search .search-header .searchBtn{
     width: 50px;
     font-size: 16px;
     color: #000;
     font-weight: bold;
 }
 .search .content{
     position: absolute;
     top: 50px;
     left: 0;
     width: 100%;
     height: 100%;
 }
 .search .content .searchList{
     padding: 15px;
 }
 .search .content .searchList li{
     display: flex;
     border-bottom: 1px solid #e3e3e3;
     padding: 10px 0;
 }
 .search .content .searchList li .searchImage{
     width: 30px;
     height: 30px;
     display: inline-block;
 }
 .search .content .searchList li .searchImage img{
     width: 100%;
 }
 .search .content .searchList li .searchShop{
     display: inline-block;
     margin-left: 20px;
 }
 .search .content .searchList li .searchShop p span{
     display: inline-block;
     color: #333;
 }
 .search .content .searchList li .searchShop p .searchWord{
     color: #999;
 }
 .search .content .searchList li .searchShop p .tags-reduce{
     background-color: rgb(250, 112, 71);
     color: white;
     font-size: 12px;
     border-radius: 2px;
     padding: 1px 2px;
     text-align: center;
 }
 .search .content .searchList li .searchShop p .tags-bird{
     background-color: rgb(35, 149, 255);
     color: white;
     font-size: 12px;
     border-radius: 2px;
     padding: 1px 2px;
     text-align: center;
 }
 .search .content .searchList li .searchShop .time{
    color: #00e066;
    border: 1px solid #00e066;
    font-size: 12px;
    padding: 0 4px;
    border-radius: 10px;
    width: 140px;
    height: 14px;
    line-height: 14px;
    margin-top: 8px;
 }
 .search .content .searchList li .rating{
     display: inline-block;
     color: #999;
     font-size: 12px;
     position: absolute;
     right: 15px;
 }
 .search .content .searchList li .name{
     padding: 0 30px;
     color: #333;
 }
 .search .content .history{
    position: relative;
    padding-top: 10px;
 }
 .search .content .history .delBtn{
     display: inline-block;
     border: 0;
     font-size: 12px;
     margin-left: 70%;
     color: #666;
     position: absolute;
     right: 15px;
     top: 12px;
 }
 .search .content h4{
     color: #666;
     font-weight: 700;
     font-size: 16px;
     padding-left: 15px;
 }
 .search .content .hotList,.search .content .historyList{
     padding: 15px;
 }
 .search .content .hotList li,.search .content .historyList li{
     padding: 8px 12px;
     background: #f7f7f7;
     color: #666;
     display: inline-block;
     margin-right: 12px;
     margin-bottom: 12px;
     font-size: 14px;
     border-radius: 5px;
 }

</style>
