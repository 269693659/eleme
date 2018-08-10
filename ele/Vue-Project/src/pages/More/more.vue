<template>
<div class="more" style="padding-bottom:290px">
    <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="//yun.duiba.com.cn/images/201712/z6b5e38yq9.jpg?x-oss-process=image/format,webp"></div>
        <div class="swiper-slide"><img  src="//yun.duiba.com.cn/images/201712/yokipurmsr.jpg?x-oss-process=image/format,webp"></div>
        <div class="swiper-slide"><img  src="//yun.duiba.com.cn/images/201712/gr9sxu1iqh.jpg?x-oss-process=image/format,webp"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
   </div>
     

    <div class="dul">
        <div class="dui-flex">
            <h3 class="goods">智能扫地机器人</h3>
        </div>
        <div class="goods-info">
            <span class="goods-no" style=" color:#ff6000;">
                9
            </span>
            <span class="goods-ou" style=" color:#ff6000;">金币</span>
            
            <del class="goods-ni" style="color:#BDBDBD;">
            ¥99.0
            </del>
        </div>
    </div>

    <div class="goods-fo">
            <label><i class="box"></i>有效期</label>
            <div class="bent">2018-07-31&nbsp;至&nbsp;2018-12-31</div>
    </div>
    <div class="why"></div>

    <div class="your">
        <div class="your-bt">商品详情</div>
        <div class="your-on">
          <div>商品简介</div>
          <div>360°自动感应全方位旋转,吸附灰尘毛发,适用于多种地面,智能扫地机器人,家居清洁小能手,
              续航持久,实惠耐用。产品原价99元/件,金币换购仅需39元/件,数量有限,抓紧抢购!该产品由
              「天天拼好货商城」提供物流配送和售后服务。商家客服电话:400-601-5563
            </div>
           <div><br></div>
           <div>兑换流程</div>
           <div>1、兑换后在积分商城首页兑换记录里获得【兑换码】并复制;</div>
           <div>2、点击兑换链接:<a href="http://38.lipinduihuan.com">http://38.lipinduihuan.com</a></div>
           <div>3、点击【立即购买】-填写【收件信息】-下一步“使用优惠”输入【优惠码】并点击“兑换 ”完成付款。</div>
           <div><br></div>
           <div>注意事项</div>
           <div>1、每位饿了么用户福利专享,可多次兑换;</div>
           <div>2、每个订单每张券码只能使用一次;</div>
           <div>3、运费描述:全国包邮(港、澳、台)除外。</div>
           <div>4、新疆、西藏、内蒙古等偏远地区无法到达</div>
           <div>5、商家客服电话:400-601-5563&nbsp; &nbsp;</div>
           <div>6、券码使用有效期:收到优惠码之日起至2018.2.15;</div>
        </div>
    </div>
     
    <div class="bottommsg">
      <p class="bottommsg-apple">＊商品和活动皆与设备制作商Apple Inc.无关</p>     
      <p class="bottommsg-poweredby">Powered by</p>
    </div>
     
    <div class="footer">
      <div class="footer-bd">
          <a class="db-btn">
             请先登录
          </a>
      </div>
    </div>

</div>
</template>
<script>
export default {
    
    props: {
        data: Array
    },
    mounted(){
        //创建swiper对象
        this.bannerSwiper = new Swiper(this.$refs.banner, {
        loop: true,
        pagination: '.swiper-pagination',
        });
    },
    updated(){
        //data数据发生变化，dom会进行更新
        //如果slide个数发生变化，就需要更新轮播图
        this.bannerSwiper.update();
        this.bannerSwiper.reLoop();
        this.bannerSwiper.slideTo(1, 0);
    }
}
</script>

<style scoped>
img{
    width:100%;
    height:170px;
}
.more{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    bottom:0;
    z-index: 800;
    background:white;
}
 .dul{
     height:92px;
     padding-top:15px;
     padding-left:20px;
     border-bottom: solid rgb(239, 239, 239);
 }
 .goods-info{
     padding-top:10px;
 }
 .goods-no{
     font-size:23px;
 }
 .goods-fo{
     width:348px;
     height:48px;
     margin-left:20px;
     line-height: 48px;
     color: #666
 }
 .goods-fo i{
     float:left;
 }
 .goods-fo .bent{
     float:right;
 }
 .why{
     width:100%;
     height:7px;
     background:floralwhite;
 }
 .your{
     padding-top:20px;
     margin-left:20px;
 }
 .your .your-bt{
     color: #000000;
     font-weight: bolder;
     font-size:15px;
 }
 .your-on{
     padding-top:15px;
 }
 .your-on a{
     color:#ff6000;
     text-decoration: underline;
 }
 .bottommsg{
     width:100%;
     height:62px;
     background:honeydew;
     text-align: center;
     margin-top:15px;
 }
 .bottommsg-poweredby{
     background: url(//yun.duiba.com.cn/upload/pm5inxfufg.png) 247px 1px no-repeat;
     background-size:40px;
     color:#CCC;
     font-size: 12px;
     margin-left:-37px;
     margin-top:10px;
 }
 .bottommsg-apple{
     padding-top:10px;
     color:#CCC;
     font-size: 12px;
 }
 .footer{
     height:35px;
     text-align: center;
     padding:20px 35px;
     background:white;
     position:fixed;
     bottom:0;
     z-index: 999;
 }
 .footer .db-btn{
     width:295px;
     height:45px;
     background:#ff6000 ;
     display:block;
     line-height: 45px;
     font-size:18px;
     color:white;
     border-radius: 26px;
     margin-top:-10px;
 }
</style>
