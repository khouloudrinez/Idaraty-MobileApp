import { createRouter, createWebHistory } from '@ionic/vue-router';
import SplashScreen from '../views/SplashScreen.vue';
import UserRole from '../views/UserRole.vue';
import CitizenPage from '../views/CitizenPage.vue' ;
import AdministratorPage from '../views/AdministratorPage.vue';
import BusinessPage from '../views/BusinessPage.vue' ;
import HomeScreen from '../views/HomeScreen.vue' ;
import Search from '../views/Search.vue' ;
import Profile from '../views/Profile.vue' ;
import AdmDetails from '../views/AdmDetails.vue' ;
import ProcDetails from '../views/ProcDetails.vue' ;
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
  },
  {
    path: '/homescreen',
    name: 'Homescreen',
    component: HomeScreen,
  } ,
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/admdetails/:id',
    component: AdmDetails,
    props : true,
  } ,
  {
    path: '/procdetails/:id',
    component: ProcDetails,
    props : true,
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
