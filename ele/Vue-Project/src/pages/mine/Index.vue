<template>
    <!-- <page id="mine"> -->
        <div class="mine">
            <div class="userhead">
                <div class="meg">
                <img src="../../../static/img/head.png">
                <div class="itro">
                    <p class="add">登录/注册</p>
                    <p class="after">登陆后享受更多优惠特权</p>
                </div>                    
                </div>   
            </div>         
            <ul class="countList">
               
                <li><p><i class="iconfont icon-qianbao" style="font-size:25px"/></p>钱包</li>
             
                <li><p><i class="iconfont icon-hongbao" style="font-size:25px"/></p>红包</li>
               
                <li><p><i class="iconfont icon-icon-test" style="font-size:25px"/></p>金币</li>
            </ul>
            <span class="end">
            <div class="address">
                <p><i class="iconfont icon-position"/>我的地址</p>
            </div>
            <div class="gold">
                <p><i class="iconfont icon-shangcheng"/>金币商城</p>
                <p><i class="iconfont icon-qianbao"/>分享拿5元红包</p>
            </div>
            <div class="service">
                <p><i class="iconfont icon-linedesign-20"/>我的客服</p>
                <p class="moey"><i class="iconfont icon-changyonglogo40" style="font-size:25px"/>下载饿了么APP</p>
            </div>
            </span>
        </div>
    <!-- </page> -->
</template>

<script>
export default {};
</script>

<style scoped>
.mine{
    background:#f5f5f5;
}
.userhead {
  height: 110px;
  background: #0af;
}
.meg {
  height: 60px;
  width: 90%;
  margin: 0 auto;
  padding-top: 25px;
}
.userhead .meg img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  float:left;

}
.userhead .meg .itro{
    float:left;
    min-width:200px;
    height:60px;
    box-sizing:border-box;
    padding-left:10px;
    color:#fff;
}
.userhead .meg .itro .add{
    font-size:18px;
    font-weight: bold;
    line-height:28px;

}
.userhead .meg .itro .after{
    font-size:12px;
    line-height:24px;
}
.countList{
    width:100%;
    height:83px;
    background: #fff;
    display:flex;
    justify-content:space-between;
    flex-wrap:nowrap;
}
.countList li p{
    color:red;
    line-height: 70px;

}
.countList li{
    flex: 1;
    text-align:center;
    line-height: 1px;
}
.countList li:nth-child(2){
    box-sizing: border-box;
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;

}
.address,.gold,.service{
    padding-left:15px;
    box-sizing:border-box;
    margin:8px 0;
    background:#fff;
    line-height: 44px;
    font-size:14px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;

}
.address i,.gold i,.service i{
    color:blue;
    margin-right:8px;
}
/* .service .moey i{
    padding-right:18px;
} */
.service .moey i{
    color:rgb(60, 171, 255);
}
.address{
        height:44px;
}
.gold{
     margin:0 0;
}
</style>
