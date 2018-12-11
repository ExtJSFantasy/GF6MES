import Vue from 'vue'
import Router from 'vue-router'

import taskList from '@/views/taskList'
import login from '@/views/login'
import instruction from '@/views/instruction'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'station',
      component: require('@/views/station').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/taskList',
      name: 'taskList',
      component: taskList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: instruction
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
