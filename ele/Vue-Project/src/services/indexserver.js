import axios from 'axios'
import API from '../api'

//restaurant定位接口商店及其详情
export function getRestaurantLocation() {
    return new Promise((resolve, reject) => {
        axios.get(API.RESTAURANT_LOCATION_API, {
            params: {
                latitude: 22.53199,
                longitude: 114.11768,
                offset: 0,
                limit: 8,
                extras: ["activities","tags"],
                extra_filters: "home",
                terminal: "h5",
                order_by: 5,
                rank_id:"",
                latitude:22.53199
            }
        })
            .then(response => {
                // let data = response.data.items.map(item=>{
                //     return {
                //         name: item.restaurant.name
                //         // imageUrl: item.imageUrl
                //     }
                //  console.log(item)   
                // })
                resolve(response.data.items);
            })
            .catch(error => {
                console.log('请求失败');
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
                // console.log(response.data);
                // let data = response.data.map(item=>{
                //     return {
                //         sort: item.inside_sort_filter,
                //         megList:item.outside_sort_filter
                //     }
                // })
                resolve(response.data);
            }) 
            .catch(error => {
                console.log('getSortList请求失败');
            })
    })
}