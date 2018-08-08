<template>
    <header id="title">
        <div class="title-left" @click="goHomePage()">返回</div>
        <h1 class="headline">{{msg}}}</h1>
    </header>
</template>

<script>
export default {
    data(){
        return{
            msg:'美食'
        }
    },
    methods:{
        goHomePage(){
            this.$router.push({
                path:'/home'
            })
        }
    }
}
</script>

<style scoped>
#title{
    width: 100%;
    height: 88px;
    background: #0085ff;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
}
.title-left{
    width:88px;
    height: 88px;
}
.headline{
    text-align: center;
    line-height: 88px;
    font-weight: 900;
    flex: 1;
}
</style>
