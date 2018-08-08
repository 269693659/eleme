<template>
    <div class="swiper-container swiper-container-horizontal" ref="banner">
    <div class="swiper-wrapper"> 
        <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index">
            
            <div v-for="(value,index) in item" :key="index" class="box" @click="goPage(value)">
                <div class="box-img">
                    <img :src="value.image_hash">
                </div>
                <span class="title">{{value.name}}</span>
            </div>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
</div>
</template>

<script>
export default {
    props:{
        bannerData:Array
    },
    data(){
        return {
            
        }
    },
    methods:{
        goPage(value){
            console.log(value);
        }
    },
    mounted(){
        //创建bannerSwiper对象
        this.bannerSwiper=new Swiper(this.$refs.banner,{
            loop:true,
            pagination: '.swiper-pagination',
        }) 
        
    },
    updated() {
			//data数据发生变化，dom会进行更新
			//如果slide个数发生变化，就需要更新轮播图
			this.bannerSwiper.update();
			
			this.bannerSwiper.reLoop();
			
			this.bannerSwiper.slideTo(1,0);
		}
}
</script>

<style scoped>
.box{
    margin-top: 15px;
    width: 20%;
    float: left;
    text-align: center;
}
.box-img{
   width: 50px;
   height: 50px;
   position: relative;
   margin: 0 auto;
}
.box-img img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.box .title{
    display: inline-block;
    margin-top: 8px;
    color: #666;
    font-size: 12px;
}
</style>
