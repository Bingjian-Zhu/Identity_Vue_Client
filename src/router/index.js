import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CallBack from '@/components/CallBack'
import Home from '@/components/Home'

Vue.use(Router)
  
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CallBack',
      name: 'CallBack',
      component: CallBack
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
