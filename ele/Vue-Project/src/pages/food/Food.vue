<template>
    <div class="food">
        <food-list></food-list>
        <worry-package></worry-package>
    </div>

</template>

<script>
import FoodList from '@/components/food/FoodList.vue'
import WorryPackage from '@/components/food/WorryPackage.vue'

export default {
    components:{
        FoodList,
        WorryPackage,
    },
    mounted(){
        
    }
}
</script>

<style>

</style>
