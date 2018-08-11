import axios from 'axios'
import API from '../api'

//restaurant定位接口商店及其详情
export function getRestaurantLocation(offset,limit) {
    return new Promise((resolve, reject) => {
        axios.get(API.RESTAURANT_LOCATION_API, {
            
            params: {
                latitude:22.626435,
                longitude:113.838118,
                offset,
                limit,
                extras: ["activities","tags"],
                extra_filters: "home",
                terminal: "h5",
                order_by: 5,
                rank_id:"",
                
            }
        })
            .then(response => {
                let data = response.data.items.map((item,index)=>{
                    let imgStr = item.restaurant.image_path ;
                    let imgArr = imgStr.split('');
                    imgArr.splice(1,0,'/' );
                    imgArr.splice(4,0,'/' );
                    
                    
                    let img = ''
                    if(imgArr.join('').length==37){
                        img="//fuss10.elemecdn.com/"+imgArr.join('')+".png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
                    }else{
                        img="//fuss10.elemecdn.com/"+imgArr.join('')+".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
                    }
                    return {
                        //商家名称
                        name: item.restaurant.name,
                        //配送费 
                        float_delivery_fee:item.restaurant.float_delivery_fee,
                        //保 && 票字
                        supports:item.restaurant.supports,
                        //评分
                        rating:item.restaurant.rating,
                        //广告
                        recommend:item.restaurant.recommend,
                        //品牌
                        is_premium:item.restaurant. is_premium,
                        //距离
                        distance:item.restaurant.distance,
                        //时间
                        order_lead_time:item.restaurant.order_lead_time,
                        //单量
                        recent_order_num:item.restaurant.recent_order_num,
                        //蜂鸟专送
                        delivery_mode:item.restaurant.delivery_mode,
                        //口碑人气好店  ->对象
                        recommend:item.restaurant.recommend,
                        //起送价
                        float_minimum_order_amount:item.restaurant.float_minimum_order_amount,
                        //菜式类型 & 品质联盟 -->数组
                        support_tags:item.restaurant.support_tags,
                        //活动信息  -->数组
                        activities:item.restaurant.activities,
                        //图片
                        image_path:img,
                     }
                     
                })
                
                resolve(data);
                
            })
            .catch(error => {
                console.log('请求失败');
                console.log(error);
            })
    })
}


//本地经纬度

export function getAddressLocation() {
    return new Promise((resolve, reject) => {
        axios.get(API.ADDRESS_LOCATION_API, {
            params: {
                latitude: 22.53199,
                longitude: 114.11768
            }
        })
            .then(response => {
                // console.log(response);
                // let data = response.data.data.billboards.map(item=>{
                //     return {
                //         id: item.id,
                //         imageUrl: item.imageUrl
                //     }
                // })
                resolve(response.data);
            })
            .catch(error => {
                console.log('getAddressLocation请求失败');
            })
    })
}
//swiper

export function getSwiperList() {
    return new Promise((resolve, reject) => {
        axios.get(API.SWIPER_LIST_API, {
            params: {
                latitude: 22.53199,
                longitude: 114.11768,
                templates: ["main_template","favourable_template","svip_template"],
                terminal: "h5"
            }
        })
            .then(response => {
                // console.log(response.data[0].entries);
                // let arr=response.data[0].entries;
                // let data = response.data(item=>{
                //     return {
                //         id: item.id,
                //         imageUrl: item.imageUrl
                //     }
                // })
                resolve(response.data[0].entries);
            })
            .catch(error => {
                console.log('getSwiperList请求失败');
            })
    })
}
//attribute属性

export function getAttributeLocation() {
    return new Promise((resolve, reject) => {
        axios.get(API.ATTRIBUTE_SMALL_API, {
            params: {
                latitude:22.626024,
                longitude:113.837884,
                terminal:"h5"
            }
        })
            .then(response => {
                // console.log(response);
                // let data = response.data.data.billboards.map(item=>{
                //     return {
                //         id: item.id,
                //         imageUrl: item.imageUrl
                //     }
                // })
                let data = response;
                resolve(data);
            })
            .catch(error => {
                console.log('getAttributeLocation请求失败');
            })
    })
}
//排序
export function getSortList() {
    return new Promise((resolve, reject) => {
        axios.get(API.SORT_LIST_API, {
            params: {
                latitude: 22.53199,
                longitude: 114.11768,
                terminal: "h5"
            }
        }).then(response => {
                var arr = [];
                // console.log(response.data.inside_sort_filter);
                let data = response.data.inside_sort_filter.map(item=>{
                  arr.push(item.name);
                  return{
                      "abc" : arr,
                  }
                })
                resolve(data);
            }) 
            .catch(error => {
                console.log('getSortList请求失败');
            })
    })
}


/*
商家详情：
https://restapi.ele.me/shopping/v2/menu?restaurant_id=1334126
商家评论：
https://restapi.ele.me/ugc/v2/restaurants/1334126/ratings/tags

https://h5.ele.me/msite/food/#search_source=1&activity_id=10016665&navType=0&color_type=1&target_name=%E7%BE%8E%E9%A3%9F&entry_id=20004689&page_type=2&business_flag=1&animation_type=1&restaurant_category_ids=209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264&geohash=ws0bwqy7d3kj
https://h5.ele.me/msite/food/#search_source=1&activity_id=10020785&navType=0&color_type=2&target_name=%E6%99%9A%E9%A4%90&entry_id=20008121&page_type=2&business_flag=17&animation_type=1&restaurant_category_ids=209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229&geohash=ws0bwqy7d3kj

eleme://restaurants?search_source=1&activity_id=10016665&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D&navType=0&color_type=1&target_name=%E7%BE%8E%E9%A3%9F&entry_id=20004689&page_type=2&business_flag=1&animation_type=1
eleme://restaurants?search_source=1&activity_id=10020785&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229%5D%7D&navType=0&color_type=2&target_name=%E6%99%9A%E9%A4%90&entry_id=20008121&page_type=2&business_flag=17&animation_type=1
*/