<template>
     <div class="search">
         <div class="header">
            <button class="backBtn" @click="goHomePage()">返回</button>
            <input type="text" placeholder="输入商家 商家名称" v-model="word">
            <button class="searchBtn" @click="search(word)">搜索</button>
        </div>
        <div class="content">
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
</template>

<script>
import {getHotSearchData} from '@/services/searchService.js'
export default {
    data(){
        return{
            word:'',
            hotSearchData:[],
            historyListData:['奶茶','水果'],
            isShow:true,
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
 }
 .header{
     width: 100%;
     height: 40px;
 }
 .header button{
     height: 40px;
     line-height: 40px;
     border: 0;
     background: #fff;
     text-align: center;
 }
 .header input{
     width: 68%;
     height: 20px;
     background: #f8f8f8;
     padding: 5px 10px;
     border: 0;
     color: #666;
 }
 .header .searchBtn{
     width: 50px;
     font-size: 16px;
     color: #000;
     font-weight: bold;
 }
 .content{
     padding: 10px;
     position: relative;
 }
 .content .history .delBtn{
     display: inline-block;
     border: 0;
     font-size: 12px;
     margin-left: 72%;
     color: #666;
     position: absolute;
     right: 10px;
     top: 10px;
 }
 .content h4{
     color: #666;
     font-weight: 700;
     font-size: 16px;
 }
 .content .hotList,.content .historyList{
     margin: 20px 0 10px;
 }
 .content ul li{
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
