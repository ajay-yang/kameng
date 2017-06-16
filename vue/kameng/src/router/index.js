import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Uhome from '@/components/home/uhome'
import Adminhome from '@/components/home/adminhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/uhome',
      name: 'uhome',
      component: Uhome
    }
    ,
    {
      path: '/adminhome',
      name: 'adminhome',
      component: Adminhome
    }
  ]
})
