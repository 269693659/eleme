<template>
    <div class="package" @click="goRankingPage()">
        <div class="package-header">
            <span class="worry">省心套餐</span>
            <span class="more">更多&nbsp;></span>
        </div>
        <div v-for="(item,index) in packageData" :key="index" class="packageItem">
            <div class="image">
                <img :src="item.image_path" alt="">
            </div>
            <div class="content">
                <h5>{{item.name}}</h5>
                <p><span>{{item.food_rate}}</span></p>
                <p>
                    <span class="price">¥{{item.price}}</span>
                    <span v-show="!item.discount_activity">¥{{item.original_price}}</span>
                    <span class="activity" v-show="item.discount_activity">{{item.discount_activity}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {getSaleListData} from '@/services/foodService.js'
export default {
    data(){
        return{
            packageData:[],
            rankingData:[]
        }
    },
    methods:{
        goRankingPage(){
            this.$router.push({
                path:'/ranking'
            })
        }
    },
    mounted(){
        getSaleListData().then(result=>{
            this.packageData=result;
        })
    }
}
</script>

<style> 
.package{
    padding: 10px;
    display: inline-block;
}
.package .package-header{
    margin-bottom: 8px;
    line-height: 18px;
}
.package .package-header span{
    color: #333;
    font-weight: 700;
}
.package .package-header .worry{
    font-size: 16px;
}
.package .package-header .more{
    font-size: 12px;
    float: right;;
}
.package .package-header span{
    display: inline-block;
}
.packageItem{
    width: 30%;
    display: inline-block;
    margin-right: 16px;
}
.packageItem:last-child{
    margin-right: 0;
}
.packageItem .image{
    width: 100%;
}
.packageItem .image img{
    width: 100%;
}
.packageItem .content h5{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    width: 100%;
    margin-top: 10px;
}
.packageItem .content p span{
    color: #333;
    line-height: 24px;
    opacity: 0.7;
    font-size: 12px;
}
.packageItem .content p .price{
    opacity: 1;
    font-weight: 700;
    font-size: 14px;
}
.packageItem .content p .activity{
    color: #e8470b;
    border: 1px solid #e8470b;
    font-size: 12px;
    padding: 0 2px;
}
</style>
