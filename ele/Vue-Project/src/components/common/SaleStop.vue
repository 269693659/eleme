<template>

    <div class="saleStops">
        <!-- 商家 -->
            <div class="stop">
                <div class="minimg">
                    <img :src="item.minImg"/>
                </div>
                <div class="title">
                    <p>{{item.restaurant_name}}</p>
                    <span class="fee" v-for="(val,i) in item.recommend_reasons" :key="i">{{val.name}}</span>
                </div>
                <div class="msale">
                    <span>评分{{item.rating}}</span>
                    <span>|</span>
                    <span>月售{{item.recent_order_num}}</span>
                </div>
            </div>

            <!-- 套餐 -->
           
            <div class="food">
                <div class="maximg">
                    <img :src="item.maxImg"/>
                </div>
                <div class="text">
                    <p>{{item.footname}}</p>
                    <p style="font-size:12px;color:#999;padding-top:5px;">{{item.description}}</p>
                    <div class="money">
                        <span class="dol">￥</span>
                        <span class="pirce">{{item.price}}</span>
                        <span class="del" v-if="item.original_price">￥{{item.original_price}} </span>
                        <span class="activetip" v-if="item.discount_activity">{{item.discount_activity}}</span>
                    </div>
                    
                </div>
                <div class="add">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==">
                </div>
            </div>

            <!-- 隐藏的套餐 -->
            <div class="food" v-if="isshow" v-for="(val,i) in item.foods" :key="i">
                <div class="maximg">
                    <img :src="foodImg[i]"/>
                </div>
                <div class="text">
                    <p>{{val.name}}</p>
                    <p style="font-size:12px;color:#999;padding-top:5px;">{{val.description}}</p>
                    <div class="money">
                        <span class="dol">￥</span>
                        <span class="pirce">{{val.price}}</span>
                        <span class="del" v-if="val.original_price">￥{{val.original_price}} </span>
                        <span class="activetip" v-if="val.discount_activity">{{val.discount_activity}}</span>
                    </div>
                    
                </div>
                <div class="add">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==">
                </div>
            </div>


            <!-- 更多 -->
            <div class="more" @click="onIshowBut" v-if="item.more_active_num">
                <span ref="in" v-if="isshow==false">展开更多套餐 {{item.more_active_num}}个</span>
                <span ref="in" v-if="isshow==true">收起</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUBAMAAAAevyJ8AAAAGFBMVEUAAABmZmZnZ2dmZmZnZ2dmZmZmZmaAgICTqrbKAAAACHRSTlMA/lfr6fJLBMT+Jn8AAABhSURBVBjTdcqxDYAwDERRCxDUzgSmoKdgACQ2YAJGYP8KIZ/8C8QVPid+9sl4BI9uu2zwxsfsu/XuUcB9fUcDeOQs0KoA2QCWPEABWgEiAhABiAAkAUQAIkCWM7sy3faTB0qcCfeqJVkUAAAAAElFTkSuQmCC"/> 
            </div>
           
    </div>

</template>

<script>
export default {
    props:{
        item:Object
    },
    data(){
        return{
            isshow:false,
            foodImg:[]
        }
    },
    created(){
       
        for(var i = 0;i < this.item.foods.length;i++){
            
            var imgStr = this.item.foods[i].image_path
            var imgArr = imgStr.split('');
            
            imgArr.splice(1, 0, '/');
            imgArr.splice(4, 0, '/');

            let img = ''
            if (imgArr.join('').length == 37) {
                img = "//fuss10.elemecdn.com/" + imgArr.join('') + ".png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
            } else {
                img = "//fuss10.elemecdn.com/" + imgArr.join('') + ".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
            }
            this.foodImg.push(img)
        }
    },
    methods:{
        onIshowBut(){
            
            if(!this.isshow){
                this.isshow = true;
            }else{
                this.isshow = false
            }
           
        }        
    }
}
</script>

<style scoped>
     /* -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.80); */
    .saleStops{
        
        padding: 15px 10px;
        border-bottom: 1px solid rgb(238, 238, 238);
        background: #fff;
        
        
    }
    .stop{
        overflow: hidden;
    }
    .stop .minimg{
        width: 40px;
        height: 40px;
        float: left;
        border: 1px solid #ddd

    }
    .stop .minimg img{
        width: 100%;
    }
    .stop .title{
        float: left;
        margin-left: 10px;

    }
    .title .fee{
        margin-right: 4px;
        display: inline-block;
        font-size: 12px;
       
        padding: 0 4px;
        color:#a45b1c;
        border:1px solid #d1ab8d;
        
    }
    .stop .msale{
        font-size: 12px;
        float: right;
        color: #aaa;
    }
    .food{
        margin-top: 20px;
        display: flex;
        position: relative;
       
    }
    .food .maximg{
        width: 109px;
        height: 109px;
        /* overflow: hidden; */
    }
    .food .maximg img{
        width: 100%
    }
    .food .text{
        flex:1;
        margin-left: 10px;
        position: relative;
        
    }
    .food .del{
        display: inline-block;
        font-size: 12px;
        color: #999;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.90);
        text-decoration:line-through
    }
    .food .text p{
        font-size: 17px;
        
        
    }
    .food .money{
        position: absolute;
        bottom: 0
    }
    .food .dol{
        font-weight: bold;
        color:#b91f20;
    }
    .food .pirce{
         font-size: 18px;
         font-weight: bold;
         color:#b91f20;
         font-family: CSD;
    }
    .food .activetip{
        
        display: inline-block;
        font-size: 12px;
       
        padding: 0 4px;
        color:#666;
        border:1px solid #666;
    }
    .more{
        margin-top: 15px;
        /* margin-left: 119px; */
        text-align: center
    }
    .more span{
        color:#999;
        font-size: 14px;
        /* text-align: center */
        
    }
    .more img{
        display: inline-block;
        width: 8px;
    }
    .add{
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 0 ;
        right: 0;
    }
    .add img{
        width: 100%;
    }
</style>

