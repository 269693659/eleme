<template>
    <div class="navList">
        <ul>
            <li>首页</li>
            <li>发现</li>
            <li>订单</li>
            <li>我的</li>
        </ul>
    </div>
</template>

<script>
export default {

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
