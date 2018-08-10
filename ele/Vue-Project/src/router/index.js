import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Index.vue'

Vue.use(Router)
import Discover from '@/pages/discover/Index.vue'
import Indent from '@/pages/indent/Index.vue'
import Mine from '@/pages/mine/Index.vue'
import Search from '@/pages/search/Search.vue'
import Food from '@/pages/food/Food.vue'
import Gold from '@/components/discover/Gold.vue'
import Coment from '@/components/discover/Commend.vue'
import Godetail from '@/components/home/godetail.vue'
import Sale from '@/pages/home/Sale.vue'
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      alias: '/',
      component: Home,
      children:[
        {
          path: 'sale',
          name: 'sale',
          component: Sale,
        }
      ]
    },
    // {
    //   path:'/sale',
    //   name:'sale',
    //   component:Sale,
    // },
    {
      path:'/discover',
      name:'discover',
      component:Discover,
    },
    {
      path:"/goldstop/1",
      name:'glod',
      component:Gold
    },
    {
      path:"/goldstop/2",
      name:"Coment",
      component:Coment
    },
    { 
      path:"/godetail/1",
      name:"Godetail",
      component:Godetail
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
    },
    {
      path:"**",
      redirect:'/home'//重定向
    }
  ]

})
