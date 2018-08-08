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
                <li>
                    <span>钱包</span>
                    </li>
                <li>红包</li>
                <li>金币</li>
            </ul>
            <div class="address">
                <p>我的地址</p>
            </div>
            <div class="gold">
                <p>金币商城</p>
                <p>分享拿5元红包</p>
            </div>
            <div class="service">
                <p>我的客服</p>
                <p>下载饿了么APP</p>
            </div>
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
.countList li p:nth-child(1){
    line-height:40px;
}
.icon-qianbao{
    color:orange;
}
.countList li{
    flex: 1;
    text-align:center;
    line-height: 83px;
}
.countList li:nth-child(2){
    box-sizing: border-box;
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;

}
.address,.gold,.service{
    padding-left:40px;
    box-sizing:border-box;
    margin:8px 0;
    background:#fff;
    line-height: 44px;
    font-size:14px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;

}
.address{
        height:44px;
}
.gold{
     margin:0 0;
}
</style>
