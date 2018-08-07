<template>
    <!-- <page id="home"> -->
        <div class="main">
            <div class="search">
                <div class="aBox"><p>搜索饿了么商家、商品的名称</p></div>
            </div>
            <!-- 轮播图 -->
            <swiper :bannerData="bannerData"></swiper>

            <!-- 推荐商家 -->
            <Stops></Stops>
        </div>
    <!-- </page> -->
</template>

<script>
import Swiper from '@/components/home/Swiper.vue'
import Stops from '@/components/common/stops'
import {getHomeBannerData} from '@/services/bannerService.js'
export default {
    data(){
       return {
           bannerData:[]
       }
    },
    components:{
        Swiper,
        Stops
    },
    mounted(){
        //请求轮播图的数据
        getHomeBannerData().then(result=>{

            this.bannerData=result;
            console.log(this.bannerData)
        })
    }
}
</script>

<style scoped>
    .search{
        height:51px;
        width:100%;
        background:#0af;
        position: relative;
    }
    .search .aBox{
        width:90%;
        height:36px;
        position: absolute;
        top:7px;
        left:5%;
        background:#fff;
        text-align:center;
        line-height:36px;
        color:#ccc;
    }

</style>
