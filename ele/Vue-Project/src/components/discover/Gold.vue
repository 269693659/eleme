<template>
<!-- <page id = "Glod"> -->
    <div class="glod">
        <div class="goldHeader">
            <div class="headLeft">
            <i class="iconfont icon-hongbao"></i>
            </div>
            <div class="headRight"> 
            <div class="goldheadMeg">
                <p>登录领取红包福利</p>
                <span>千万波红包等着你</span>
            </div>
            <div class="goldLogin">
            <span>登录</span>    
            </div>
            </div>
        </div>
        <div class="banner"></div>
         <ul class="goldEare">
            <li>
                <img src="../../../static/img/vip.png" alt="vip">
                <p>会员专区</p>
                </li>
                <li>
                <img src="../../../static/img/redpage.jpg" alt="vip">
                <p>红包专区</p>
                </li>
                <li>
                <img src="../../../static/img/gift.png" alt="vip">
                <p>优惠礼券</p>
                </li>
                <li>
                <img src="../../../static/img/Appliances.png" alt="vip">
                <p>数码家电</p>
                </li>
                <li>
                <img src="../../../static/img/daliy.png" alt="vip">
                <p>日常家居</p>
                </li>
                <li><img src="../../../static/img/drunk.png" alt="vip">
                <p>食品饮料</p></li>
                <li><img src="../../../static/img/beaty.png" alt="vip">
                <p>个人美护</p></li>
                <li><img src="../../../static/img/allshops.png" alt="vip">
                <p>所有商品</p></li>
            </ul>
    </div>
<!-- </page> -->
</template>

<script>
export default {};
</script>

<style scoped>

.glod {
  width: 100%;
  height:100%;
  position: absolute;
  z-index: 999;
  background: #fff;
  /* overflow: hidden; */
}
.goldHeader{
    width:100%;
    height:64px;
    border-bottom:1px solid #ddd;
}
.headLeft{
    width:15%;
    float:left;
    text-align:center;
    line-height: 65px;
}
.headLeft i{
    font-size:28px;
    color:red;
}
.headRight{
    padding-top:13px;
    width:85%;
    float:right;
}
.goldheadMeg{
    float: left;
    width:73%;
}
.goldheadMeg p{
    font-size:15px;
    font-weight:bold;
}
.goldheadMeg span{
    font-size:12px;
}
.goldLogin{
    float: left;
    width:27%;
    text-align:center;
}
.goldLogin span{
    margin-top:5px;
    display:block;
    padding:4px 0;
    width:70px;
    color:#fff;
    background:#fe7a2b;
    border-radius:14px;
    
    }
.banner{
    height:182px;
    background:url(../../../static/img/remoney.png)no-repeat;
    background-size: cover;
}
.goldEare{
    width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
}    
.goldEare li{
    width:25%;
    padding-bottom:6px;
}
.goldEare li img{
    width:45px;
    height:45px;
    margin:10px auto 5px auto;
    border-radius:50%;
}
.goldEare li p{
    text-align:center;
    font-size:12px;
}
</style>
