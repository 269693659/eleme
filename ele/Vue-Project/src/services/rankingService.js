import axios from 'axios'
import API from '@/api/index.js'

/*sale_list销售列表
type: quality_meal
latitude: 22.533719
longitude: 113.936091
params: {"user_id":1142191018}
*/
//https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=22.533719&longitude=113.936091&params=%7B%22user_id%22%3A1142191018%7D

export function getRankingPageData(){
    return new Promise((resolve,reject)=>{

        axios.get(API.SALE_LIST_API,{
            params:{
                type: 'quality_meal',
                latitude: 22.533719,
                longitude: 113.936091,
                params: {"user_id":1142191018}
            }
        }).then(response=>{
            let str=[];
            let arr=[];
            response.data.query_list.map((item,index)=>{
                arr=item.restaurant.image_path.split('');
                arr.splice(1,0,'/');
                arr.splice(4,0,'/');
                if(arr.length===37){
                    item.restaurant.image_path="//fuss10.elemecdn.com/"+arr.join('')+".png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/";
                }else{
                    item.restaurant.image_path="//fuss10.elemecdn.com/"+arr.join('')+".jpeg?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/";
                }
                item.foods.map((value,index)=>{
                    str=value.image_path.split('');
                    str.splice(1,0,'/');
                    str.splice(4,0,'/');
                    if(str.length===37){
                        value.image_path="//fuss10.elemecdn.com/"+str.join('')+".png?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/";
                    }else{
                        value.image_path="//fuss10.elemecdn.com/"+str.join('')+".jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/";
                    }
                })
            })
            resolve(response.data);
        }).catch(error=>{
            console.log(error);
        })
    })
}