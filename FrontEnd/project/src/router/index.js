import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav.vue'
import AdoPage from '@/components/AdoPage.vue'
import ApplyAdoption from '@/components/ApplyAdoption.vue'
import Unreviewed from '@/components/Unreviewed.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import AdminHome from '@/views/AdminHome.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ChangePwd from '@/views/ChangePwd.vue'
import UserPage from '@/views/UserPage.vue'
import UserNotFound from '@/views/UserNotFound.vue'
// import AvatorTailor from "@/components/avator-tailor.vue"
import NewAdoption from "@/views/NewAdoption.vue"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/HelloWorld',
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
        path: '*'
      }]
    },
    {
      path: '/components/ApplyAdoption',
      name: 'ApplyAdoption',
      component: ApplyAdoption,
      children:[{
        path: '*'
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
      path: '/components/Unreviewed',
      name: 'Unreviewed',
      component: Unreviewed,
      children:[{
        path:"*"
      }]
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/views/ChangePwd',
      name: 'ChangePwd',
      component: ChangePwd,
      children:[{
        path:"*"
      }]
    },
    {
      path: '/views/UserPage',
      name: 'UserPage',
      component: UserPage,
      children:[{
        path:"*"
      }]
    },
    {
      path: '/views/UserNotFound',
      name: 'UserNotFound',
      component: UserNotFound,
      children:[{
        path:"*"
      }]
    },
    {
      path: '/NewAdoption',
      name: "NewAdoption",
      component: NewAdoption
    }
  ]
})
