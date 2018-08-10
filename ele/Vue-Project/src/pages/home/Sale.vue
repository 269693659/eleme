<template>
    <page class="page" style="top:0;bottom:0;z-index:20">
         <div class="main">
            
            <SaleStop></SaleStop>
            
        </div>   
    </page>
</template>

<script>
import { getSalePageCategoryData } from "@/services/foodService";
import SaleStop from '@/components/common/SaleStop'
export default {
    components:{
        SaleStop,
    },
    mounted(){
        getSalePageCategoryData()
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 800px;
    background: #fff;
}
</style>
