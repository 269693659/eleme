<template>
    <!-- <page id="discover"> -->
        <div class="discover">
            <div class="coverHead">
                <div class="coverLeft">
                    <div class="megs">
                        <p>金币商城</p>
                        <span>
                            0元好物
                        </span>
                    </div>
                </div>
                <div class="coverRight">
                    <div class="coverRightTop">
                       <p>推荐有奖</p>
                       <p>五元现金领不停</p>
                    </div>
                    <div class="coverRightBottom">
                        <p>周边优惠</p>
                        <p>领取口碑好劵</p>
                    </div>
                </div> 
            </div>
             <div class="shopList">
                <div class="admitime">
                    <p>限时好礼</p>
                    <span>金币换豪礼</span>
                </div>
                <ul>
                    <li>3元饿了么红包</li>
                    <li>扫地机器人</li>
                    <li>机械手感键鼠</li>
                </ul>
                <div class="more">
                    <p>更多</p>
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
    }
}
</script>

<style scoped>
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
    }
    .coverRightTop,coverRightBottom{
        height:50%;
    }
    .coverRightBottom{
        box-sizing:border-box;
        border-top:1px solid #ededed; 
    }
    .megs{
        width:50%;
        float:left;
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
        height:387px;
         display:flex;
        justify-content: space-between;
        flex-wrap:nowrap;
    }
    .admitime{
        width:100%;
        text-align: center;
    }
</style>
