<template>
    <div class="navList" v-show="navShow">
        <ul>
            <li v-for="(navitem,i) in navList" :key="i"
             @click = "changePage(navitem.path,navitem.title,i)" 
            :class="{blue:item==i}"
             > 
             <p><i :class="navitem.picture"></i></p> 
            <span>{{navitem.title}}</span>
             </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: false,
            navList: [
                {title: '首页', path: '/home', picture:['iconfont','icon-changyonglogo40','homeicon']},
                {title: '发现', path: '/discover', picture:['iconfont','icon-faxian']},
                {title: '订单', path: '/indent', picture:['iconfont','icon-dingdan']},
                {title: '我的', path: '/mine', picture:['iconfont','icon-wode']},
            ],
            meg:'nulls',
            navShow:true,
            item:0
        }
    },
    created(){
         
    },
    methods:{
         changePage(path,title,i){
             this.item = i;
            this.$router.push(path);
            if(path=='/home'){
                title="深圳西部硅谷"
                this.$center.$emit('show-nav',title);
            }else{
                this.$center.$emit('show-nav',title);
            }   
            
        }
         
    }

}
</script>

<style>

    .navList{
        height:49px;
        width:100%;
        position: absolute;
        bottom:0;
        background:#fff;
        left:0;
        z-index:10
    }
    .navList ul{
        width:100%;
        height:49px;
        display:flex;
        border-top:1px solid #ddd;
    }
    .navList ul li{
        width:25%;
        color:#ccc;
        position: relative;
        text-align:center;
    }
    .navList ul p{
       line-height:10px;
       padding-top:14px;   
    }
    .navList ul p i{
        font-size:0.23rem;
    }
    .navList ul p .homeicon{
        font-size: 0.3rem;
    }
    .navList ul li span{
        position: absolute;
        bottom: 0.06rem;
        right: 0.35rem;
        font-size:0.08rem;
    }
    .navList ul .blue{
        color:rgb(60, 171, 255);
    }
</style>
