import axios from 'axios'

import API from '@/api/index.js'


/*
接口功能： 请求首页轮播图的数据
接口参数：latitude=22.547,
longitude=114.085947,
templates[]=main_template,
templates[]=favourable_template,
templates[]=svip_template,
terminal=h5
*/
//首页轮播图的数据
export function getHomeBannerData(){
   return new Promise((resolve,reject)=>{

        //请求轮播图数据
        axios.get(API.HOME_BANNER_API,{
            params:{
                latitude:22.547,
                longitude:114.085947,
                templates:['main_template','favourable_template','svip_template'],
                terminal:'h5'
            }
        }).then(response=>{
            console.log('请求成功');
            let entriesArr=response.data[0].entries;
            let data=[[],[]];
            let str=[];
            entriesArr.map((item,index)=>{
                // console.log(item.image_hash)
                str=item.image_hash.split('');
                str.splice(1,0,'/');
                str.splice(4,0,'/');
                item.image_hash="//fuss10.elemecdn.com/"+str.join('')+".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/";

                if(index<10){
                    data[0].push(item);
                }else{
                    data[1].push(item);
                }
                return data;
            })
            resolve(data);

        }).catch(error=>{
            console.log('请求失败');
            console.log(error);
        })
    })
}