<template>
    <div class="page" ref="page">
        <div class="page-wrap">

            <slot/>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        onScroll:Function
    },
    methods:{
        refreshDOM(){
            this.scroll.refresh()
        },
        scrollTop(){
            this.scroll.scrollTo(0, 0, 200);
        }
    },
    mounted(){
        let scroll = new IScroll(this.$refs.page, {
            //判断外部是否需要监听正在滚动的位置
            probeType: this.onScroll?3:0
            
        });
        this.scroll = scroll;

        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        
        scroll.on('scroll', ()=>{
            // console.log(scroll.y)
            let disY = scroll.y-scroll.maxScrollY;
            
            this.onScroll(disY,scroll.y);
        })
    }
}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  bottom:49px;
  background: #fff;
  overflow: hidden;
  background: #fff;
}
</style>
