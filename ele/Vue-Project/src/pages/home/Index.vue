<template>
<div>
    <!-- 吸顶 -->
    <div v-if="topsearchShow" class="topsearch search" @click="goSearchPage()">
        <div class="aBox"><p>搜索饿了么商家、商品的名称</p></div>
    </div>

    <page id="home" :onScroll="getScrollY" ref="page">
        <div class="main">
            
            <div class="top">
                <h1 style="font-size:20px">定位</h1>
            </div>
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

    <!-- 回到顶部 -->
    <div class="buttom" v-if="goTopShow" @click="goToTop" >
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+">
    </div>

</div>
</template>

<script>
import Swiper from '@/components/home/Swiper.vue'
import Stops from '@/components/common/stops'
import Fox from '@/components/home/fox'
//数据
import {getHomeBannerData} from '@/services/bannerService.js';
import { getSaleList } from "@/services/discoverserver";
import {
  getRestaurantLocation,
  getAddressLocation,
  getSwiperList,
  getAttributeLocation,
  getSortList

} from "@/services/indexserver";


export default {
    data(){
       return {
            bannerData:[],
            stopsData:[],
            offset:0,
            limit:8,
            getAlllimit:0,
            canGetLocation:true,
            topsearchShow:false,
            goTopShow:false
       }
    },
    components:{
        Swiper,
        Stops,
        Fox
    },

    methods:{
        getScrollY(y,scrollY){
            //吸顶
            if(scrollY>-44){
                this.topsearchShow = false
            }else{
                this.topsearchShow = true
            }

            //回到顶部按钮
            if(scrollY < -800){
                this.goTopShow = true
            }else{
                this.goTopShow = false
            }

            //执行请求数据
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
        },

        goToTop(){
            this.$refs.page.scrollTop()
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

        // });
    }
}
</script>

<style scoped>
    
    .top{
       width: 100%;
       height: 44px;
       line-height:44px;
        text-align:center;
       color: #fff;
       background: #0af;
    }
    


</style>
