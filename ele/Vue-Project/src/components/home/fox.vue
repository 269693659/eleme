<template>
    <!-- <page id="home"> -->
        <div class="fox">
            <ul class="aList">
                         <li @click="asort()">综合排序</li>
                         <li>距离最近</li>
                         <li>品质联盟</li>
                         <li @click="aShow()">筛选</li>
            </ul>
        <ul class="filter-extend filter-sort" v-show="ashow">
            <li v-for="(item,i) in sortList" :key="i" @click="blue(item,i)" 
            :class="{act:index==i}">
                <span>{{item}}</span>
            </li>
            <button @click="close()" class="close">关闭</button>
            </ul>
        <section class="filter-extend" v-show="isShow">
            <div class="morefilter-3-5h6_0">
                    <dl>
             <dt>商家服务 (可多选)</dt>
        <dd>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <img class="morefilter-2JyrM_0" src="//fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                    <span>蜂鸟专送</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <img class="morefilter-2JyrM_0" src="//fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                    <span>品牌商家</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <img class="morefilter-2JyrM_0" src="//fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                    <span>食安保</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <img class="morefilter-2JyrM_0" src="//fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                    <span>新店</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <img class="morefilter-2JyrM_0" src="//fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                    <span>开发票</span>
                </div>
            </div>
        </dd>
    </dl>
    <dl>
        <dt>优惠活动 (单选)</dt>
        <dd>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>新用户优惠</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>特价商品</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>下单立减</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>赠品优惠</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>下单返红包</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>进店领红包</span>
                </div>
            </div>
        </dd>
    </dl>
    <dl>
        <dt>人均消费</dt>
        <dd>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>¥20以下</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>¥20 - ¥40</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>¥40 - ¥60</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>¥60 - ¥80</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>¥80 - ¥100</span>
                </div>
            </div>
            <div class="morefilter-3GXUR_0">
                <div class="morefilter-l3S4A_0">
                    <span>¥100以上</span>
                </div>
            </div>
        </dd>
    </dl>
</div>
       <div class="morefilter-2DLty_0">
        <span class="morefilter-39NFb_0">清空</span>
        <span class="morefilter-16ilq_0 morefilter-2Dfps_0" @click="close()">确定</span>
                            </div>
                        </section>

        </div>

    
       
    <!-- </page> -->
</template>

<script>
import { getSortList } from "../../services/indexserver";
export default {
  data() {
    return {
      sortList: [],
      index: 0,
      checked: false,
      ashow: false,
      isShow: false
    };
  },
  methods: {
    blue(item, i) {
      this.index = i;
    },
    asort() {
      this.ashow = true;
    },
    close() {
      this.ashow = false;
      this.isShow = false;
    },
    aShow() {
      this.isShow = true;
    }
  },
  mounted() {
    getSortList().then(result => {
      this.sortList = result[0].abc;
    });
  }
};
</script>

<style>
.fox {
  background: #fff;
}
.act {
  color: skyblue;
}
.aList li {
  width: 25%;
  text-align: center;
  line-height: 40px;
  background: #fff;
}
.aList {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.close {
  float: right;
  background: skyblue;
  margin-right: 20px;
}
.index-1y1Q5_0 {
  padding-top: 20px;
}
.index-1y1Q5_0 img {
  width: 120px;
  height: 80px;
  float: right;
}
.index-Q3GS5_0 {
  width: 170px;
  height: 130px;
  background: #f4f4f4;
  float: left;
  margin-left: 10px;
}
.package,
.index-1DFa7_0 {
  color: red;
}
.index-1y1Q5_0 img {
  width: 120px;
  height: 80px;
  float: right;
}
.shop {
  display: flex;
  width: 100%;
  height: 36px;
  font-size: 14px;
  color: #000;
  justify-content: center;
  padding-top: 25px;
}
.shop::before {
  margin-right: 13px;
  margin-top: 9px;
  display: block;
  content: "";
  width: 20px;
  height: 2px;
  background-color: #999;
}
.shop::after {
  margin-left: 13px;
  margin-top: 9px;
  display: block;
  content: "";
  width: 20px;
  height: 2px;
  background-color: #999;
}
.filter-sort .selected[data-v-52820b2e] {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 14px;
  height: 14px;
  display: block;
}
.filter-sort {
  width: 100%;
  height: 340px;
  background: #fff;
  border-top: 1px solid #ddd;
  position: absolute;
  top: -190px;
  left: 0;
  z-index: 200;
}
.filter-sort span {
  font-size: 14px;
}
.filter-sort li {
  padding-left: 15px;
  height: 40px;
  line-height: 40px;
}

.filter-extend {
  width: 100%;
  height: 399px;
  background: #fff;
  border-top: 1px solid #ddd;
  position: absolute;
  top: 52px;
  left: 0;
  z-index: 200;
}
.morefilter-3-5h6_0 {
  margin: 20px 0 0 20px;
}
.morefilter-3-5h6_0 img {
  width: 15px;
  height: 15px;
  float: left;
  margin: 10px 0 0 20px;
}
.morefilter-l3S4A_0 {
  width: 111px;
  height: 35px;
  text-align: center;
  line-height: 35px;
}

.morefilter-3GXUR_0 {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 31.33%;
  -ms-flex: 0 0 31.33%;
  flex: 0 0 31.33%;
  height: 0.933333rem;
  height: 9.333333vw;
  font-size: 0.09rem;
  margin: 0.08rem 1%;
  margin: 0.8vw 1%;
  background: #fafafa;
}

.morefilter-3-5h6_0 dd,
.morefilter-3GXUR_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}

.morefilter-2DLty_0 {
  width: 100%;
  height: 43px;
}

.morefilter-39NFb_0 {
  display: block;
  width: 187px;
  height: 43px;
  color: #ddd;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
  float: left;
}
.morefilter-16ilq_0 {
  display: block;
  width: 188px;
  height: 43px;
  background: #00d762;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
  float: right;
}
</style>
