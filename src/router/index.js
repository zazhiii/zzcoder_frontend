import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [
  {
    path: '/auth',
    component: () => import('@/views/login/index.vue'),
    redirect: '/auth/login-by-password',
    children: [
      {
        path: 'login-by-password',
        component: () => import('@/views/login/LoginByPassword.vue')
      },
      {
        path: 'login-by-code',
        component: () => import('@/views/login/LoginByCode.vue')
      },
      {
        path: 'register',
        component: () => import('@/views/login/register.vue')
      },
      {
        path: 'reset-password',
        component: () => import('@/views/login/resetPassword.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/views/main.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: 'problem',
        component: () => import('@/views/problem/index.vue'),
        redirect: '/problem/list',
        children: [
          {
            path: 'list',
            component: () => import('@/views/problem/ProblemListView.vue')
          },
          {
            path: 'add',
            component: () => import('@/views/problem/addProblemView.vue')
          },
          {
            path: ':id',
            component: () => import('@/views/problem/ProblemView.vue')
          },
          {
            path: 'edit/:id',
            component: () => import('@/views/problem/editProblemView.vue')
          },
          {
            path: 'judge-result/:problemId',
            component: () => import('@/views/problem/judgeResultView.vue')
          }
        ]
      },
      {
        path: 'submissions',
        component: () => import('@/views/judge/submissionsView.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
