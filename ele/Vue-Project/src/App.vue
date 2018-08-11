<template>
  <div id="app">
    <AppHeader></AppHeader>

    <router-view/>

    <AppNav ></AppNav>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
import AppNav from "@/components/common/AppNav";
export default {
  name: "App",
  components: {
    AppHeader,
    AppNav,
  },
  errorCaptured(error){
    console.log(error);
  }
};
</script>

<style>

  #app {
    width: 100%;
    height: 100%;
    padding: 44px 0;
    box-sizing: border-box;
  }
  .topsearch{
    position: relative;
    top: -44px;
    left:0;
    z-index: 20;
  }
  .search{
    height:44px;
    width:100%;
    background:#0af;
    padding-top: 7px;
      
  }
  .search .aBox{
    width:90%;
    height:36px;
    margin:0  auto;
    background:#fff;
    text-align:center;
    line-height:36px;
    color:#ccc;
  }
  .buttom{
        width: 40px;
        height: 40px;
        background: #fff;
        border: 2px solid #eeeeee;
        border-radius: 50%;
        position: fixed;
        bottom: 70px;
        right: 15px;
        z-index: 30;
        line-height: 50px;
        text-align: center;
    }
    .buttom img{
        opacity: 0.6;
        display: inline-block;
        width: 55%;
    }
</style>
