<template>
    <page class="page" style="top:0;bottom:0;z-index:20">
         <div class="main">
            
            <SaleStop v-for="(val,i) in saleData" :key="i" :item="val"></SaleStop>
            
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
    data(){
        return{
           saleData:[] 
        }
    },
    mounted(){
        getSalePageCategoryData().then((item)=>{
            this.saleData = item;
            console.log(item)
        })
    }
}
</script>

<style scoped>

</style>
