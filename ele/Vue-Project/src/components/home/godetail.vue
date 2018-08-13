<template>
    <div class="godetail">
        <div class="stopBg">
            <div class="photopht">
                <img src="https://fuss10.elemecdn.com/1/2a/05f654faecf9388fae8331a2b1b5apng.png?imageMogr/format/webp/thumbnail/150x/" alt="">
            </div>
        </div>
        <div class="godetailMeg">
            <span class="shopNane">1号粥店(粥屋店)</span>
            <p class="evaluate"><span>评价4.6</span><span>月售1508单</span><span>蜂鸟快送</span><span>约29分钟</span></p>
            <div class="adviaty"><span>共<i>¥18</i><i class="store">店铺</i></span><span class="get">领取</span></div>
            <p class="reduce"><span class="reduction">满减</span><span>满28减16，满40减20，满58减26，满88减35...</span><span class="discounts">12个优惠</span></p>
            <p class="notice textell">公告：1号粥店倾心为您熬粥❤️ 
纯天然健康养生粥用心服务用心出品! ி
如果订餐过程中有任何问题请您及时联系店里，我们将会以最短的时间给您最满意的处理方案！☎ 
一颗小小的创业之心需要您的呵护ღ
 愿您尝遍世间百态转身依旧爱恋一号粥店✌</p>
        </div>
        <ul class="addFoodList flex">
          <li @click="Ordering(1)"><a>点餐</a></li>
          <li @click="Ordering(2)"><a>评价</a></li>
          <li @click="Ordering(3)"><a>商家</a></li>
        </ul>
        <div class="switchover" v-show="act==1">
          <detailFoodList></detailFoodList>
        </div>
        <div class="discussBox" v-show="act==2">
          <discuss></discuss>
        </div>
    </div>
</template>

<script>
import detailFoodList from './detailFoodList.vue'
import discuss from './discuss.vue'
// import {getStoreDetails} from '@/services/storedetails.js'
export default {
  data(){
    return{
      act:2
    }
  },
  components:{
    detailFoodList,
    discuss
  },
  methods:{
    Ordering(rest){
      this.act = rest
    }
  },
  mounted(){
    // getStoreDetails().then(result=>{
    //   console.log(result)
    // })
  }
};
</script>

<style scoped>
.godetail {
  width: 100%;
  position: absolute;
  top: 0;
  bottom:0;
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
  padding-top: 25px;
  width: 100%;
  text-align: center;
}
.shopNane {
  font-size: 0.22rem;
  font-weight: 700;
}
.evaluate {
  font-size: 0.1rem;
  color: #666;
  line-height: 0.22rem;
}
.notice {
  width: 90%;
  margin: 0 auto;
  font-size: 0.1rem;
  line-height: 0.26rem;
  color: #999;

}

.addBlue{
     position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    height: 18px;
    width: 18px;
    background: rgb(35, 149, 255);
    color: #fff;
    font-size: 0.18rem;
    text-align: center;
    border-radius: 50%;
    line-height: 14px;
}
.adviaty {
  width: 50%;
  margin: 0 auto;
  background: #fff4f4;
  line-height: 0.25rem;
  margin: 10px auto;
}
.adviaty i {
  font-size: 0.1rem;
}
.reduce {
  font-size: 0.1rem;
}
.reduction {
  display: inline-block;
  background-color: rgb(240, 115, 115);
}
.discounts {
  color: #999;
}
.addFoodList {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
}
.addFoodList li {
  width: 33%;
}
.addFoodList li a {
  color: #666;
  padding-bottom: 0.1rem;
  font-weight: 700;
  line-height: 40px;
}
.addFoodList li a:hover {
  color: #000;
  border-bottom: 2px solid rgb(96, 182, 216);
}


</style>
