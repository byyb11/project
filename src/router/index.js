import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/Index'
import Login from '@/page/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
