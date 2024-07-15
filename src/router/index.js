import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
//   scrollBehavior(to, from, savedPosition) {
//   if (to.hash) {
//     return {
//       el: to.hash,
//       behavior: 'smooth',
//     };
//   } else {
//     return { left: 0, top: 0 };
//   }
// }
})

export default router
