<template>
    <div class="foodList">
        <ul class="listItem">
            <li v-for="(item,index) in foodListData" :key="index" :class="{active:type==item.name}" @click="showItem(item.name)">{{item.name}}</li>
        </ul>
        <div class="right" @click="showCategory()">></div>
        <div class="category" v-show="isShow">
            <div class="header">
                <h3>请选择分类</h3>
                <button @click="cancelCategory()">X</button>
            </div>
            <div class="category-content">
                <ul class="categoryName">
                <li v-for="(item,index) in categoryData" :key="index" :class="{active:categoryType==item.name}" @click="showSubCategories(index,item.name)">
                    <span class="name">{{item.name}}</span>
                    <span class="count">{{item.count}}</span>
                </li>
            </ul>
            <ul class="categoryItem">
                <li v-for="(item,index) in subCategoriesData" :key="index">
                    <img :src="item.image_url">
                    <span class="name">{{item.name}}</span>
                    <span class="count">{{item.count}}</span>
                </li>
            </ul>
            </div>
        </div>
        <div class="shade" @click="cancelShade()" v-show="shade"></div>
    </div>
</template>

<script>
import {getFoodPageFoodListData,getFoodPageCategoryData} from '@/services/foodService.js'
export default {
    data(){
        return{
            foodListData:[],
            categoryData:[],
            subCategoriesData:[],
            isShow:false,
            shade:false,
            type:'全部',
            categoryType:'美食'
        }
    },
    methods:{
        showItem(name){
            this.type=name;
        },
        showCategory(){
            this.shade=true;
            this.isShow=true;
        },
        cancelShade(){
            this.shade=false;
        },
        cancelCategory(){
            this.isShow=false;
            this.cancelShade();
        },
        showSubCategories(index,name){
            this.categoryType=name;
            this.subCategoriesData=[];
            this.subCategoriesData=this.categoryData[index].sub_categories;
        }
    },
    mounted(){
        getFoodPageFoodListData().then(result=>{
            this.foodListData=result;
        }),
        getFoodPageCategoryData().then(result=>{
            console.log(result)
            this.categoryData=result;
            this.subCategoriesData=this.categoryData[0].sub_categories;
        })
    }
}
</script>

<style scoped>
.foodList{
    width: 100%;
    color: white;
}
.foodList .listItem{
    background: #0085ff;
    padding: 0 16px;
    overflow-x: scroll;
    white-space: nowrap;
    height: 40px;
}
.foodList .listItem li{
    display: inline-block;
    text-align: center;
    margin-right: 30px;
    line-height: 40px;
    opacity: 0.7;
    height: 32px;
}
.foodList .listItem li.active{
    opacity: 1;
    border-bottom: 2px solid #fff;
}
.foodList .right{
    position: absolute;
    top: 44px;
    right: 0;
    width: 40px;
    background: #0085ff;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    transform: rotate(90deg);
}
.category{
    width: 100%;
    height: 400px;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
}
.category .header{
    background: #f6f6f6;
}
.category .header h3{
    display: inline-block;
    color: #333;
    font-size: 14px;
    font-weight: 700;
    width: 84%;
    text-align: left;
}
.category .header button{
    display: inline-block;
    border: 0;
    width: 30px;
    height: 30px;
    background: #f6f6f6;
    color: #999;
    font-size: 18px;
}
.categoryName{
    width: 36%;
}
ul li span{
    display: inline-block;
}
.categoryName li .name{
    padding-left: 18px;
    width: 70px;
}
.categoryName li.active .name{
    color: #2395ff;
    font-weight: 900;
}
.categoryName li.active .count{
    color: #2395ff;
}
ul li .count{
    color: #999;
    font-size: 12px;
}
.categoryItem li .name{
    width: 120px;
}
.category-content{
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
}
.category ul{
    height: 356px;
    display: inline-block;
    overflow-y: scroll;
    white-space: nowrap;
}
.category ul li{
    height: 44px;
    line-height: 44px;
    color: #333;
    vertical-align: middle;
}
.categoryItem{
    width: 60%;
    padding-left: 10px;
}
.categoryItem li img{
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
}
.categoryItem li .name{
    padding-left: 5px;
}
.shade{
    width: 100%;
    height: 666px;
    background: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12;
}
</style>
