<template>
    <div class="navList">
        <ul>
            <li v-for="(navitem,i) in navList" :key="i"
             @click = "changePage(navitem.path)">{{navitem.title}}
             </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navList: [
                {title: '首页', path: '/home'},
                {title: '发现', path: '/discover'},
                {title: '订单', path: '/indent'},
                {title: '我的', path: '/mine'},
            ]
        }
    },
    methods:{
         changePage(path){
            this.$router.push(path);
        }
    }

}
</script>

<style>
    .navList{
        height:44px;
        width:100%;
        position: absolute;
        bottom:0;
        left:0;
    }
    .navList ul{
        width:100%;
        height:44px;
        display:flex;
        border-top:1px solid #ddd;
    }
    .navList ul li{
        width:25%;
        text-align:center;
        line-height:44px;
    }
</style>
