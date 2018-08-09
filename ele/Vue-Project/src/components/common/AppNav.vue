<template>
    <div class="navList">
        <ul>
            <li v-for="(navitem,i) in navList" :key="i"
             @click = "changePage(navitem.path,navitem.title)"> <p><i :class="navitem.picture"></i></p> {{navitem.title}}
            
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
                {title: '首页', path: '/home', picture:['iconfont','icon-changyonglogo40','box']},
                {title: '发现', path: '/discover', picture:['iconfont','icon-faxian']},
                {title: '订单', path: '/indent', picture:['iconfont','icon-dingdan']},
                {title: '我的', path: '/mine', picture:['iconfont','icon-wode']},
            ],
            meg:'nulls'
        }
    },
    created(){
         
    },
    methods:{
         changePage(path,title){
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
        height:44px;
        width:100%;
        position: fixed;
        bottom:0;
        background:#fff;
        left:0;
        z-index:10
    }
    .navList ul{
        width:100%;
        height:44px;
        display:flex;
        border-top:1px solid #ddd;
    }
    .navList ul li{
        width:25%;
        font-size:12px;
        text-align:center;
    }
    .navList ul p{
       line-height:10px;
       padding-top:11px;
       
    }
    .navList ul p .box{
       font-size: 25px;
       color:rgb(60, 171, 255);  
    }
    .navList ul li.active{
        color: #0089dc;
    }
    
</style>
