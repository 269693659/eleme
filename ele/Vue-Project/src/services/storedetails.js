import axios from 'axios'

import API from '@/api/index.js'

export function getStoreDetails(){
    return new Promise((resolve,reject)=>{
        axios.get(API.DETAILS_STORE_API,{
            params:{

            }
        })
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            console.log("getStoreDetails错误")
        })
    })
}