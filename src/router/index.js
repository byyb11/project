import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/Index'
import Login from '@/page/Login'
import ContentIndex from '@/components/ContentIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      component: Index,
      meta: { requiresAuth: true },
      children: [{
        path: '/',
        name: 'ContentIndex',
        component: ContentIndex,
        meta: { requiresAuth: true }
      }]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
