import axios from 'axios'

import API from '@/api/index.js'

/*
请求food页面的foodlist的数据：
接口功能：food页面的foodlist数据请求
接口参数：
latitude=22.53199
longitude=114.11768
entry_id=20004689
terminal=h5
*/
export function getFoodPageFoodListData(){

    return new Promise((resolve,reject)=>{


        axios.get(API.FOODPAGE_FOODLIST_API,{
            params:{
                latitude:22.53199,
                longitude:114.11768,
                entry_id:20004689,
                terminal:'h5'
            }
        }).then(response=>{
            resolve(response.data)
        }).catch(error=>{
            console.log(error);
        })
    })
}
/*
请求food页面的foodlist的category的数据：
接口功能：food页面的foodlist的category数据请求
接口参数：
latitude=22.53199
longitude=114.11768
*/
//https://h5.ele.me/restapi/shopping/v2/restaurant/category?latitude=22.533719&longitude=113.936091
export function getFoodPageCategoryData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.FOODPAGE_CATEGORY_API,{
            params:{
                latitude:22.533719,
                longitude:113.936091
            }
        }).then(response=>{
            let data=[];
            let str=[];
            response.data.map((item,index)=>{
                if(index>0){
                    data.push(item);
                    item.sub_categories.map(value=>{
                        str=value.image_url.split('');
                        str.splice(1,0,'/');
                        str.splice(4,0,'/');
                        if(str.length===37){
                            value.image_url="//fuss10.elemecdn.com/"+str.join('')+".png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/";
                        }else{
                            value.image_url="//fuss10.elemecdn.com/"+str.join('')+".jpeg?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/";
                        }
                    })
                }              
            })
            resolve(data);
        }).catch(error=>{
            console.log(error);
        })
    })
}
/*sale_list销售列表
type=quality_meal
latitude=22.53199
longitude=114.11768
*/
//https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=22.533719&longitude=113.936091
export function getSaleListData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.SALE_LIST_API,{
            params:{
                type:'quality_meal',
                latitude:22.533719,
                longitude:113.936091
            }
        }).then(response=>{
            let data=[];
            let str=[];
            response.data.query_list.map((item,index)=>{
                if(index<3){
                    item.foods.map((value,index)=>{
                        if(index==0){
                            str=value.image_path.split('');
                            str.splice(1,0,'/');
                            str.splice(4,0,'/');
                            if(str.length==37){
                                value.image_path="//fuss10.elemecdn.com/"+str.join('')+".png?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/";
                            }else{
                                value.image_path="//fuss10.elemecdn.com/"+str.join('')+".jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/";
                            }
                            data.push(value);
                        }
                    })
                }
            })
            resolve(data);
        }).catch(error=>{
            console.log(error);
        })
    })
}