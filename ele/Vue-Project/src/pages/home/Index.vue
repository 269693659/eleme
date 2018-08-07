<template>
    <!-- <page id="home"> -->
        <div class="main">
            <div class="search">
                <div class="aBox"><p>搜索饿了么商家、商品的名称</p></div>
            </div>
<img src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg
" alt="" srcset="">
        </div>
    <!-- </page> -->
</template>

<script>
import {
  getRestaurantLocation,
  getAddressLocation,
  getSwiperList,
  getAttributeLocation,
  getSortList
} from "../../services/indexserver";
import { getSaleList } from "../../services/discoverserver";
export default {
  mounted() {
    // 请求轮播图的数据
    getRestaurantLocation().then(result => {
      console.log(result, "饭店信息");
    });
    getAddressLocation().then(result => {
      console.log(result, "本地地址");
    });
    getAttributeLocation().then(result => {
      console.log(result, "小属性");
    });
    getSwiperList().then(result => {
      console.log(result, "轮播");
    });
    getSortList().then(result => {
      console.log(result, "排序");
    });
    getSaleList().then(result => {
      console.log(result, "美食");
    });
  }
};
</script>

<style>
.search {
  height: 51px;
  width: 100%;
  background: #0af;
  position: relative;
}
.search .aBox {
  width: 90%;
  height: 36px;
  position: absolute;
  top: 7px;
  left: 5%;
  background: #fff;
  text-align: center;
  line-height: 36px;
  color: #ccc;
}
</style>
