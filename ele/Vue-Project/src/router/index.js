import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Index.vue'

Vue.use(Router)
import Discover from '@/pages/discover/Index.vue'
import Indent from '@/pages/indent/Index.vue'
import Mine from '@/pages/mine/Index.vue'
import Search from '@/pages/search/Search.vue'
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
      component:Discover
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
    }
  ]

})
