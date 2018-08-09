<template>
    <div class="package">
        <div class="header">
            <h4>省心套餐</h4>
            <span>更多&nbsp;></span>
        </div>
        <div v-for="(item,index) in packageData" :key="index" class="packageItem">
            <div class="image">
                <img src="" alt="">
            </div>
            <div class="content">
                <h5>酱香原味黄焖鸡米饭+龙骨汤</h5>
                <p><span>169</span>人好评</p>
                <p>
                    <span class="">¥18.9</span>
                    <span class="">¥37</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            packageData:[]
        }
    }
}
</script>

<style>

</style>
