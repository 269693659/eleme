<template>
    <div class="actives">
        <section class="acts">
                <div class="index-3xB2N_0">
                    <router-link class="trait" to="/sale">
                        <h3 class="package">品质套餐</h3>
                        <div class="alEAT">搭配齐全吃得好</div>
                        <div class="buyNow">立即抢购 &gt;</div>
                        <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
                    </router-link>
                    <div class="index-3OXhZ_0 trait">
                        <h3 class="packagetwo">限量抢购</h3>
                        <div class="alEAT">超值美味 9.9元起</div>
                        <div class="buyNow goBuy"><span>4304人</span>正在抢 &gt;</div>
                        <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
                    </div>
                </div> 
            </section>   
          <div id="shop" class="shop"> 推荐商家</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.actives{
    width:100%;
}
.acts{
    padding-top:4px;
}
.trait{
    position: relative;
}
.trait img{
    width:120px;
    height:80px;
    float:right;
    position: absolute;
    bottom:-8px;
    right:0;
}
.trait{
  width: 175px;
  height: 140px;
  background: #fafafa;
  float: left;
  padding:9px 0 0 13px;
  box-sizing: border-box;
  margin-left: 8px;
}
.package,.packagetwo{
    font-size: .18rem;
    font-weight: 700;
    color:#000;
}
.packagetwo{
    color:#e81919;
}
.buyNow,.goBuy{
    color: #af8260;
    font-weight: 700;
    font-size: 0.11rem;
}
.goBuy{
    color:#000;
}
.goBuy span{
    color:#e81919;
}
.alEAT{
    font-size:.12rem;
    line-height: 0.22rem;
    color: #777;
}
.shop{
    padding-top:15px;
}
.shop::after{
    height:1px;
}
.shop::before{
     height:1px;
}
</style>
