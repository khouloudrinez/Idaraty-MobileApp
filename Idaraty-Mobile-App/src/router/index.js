import { createRouter, createWebHistory } from '@ionic/vue-router';
import SplashScreen from '../views/SplashScreen.vue';
import UserRole from '../views/UserRole.vue';
import CitizenPage from '../views/CitizenPage.vue' ;
import AdministratorPage from '../views/AdministratorPage.vue';
import BusinessPage from '../views/BusinessPage.vue' ;


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
    path: '/role',
    name: 'Role',
    component: UserRole,
  } ,
  {
    path: '/citizen',
    name: 'Citizen',
    component: CitizenPage,
  } ,
  {
    path: '/administrator',
    name: 'Administrator',
    component: AdministratorPage,
  },
  {
    path: '/business',
    name: 'Business',
    component: BusinessPage,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
