<template>
    <div class="header"><p>{{tip}}</p></div>
</template>

<script>
export default {
  data() {
    return {
      tip:"定位"
    };
  },
  watch:{
  },
  mounted() {
     this.$center.$on('show-nav',title=>{
         this.tip = title;
     });
  }
};
</script>

<style>
.header {
  height: 44px;
  line-height:44px;
  text-align:center;
  width: 100%;
  background: #0af;
  position: fixed;
  top: 0;
  left: 0;
  z-index:0;
}
.header p{
  color:#fff;
  font-size:18px;
  font-weight:bold;
}
</style>
