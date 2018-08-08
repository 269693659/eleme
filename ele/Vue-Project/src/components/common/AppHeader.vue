<template>
    <div class="header">
        <div class="home" @click="goLocation()">
            <span class="location">定位</span>
            <span class="address">上步工业区</span>
            <span class="select">></span>
        </div>
    </div>
</template>

<script>
export default {
     data(){
         return {

         }
     },
     methods:{
         //跳转到搜索地址页面
         goLocation(){
         }
     }
}
</script>

<style scoped>
    .header{
        height:44px;
        width:100%;
        background:#0af;
        position: absolute;
        top:0;
        left:0;
        color: white;   
        line-height: 44px;   
        font-weight: 900;
        padding-left: 5%;
    }
    .header .address{
        font-size: 16px;
    }
</style>
