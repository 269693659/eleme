<template>
    <div class="food">
        <app-header></app-header>
        <food-list></food-list>
    </div>

</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import FoodList from '@/components/food/FoodList.vue'


export default {
    components:{
        AppHeader,
        FoodList,
    },
    mounted(){
        
    }
}
</script>

<style>

</style>
