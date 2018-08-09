<template>
    <div class="commend">
        <img src="https://fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif" alt="">
        <p class="plesub">请先登录</p>
        <p><span>立即登录</span></p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.commend{
  width: 100%;
  height:100%;
  position: absolute;
  z-index: 999;
  background: #fff;
  text-align: center;
  /* overflow: hidden; */
}
.commend img{
    width:200px;
    height:200px;
    margin:170px auto 0;
}
.commend .plesub{
    font-size:17px;
    color: #6a6a6a;
    font-weight: 400;
}
.commend p span{
    display:block;
    margin:10px auto;
    padding:9px 17px;
    color:#fff;
    width:80px;
    background:#56d176;
}
</style>
