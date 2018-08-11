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
/*
请求搜索框的数据：
接口功能：搜索页面搜索框的数据请求
接口参数：
kw: 奶
latitude: 22.533719
longitude: 113.936091
city_id: 11
https://h5.ele.me/restapi/shopping/v1/typeahead?kw=%E5%A5%B6&latitude=22.533719&longitude=113.936091&city_id=11
*/
export function getSearchTypeaheadData(word){
    return new Promise((resolve,reject)=>{
        axios.get(API.SEARCH_TYPEAHEAD_API,{
            params:{
                kw: word,
                latitude: 22.533719,
                longitude: 113.936091,
                city_id: 11,
            }
        }).then(response=>{
            let arr=[];
            response.data.restaurants.map(item=>{
                arr=item.image_path.split('');
                arr.splice(1,0,'/');
                arr.splice(4,0,'/');
                if(arr.length===37){
                    item.image_path="//fuss10.elemecdn.com/"+arr.join('')+".png?imageMogr/format/webp/thumbnail/!48x48r/gravity/Center/crop/48x48/";
                }else{
                    item.image_path="//fuss10.elemecdn.com/"+arr.join('')+".jpeg?imageMogr/format/webp/thumbnail/!48x48r/gravity/Center/crop/48x48/";
                }
            })
            //console.log(response.data);
            resolve(response.data);
        }).catch(error=>{
            console.log(error);
        })
    })
}