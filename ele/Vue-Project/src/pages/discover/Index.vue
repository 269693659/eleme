<template>
    <!-- <page id="discover"> -->
        <div>
            发现
        </div>
    <!-- </page> -->
</template>

<script>
import {getSortList} from '@/services/indexserver'
export default {
    counted(){
         getSortList().then(result=>{
            console.log(result,"美食")
        })
    }
}
</script>

<style>

</style>
