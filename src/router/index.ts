import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        // footer: () => import('../components/Footer.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import('../views/AboutView.vue'),
        // footer: () => import('../components/Footer.vue')
      }
    },
    {
      path: '/products/:id',
      name: 'products',
      components: {
        default: () => import('../views/ProductsView.vue'),
        // footer: () => import('../components/Footer.vue')
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () => import('../views/ContactView.vue'),
        // footer: () => import('../components/Footer.vue')
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
})

// 路由切换开始时启动进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.name === 'products') {
    setTimeout(() => {
      next()
    }, 0)
  } else {
    next()
  }
})

// 路由切换结束时关闭进度条
router.afterEach(() => {
  NProgress.done()
})

NProgress.configure({
  showSpinner: false, // 不显示右上角旋转小圈
  trickleSpeed: 200   // 自动递增间隔，默认200ms
})

export default router
