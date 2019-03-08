import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Admin from '@/views/admin/Admin.vue'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/regist/Register.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/views/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/views/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/views/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/views/regist',
      name: 'Register',
      component: Register
    }
  ]
})
