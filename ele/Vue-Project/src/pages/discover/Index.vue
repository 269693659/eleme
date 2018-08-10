<template>
    <!-- <page id="discover"> -->
        <div class="discover">
            <img src="https://fuss10.elemecdn.com/2/9f/cedf0f9959a7e699f81dba18d0aa6gif.gif" class="top-banner">
            <div class="coverHead">
                
                <div class="coverLeft">
                    <router-link to="/goldstop/1/2">
                    <div class="megs">
                        <p>金币商城</p>
                        <span>
                            0元好物在这里
                        </span>
                        <img class="icon" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/">
                    </div>
                     </router-link>
                </div>
               
                <div class="coverRight">
                    <div class="coverRightTop">
                       <p class="one">推荐有奖</p>
                       <p>五元现金领不停</p>
                       <img class="out" src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/">
                    </div>
                    <div class="coverRightBottom">
                        <p class="two">周边优惠</p>
                        <p>领取口碑好劵</p>
                        <img class="most" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/">
                    </div>
                </div> 
            </div>
             <div class="shopList">
                <div class="admitime">
                    <span class="ad_left"></span>
                    <p>限时好礼</p>
                    <span class="ad_right"></span>
                    <span>金币换豪礼</span>
                </div>
                <ul>
                    <li>
                        <span class="discount">限时优惠</span>
                        <img src="https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/" width="110" height="111">
                        <i>3元饿了么红包</i>
                        <p>90金币<span>￥9</span></p>
                    </li>
                    <li>
                        <span class="discount">特价换购</span>
                        <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" width="110" height="111">
                        <i>扫地机器人</i>
                         <p>9金币<span>￥199</span></p>
                    </li>
                    <li>
                        <span class="discount">特价换购</span>
                        <img src="https://fuss10.elemecdn.com/0/d8/de4c1115cad90787fd3a64c897e5djpeg.jpeg?imageMogr/format/webp/" width="110" height="111">
                        <i>机械手感键鼠</i>
                         <p>9金币<span>￥109</span></p>
                    </li>
                </ul>
                <div class="more">
                    <p @click="goMorePage()">查看更多</p>
                </div>
            </div>
        </div>
    <!-- </page> -->
</template>

<script>
import {getSortList} from '@/services/indexserver'
export default {
    counted(){
         getSortList().then(result=>{
            console.log(result,"美食")
        })
    },
    // 
    methods:{
        goMorePage(){
                this.$router.push({
                    path:'/more'
                })
        }
    },
}

    
</script>

<style scoped>
   .top-banner{
       width:100%;
       height:105px;
   }
    .coverHead{
        width:100%;
        height:160px;
        display:flex;
        justify-content: space-between;
        flex-wrap:nowrap;
        background:#fff;
    }
    .coverLeft{
        height:160px;
        box-sizing:border-box;
        width:50%;
        padding:15px 0 0 10px;
        border-right:1px solid #ededed; 
        flex:1;
    }
    .coverRight{
         height:160px;
         width:50%;
         flex:1;
         padding-top:15px;
    }
    .coverRightTop,coverRightBottom{
        height:50%;
    }
    .coverRightTop .one{
        color:rgb(27, 169, 225);
    }
    .coverRightTop .out{
        width:45px;
        height:45px;
        position: absolute;
        right:10px;
        top:160px;
    }
    .coverRightBottom{
        box-sizing:border-box;
        border-top:1px solid #ededed; 
    }
    .coverRightBottom .most{
        width:45px;
        height:45px;
        position: absolute;
        right:10px;
        top:247px;
    }
    .coverRightBottom .two{
        color:rosybrown;
    }
    .megs{
        width:50%;
        float:left;
    }
    .megs .icon{
        width:75px;
        height:75px;
        position: absolute;
        right:196px;
    }
    .megs p{
        color: rgb(255, 153, 0);
        font-size: 14px;
    }
    .megs span{
        color:#ccc;
    }
    .shopList{
        background:#fff;
        margin-top:8px;
        min-height: 250px;
    }
    .shopList ul{
        width:100%;
        height:300px;
        display: flex;
        margin-top:25px;
    }
    .shopList ul li p{
        font-size:13px;
        margin-top:10px;
        color:red;
    }
    .shopList ul li p span{
        color:gainsboro;
    }
    .shopList ul li i, .shopList ul li p{
        margin-left:16px;
    }
    .shopList ul li{
        flex:1;
    }
    .shopList ul li .discount{
        font-size: 12px;
        width:12px;
        height:10px;
        background:black;
        color:blanchedalmond;
        margin-left:10px;
    }
    .admitime{
        width:100%;
        text-align: center;
    }
    .admitime p{
    font-weight:bolder;
    font-size:18px;
    padding-top:20px;

    }
    .admitime .ad_left{
           width:15px;
           height:2px;
           background:slategrey;
           position: absolute;
            top:350px;
            right:120px;
         
    }
    .admitime .ad_right{
           width:15px;
           height:2px;
           background:slategrey;
           position: absolute;
           top:350px;
           left:120px;
    }
    .more p{
        margin-top:-98px;
        margin-left:156px;
        color:#999;
    }
</style>
