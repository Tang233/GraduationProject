import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav.vue'
import Admin from '@/views/Admin.vue'
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
