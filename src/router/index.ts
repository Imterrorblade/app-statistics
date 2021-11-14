import { createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(''),
  routes: [{
    path: '/',
    redirect: '/statistics'
  }, {
    path: '/statistics',
    component: ()=>import('../views/home.vue')
  }]
})

export default router