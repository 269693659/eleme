import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Index.vue'

Vue.use(Router)
import Discover from '@/pages/discover/Index.vue'
import Indent from '@/pages/indent/Index.vue'
import Mine from '@/pages/mine/Index.vue'
import Gold from '@/pages/discover/Gold.vue' 
import Search from '@/pages/search/Search.vue'
import Food from '@/pages/food/Food.vue'
import Ranking from '@/pages/ranking/Index.vue'
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      alias: '/',
      component: Home
    },
    {
      path:'/discover',
      name:'discover',
      component:Discover,
      children:[
        {
          path:"goldstop/1/2",
          component:Gold
        }
      ]
    },
    {
      path:'/indent',
      name:'indent',
      component:Indent
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/food',
      name:'food',
      component:Food
    },{
      path:'/ranking',
      name:'ranking',
      component:Ranking
    }
  ]

})
