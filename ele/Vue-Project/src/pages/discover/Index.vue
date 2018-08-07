<template>
    <!-- <page id="discover"> -->
        <div>
            发现
        </div>
    <!-- </page> -->
</template>

<script>
import {getSaleList} from '../../services/indexserver'
export default {
    counted(){
         getSaleList().then(result=>{
            console.log(result,"美食")
        })
    }
}
</script>

<style>

</style>
