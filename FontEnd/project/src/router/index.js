import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav.vue'
import AdoPage from '@/components/AdoPage.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import AdminHome from '@/views/AdminHome.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserPage from '@/views/UserPage.vue'

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
      path: '/components/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/components/AdoPage',
      name: 'AdoPage',
      component: AdoPage,
      children:[{
        path:"*"
      }]
    },
    {
      path: '/views/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/views/AdminHome',
      name: 'AdminHome',
      component: AdminHome
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
    },
    {
      path: '/views/UserPage',
      name: 'UserPage',
      component: UserPage,
      children:[{
        path:"*"
      }]
    }
  ]
})
