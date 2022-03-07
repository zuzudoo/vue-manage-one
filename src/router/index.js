import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from "../views/home/Home"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: "Main",
    component: () => import('../views/Main'),
    redirect: '/home',
    // 设置子页面
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('../views/home/index')
      // },
      // {
      //   path: '/user',
      //   name: "user",
      //   component: () => import('../views/user/index'),
      // },
      // {
      //   path: '/mall',
      //   name: "mall",
      //   component: () => import('../views/mall/index'),
      // },
      // {
      //   path: '/page1',
      //   name: "page1",
      //   component: () => import('../views/other/pageOne'),
      // },
      // {
      //   path: '/page2',
      //   name: "page2",
      //   component: () => import('../views/other/pageTwo'),
      // },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue")
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出路由
export default router