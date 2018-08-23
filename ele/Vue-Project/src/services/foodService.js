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
                    data.push(item)
                }             
            })
            resolve(data)
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

        })
    })
}
/*
sale_list销售列表
type=quality_meal
latitude=22.53199
longitude=114.11768
params=%7B%7D
*/
export function getSalePageCategoryData() {
    return new Promise((resolve, reject) => {
        axios.get(API.SALE_LIST_API, {
            params: {
                latitude: 22.626435,
                longitude: 113.838118,
                type:'quality_meal'
            }
        }).then(response => {
            // console.log(response.data.query_list)
            //图片处理-->分装函数
            // 传入图片地址参数
            function modifyImg(imgStr){
                let imgArr = imgStr.split('');
                imgArr.splice(1, 0, '/');
                imgArr.splice(4, 0, '/');

                let img = ''
                if (imgArr.join('').length == 37) {
                    img = "//fuss10.elemecdn.com/" + imgArr.join('') + ".png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
                } else {
                    img = "//fuss10.elemecdn.com/" + imgArr.join('') + ".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
                }

                return img
            }
            //遍历输出
            let data = response.data.query_list.map((item, index) => {
                var maxImg = modifyImg(item.foods[0].image_path)
                var minImg = modifyImg(item.restaurant.image_path)
                
                return {
                    minImg,
                    maxImg,
                    //全部活动
                    // allfoods:item.foods,
                    foods:item.foods.slice(1),
                    //食品名称
                    footname:item.foods[0].name,
                    // 原价
                    original_price:item.foods[0].original_price,
                    // 优惠价
                    price: item.foods[0].price,
                    // 店铺名称
                    restaurant_name: item.foods[0].restaurant_name,
                    // 评分
                    rating: item.restaurant.rating,
                    // 配送飞快
                    recommend_reasons: item.restaurant.recommend_reasons,
                    // 月销
                    recent_order_num: item.restaurant.recent_order_num,
                    //跟多活动个数
                    more_active_num: item.foods.length - 1,
                    //描述
                    description: item.foods[0].description,
                    //满减活动
                    discount_activity: item.foods[0].discount_activity,

                }
            })
            // console.log(data)
            resolve(data);
        }).catch(error => {
            console.log(error);
        })
    })
}