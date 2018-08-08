<template>
    <div class="page" ref="page">
        <div class="page-wrap">

            <slot/>

        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        let scroll = new IScroll(this.$refs.page, {
            //判断外部是否需要监听正在滚动的位置
            // probeType: this.onScroll?3:0
            probeType:3
        });
        this.scroll = scroll;

        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        
        scroll.on('scroll', ()=>{
            // let disY = scroll.y-scroll.maxScrollY;
            // this.onScroll(disY);
            // console.log(scroll.y)
        })
    }
}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 49px;
  background: #ebebeb;
  overflow: hidden;
}
</style>
