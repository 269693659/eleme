<template>
    <div class="foodList">
        <ul class="listItem">
            <li v-for="(item,index) in foodListData" :key="index">{{item.name}}</li>
        </ul>
        <div class="right" @click="showCategory()">></div>
        <div class="category" v-show="isShow">
            <div class="header">
                <h3>请选择分类</h3>
                <button @click="cancelCategory()">X</button>
            </div>
            <ul class="categoryName">
                <li v-for="(item,index) in categoryData" :key="index"  @click="showSubCategories(index)">
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
            shade:false
        }
    },
    methods:{
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
        showSubCategories(index){
            this.subCategoriesData=[];
            this.subCategoriesData=this.categoryData[index].sub_categories;
        }
    },
    mounted(){
        getFoodPageFoodListData().then(result=>{
            this.foodListData=result;
        }),
        getFoodPageCategoryData().then(result=>{
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
    position: relative;
}
.foodList .listItem{
    background: #0085ff;
    padding: 0 16px;
    overflow-x: scroll;
    white-space: nowrap;
}
.foodList .listItem li{
    display: inline-block;
    text-align: center;
    margin-right: 30px;
    height: 40px;
    line-height: 40px;
    opacity: 0.7;
}
.foodList .right{
    position: absolute;
    top: 0;
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
ul li .count{
    color: #999;
    font-size: 12px;
}
.categoryItem li .name{
    width: 120px;
}
.category ul{
    height: 400px;
    display: inline-block;
    overflow-y: scroll;
    white-space: nowrap;
}
.category ul li{
    height: 50px;
    line-height: 50px;
    color: #333;
}
.categoryItem{
    width: 60%;
    padding-left: 10px;
}
.categoryItem li img{
    width: 50px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
}
.categoryItem li .name{
    padding-left: 5px;
}
.shade{
    width: 100%;
    height: 620px;
    background: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 18;
}
</style>
