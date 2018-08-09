


//首页轮播图的数据
/*
接口功能： 请求首页轮播图的数据
接口参数：latitude=22.547,
longitude=114.085947,
templates[]=main_template,
templates[]=favourable_template,
templates[]=svip_template,
terminal=h5
*/
//https://h5.ele.me/restapi/shopping/openapi/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
const HOME_BANNER_API='/restapi/shopping/openapi/entries'


 /*restaurant定位接口
接口功能：商店及其详情
接口参数：latitude=22.53199
longitude=114.11768
offset=0
limit=8
extras[]=activities
extras[]=tags
extra_filters=home
rank_id=&terminal=h5

*/
const  RESTAURANT_LOCATION_API = "/restapi/shopping/v3/restaurants";

/*
address地址接口
接口功能：本地地址（经纬度）
latitude=22.53199
longitude=114.11768

*/ 
const ADDRESS_LOCATION_API = "/restapi/bgs/poi/reverse_geo_coding";


/*
swiper接口
接口功能：轮播
latitude=22.53199
longitude=114.11768
templates[]=main_template
templates[]=favourable_template
templates[]=svip_template
terminal=h5
https://h5.ele.me/restapi/shopping/openapi/entries
?latitude=22.53199&longitude=114.11768&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
*/
const SWIPER_LIST_API = "/restapi/shopping/openapi/entries"
/*
attribute属性
接口功能：小的功能，饭店的属性配置

latitude=22.53199
longitude=114.11768
terminal=h5
西部硅谷
latitude=22.626024
longitude=113.837884
terminal=h5
*/ 
const ATTRIBUTE_SMALL_API = "/restapi/shopping/v1/restaurants/filter-bar/attributes";

/*
sort排序：
接口功能：排序筛选
接口参数：
latitude=22.53199
longitude=114.11768
terminal=h5
*/
const SORT_LIST_API = "/restapi/shopping/v1/restaurants/outside_filter/attributes";

/*
foods美食晚餐等的信息：
接口功能：美食晚餐页面的数据请求
接口参数：
latitude=22.53199
longitude=114.11768
templates[]=main_template
templates[]=favourable_template
templates[]=svip_template
terminal=h5

*/
const FOODS_LIST_API = "/restapi/shopping/openapi/entries";

/*sale_list销售列表
type=quality_meal
latitude=22.53199
longitude=114.11768
*/
const SALE_LIST_API ="/restapi/shopping/v1/sale_list_index"
/*https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/
https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/
*/
/*
请求热门搜索的数据：
接口功能：搜索页面的数据请求
接口参数：
latitude=22.53199
longitude=114.11768
// https://h5.ele.me/restapi/shopping/v3/hot_search_words?latitude=22.547&longitude=114.085947
*/
const HOT_SEARCH_API="/restapi/shopping/v3/hot_search_words"
/*
请求food页面的foodlist的数据：
接口功能：food页面的foodlist数据请求
接口参数：
latitude=22.53199
longitude=114.11768
entry_id=20004689
terminal=h5
*/
const FOODPAGE_FOODLIST_API='/restapi/shopping/v2/foods_page/sift_factors'
/*
请求food页面的foodlist的category的数据：
接口功能：food页面的foodlist的category数据请求
接口参数：
latitude=22.53199
longitude=114.11768
*/
//https://h5.ele.me/restapi/shopping/v2/restaurant/category?latitude=22.533719&longitude=113.936091
const FOODPAGE_CATEGORY_API='/restapi/shopping/v2/restaurant/category'
export default {
    RESTAURANT_LOCATION_API,
    ATTRIBUTE_SMALL_API,
    SWIPER_LIST_API,
    SORT_LIST_API,
    FOODS_LIST_API,
    ADDRESS_LOCATION_API,
    SALE_LIST_API,
    HOME_BANNER_API,
    HOT_SEARCH_API,
    FOODPAGE_FOODLIST_API,
    FOODPAGE_CATEGORY_API
}