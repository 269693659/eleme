<template>
    <div class="godetail">
        <div class="stopBg">
            <div class="photopht">
                <img src="https://fuss10.elemecdn.com/1/2a/05f654faecf9388fae8331a2b1b5apng.png?imageMogr/format/webp/thumbnail/150x/" alt="">
            </div>
        </div>
        <div class="godetailMeg">
            <span>1号粥店(粥屋店)</span>
            <p><span>评价4.6</span><span>月售1508单</span><span>蜂鸟快送</span><span>约29分钟</span></p>
            <div><p>共<span>¥18</span><span>店铺</span><span>领取</span></p></div>
            <p><span>满减</span><span>满28减16，满40减20，满58减26，满88减35</span></p>
            <p class="notice">公告：1号粥店倾心为您熬粥❤️ 
纯天然健康养生粥用心服务用心出品! ி
如果订餐过程中有任何问题请您及时联系店里，我们将会以最短的时间给您最满意的处理方案！☎ 
一颗小小的创业之心需要您的呵护ღ
 愿您尝遍世间百态转身依旧爱恋一号粥店✌</p>
        </div>
        <ul>
          <li>点餐</li>
          <li>评价</li>
          <li>商家</li>
        </ul>
        <h5>商家推荐</h5>
        <ul class="swiperList">
          <li>
            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/1/0a/623d1d0900454feb93c5f01aa4a57jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/d/7b/8f1ae2bab7f64c3ae33b947ec8a7djpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/c/ad/8d5de0a5338d517048c7241449c64jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/c/ad/8d5de0a5338d517048c7241449c64jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/a/2c/30d111bd1f8b520ac517f69b67e62jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/7/00/27d39196ba86b1e153881eb0e0949jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
          <li>
            <img src="//fuss10.elemecdn.com/c/49/da1dd70d0e363e0d4a775f168d0b7jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
          </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
.godetail {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  background: #fff;
  /* overflow: hidden; */
}
.stopBg {
  height: 100px;
  position: relative;
  background: url("//fuss10.elemecdn.com/8/30/bdde87fd6d9bfb02447c937fb6cf6png.png?imageMogr/format/webp/thumbnail/750x/")
    no-repeat;
  background-size: cover;
}
.photopht img {
  position: absolute;
  width: 75px;
  height: 75px;
  border-radius: 8px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.godetailMeg {
  padding-top: 15px;
}
.notice{
  text-overflow: ellipsis;
  white-space:nowrap;
}
.swiperList li img{
  width:120px;
  height:120px;
}
</style>
