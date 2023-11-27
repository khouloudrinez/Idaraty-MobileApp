import { createRouter, createWebHistory } from '@ionic/vue-router';
import SplashScreen from '../views/SplashScreen.vue'
import NextPage from '../views/NextPage.vue';

const routes  = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: SplashScreen
  },
  {
    path: '/next',
    name: 'Next',
    component: NextPage,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
