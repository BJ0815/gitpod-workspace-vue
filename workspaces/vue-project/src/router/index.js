import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const getDynamicBase = (uri) => {
  const regx = /^(\/\w+)(\/\d{8})?/
  const matchs = uri.match(regx)
  if (matchs) {
    const [ match ] = matchs
    return match
  }

  return uri
}

const getBase = (clientOnlyDynamicBase) => {
  return clientOnlyDynamicBase(window.location.pathname)
}



const router = createRouter({
  history: createWebHistory(getBase(getDynamicBase)),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
