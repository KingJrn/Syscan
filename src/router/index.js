import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // TOP NAV VIEWS
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/report',
      name: 'compliance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComplianceView.vue')
    },
    {
      path: '/all-notification',
      name: 'Notification',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AllNotification.vue')
    },
    {
      path: '/admin',
      name: 'Administration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Admin.vue')
    },
    // SIDEBAR PAGES
    {
      path: '/scan',
      name: 'Scanner',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Scan.vue')
    },
    {
      path: '/remediation',
      name: 'Remediation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Remediation.vue')
    },
    {
      path: '/inventory',
      name: 'Inventory',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Inventory.vue')
    },
    {
      path: '/node-report',
      name: 'NodeReport',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/NodeReport.vue')
    },
    // Auth Screens
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../auth/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../auth/register.vue')
    },
    {
      path: '/forgot-password',
      name: 'Forgot-Password',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../auth/forgotPassword.vue')
    },
    {
      path: '/error404',
      name: 'Error404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../auth/error404.vue')
    },
    {
      path: '/confirm-email',
      name: 'Confirm-Email',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../auth/confirmEmail.vue')
    },
    {
      path: '/verification-success',
      name: 'Verification-Success',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../auth/VerificationSuccess.vue')
    }
  ]
})

export default router
