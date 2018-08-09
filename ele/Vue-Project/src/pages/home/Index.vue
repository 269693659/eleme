<template>
    <page id="home" :onScroll="getScrollY" ref="page">
        <div class="main">
            <div class="search" @click="goSearchPage()">
                <div class="aBox"><p>搜索饿了么商家、商品的名称</p></div>
            </div>
            <!-- 轮播图 -->
            
            <swiper :bannerData="bannerData"></swiper>
            <!-- 排序 -->
            <Fox></Fox>
            <!-- 推荐商家 -->
            <div class="stops">
                <Stops v-for="(item,i) in stopsData" :key="i" :data="item"></Stops>
            </div>
            
        </div>
    </page>
</template>

<script>
import Swiper from '@/components/home/Swiper.vue'
import Stops from '@/components/common/stops'
import Fox from '@/components/home/fox'
//数据
<<<<<<< HEAD
import {getHomeBannerData} from '@/services/bannerService.js'
import { getSaleList } from "../../services/discoverserver";
=======
import {getHomeBannerData} from '@/services/bannerService.js';
import { getSaleList } from "@/services/discoverserver";
>>>>>>> e928e48e743f84ceebcff2a3dd7fbf9c22e6e83b
import {
  getRestaurantLocation,
  getAddressLocation,
  getSwiperList,
  getAttributeLocation,
  getSortList
<<<<<<< HEAD
} from "../../services/indexserver";
=======

} from "@/services/indexserver";

>>>>>>> e928e48e743f84ceebcff2a3dd7fbf9c22e6e83b

export default {
    data(){
       return {
            bannerData:[],
            stopsData:[],
            offset:0,
            limit:8,
            getAlllimit:0,
            canGetLocation:true,
       }
    },
    components:{
        Swiper,
        Stops,
        Fox
    },
<<<<<<< HEAD
    methods:{
        getScrollY(y){
            if(y<20 && this.canGetLocation){
                this.requestRestaurantLocation()
            }
        },
        //再次请求数据
        requestRestaurantLocation(){
            this.canGetLocation = false;
            getRestaurantLocation(this.getAlllimit,this.limit).then(result => {
                this.stopsData = this.stopsData.concat(result)
                this.$nextTick(()=>{
                   
                    this.$refs.page.refreshDOM()
                    this.getAlllimit += this.limit
                    this.canGetLocation = true;
                })
                
            })
        }

    },
    mounted() {

        //请求轮播图的数据
        getHomeBannerData().then(result=>{
        this.bannerData=result;
        // console.log(this.bannerData)
        })

        // 请求商家的数据
        getRestaurantLocation(this.offset,this.limit).then(result => {
            this.stopsData = result;
            this.getAlllimit += this.limit
            console.log(this.getAlllimit)
        })


        // getAddressLocation().then(result => {
        // //   console.log(result, "本地地址");
        // });
        // getAttributeLocation().then(result => {
        // console.log(result, "小属性");
        // });
        // getSortList().then(result => {
        // console.log(result, "排序");
        // });
        // getSaleList().then(result => {
        // //   console.log(result, "美食");

=======

    methods:{
        getScrollY(y){
            if(y<20 && this.canGetLocation){
                this.requestRestaurantLocation()
            }
        },
        //再次请求数据
        requestRestaurantLocation(){
            this.canGetLocation = false;
            getRestaurantLocation(this.getAlllimit,this.limit).then(result => {
                this.stopsData = this.stopsData.concat(result)
                this.$nextTick(()=>{
                   
                    this.$refs.page.refreshDOM()
                    this.getAlllimit += this.limit
                    this.canGetLocation = true;
                })
                
            })
        },
        //
        goSearchPage(){
            this.$router.push({
                path:'/search'
            })
        }

        },
    mounted() {
        //请求轮播图的数据
        getHomeBannerData().then(result=>{
            this.bannerData = result
        
        })
        
         // 请求商家的数据
        getRestaurantLocation(this.offset,this.limit).then(result => {
            this.stopsData = result;
            this.getAlllimit += this.limit
            console.log(this.getAlllimit)
        })
   
        

        // getAddressLocation().then(result => {
        // //   console.log(result, "本地地址");
        // });
        // getAttributeLocation().then(result => {
        // console.log(result, "小属性");
        // });
        // getSortList().then(result => {
        // console.log(result, "排序");
        // });
        // getSaleList().then(result => {
        // //   console.log(result, "美食");

>>>>>>> e928e48e743f84ceebcff2a3dd7fbf9c22e6e83b
        // });
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
