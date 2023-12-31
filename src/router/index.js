import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EredivisieView from '../views/EredivisieView.vue'
import LiveScoresView from '../views/LiveScoresView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/eredivisie',
    name: 'EredivisieView',
    component: EredivisieView
  },
  {
    path: '/livescores',
    name: 'LiveScoresView',
    component: LiveScoresView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
