import axios from 'axios'
import API from '../api'

/*sale_list销售列表 */
export function getSaleList() {
    return new Promise((resolve, reject) => {
        axios.get(API.SALE_LIST_API, {
            params: {
                type: "quality_meal",
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
                resolve(response);
            })
            .catch(error => {
                console.log('请求失败');
            })
    })
}
