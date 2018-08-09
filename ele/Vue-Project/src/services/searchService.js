import axios from 'axios'

import API from '@/api/index.js'

//请求热门搜索的数据
// https://h5.ele.me/restapi/shopping/v3/hot_search_words?latitude=22.547&longitude=114.085947
export function getHotSearchData(){

    return new Promise((resolve,reject)=>{

        axios.get(API.HOT_SEARCH_API,{
            params:{
                latitude:22.547,
                longitude:114.085947
            }
        }).then(response=>{
            //console.log('请求成功');
            //console.log(response.data);
            resolve(response.data)
        }).catch(error=>{
            console.log('请求失败');
            console.log(error);
        })
    })
}
