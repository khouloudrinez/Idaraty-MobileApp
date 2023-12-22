import { createRouter, createWebHistory } from '@ionic/vue-router';
import SplashScreen from '../views/SplashScreen.vue';
import UserRole from '../views/UserRole.vue';
import CitizenPage from '../views/CitizenPage.vue' ;
import AdministratorPage from '../views/AdministratorPage.vue';
import BusinessPage from '../views/BusinessPage.vue' ;
import HomeScreen from '../views/HomeScreen.vue' ;
import ExplorePage from '../views/ExplorePage.vue' ;
import Profile from '../views/Profile.vue' ;
import AdmDetails from '../views/AdmDetails.vue' ;
import ProcDetails from '../views/ProcDetails.vue' ;
import StartPage from '../views/StartPage.vue' ;
import CreateAccountPage from '../views/CreateAccountPage.vue' ;
import LoginPage from '../views/LoginPage.vue' ;
import ListPage from '../views/ListPage.vue' ;
import LanguagePage from '../views/LanguagePage.vue' ;
import AdministrationsPage from '../views/AdministrationsPage.vue' ;
import ProceduresPage from '../views/ProceduresPage.vue' ;
import FormulairesPage from '../views/FormulairesPage.vue' ;
import FormDetails from '../views/FormDetails.vue' ;
import FeedPostDetailPage from '../views/FeedPostDetailPage.vue' ;
import PopoverContent from '../views/PopoverContent.vue' ;
import Test from '../views/Test.vue' ;



const routes  = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: StartPage,
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
    path: '/explore',
    name: 'explore',
    component: ExplorePage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/admdetails',
    component: AdmDetails,
    name:'AdmDetails',
  } ,
  {
    path: '/procdetails',
    component: ProcDetails,
   name:'ProcDetails',
  } ,
  {
    path: '/start',
    name: 'Start',
    component: StartPage,
  },
  {
    path: '/createaccount',
    name: 'CreateAccount',
    component: CreateAccountPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/list',
    name: 'ListPage',
    component: ListPage,
  },
  {
    path: '/language',
    name: 'LanguagePage',
    component: LanguagePage,
  },
  {
    path: '/admpage',
    name: 'AdministrationsPage',
    component: AdministrationsPage,
  },
  {
    path: '/procpage',
    name: 'ProceduresPage',
    component: ProceduresPage,
  },
  {
    path: '/formpage',
    name: 'FormulairesPage',
    component: FormulairesPage,
  },
  {
    path: '/formdetails',
    component: FormDetails,
    name: 'FormDetailsPage',
  } ,
  {
    path: '/post/:id',
    name: 'FeedPostDetail',
    component: FeedPostDetailPage,
  },
  {
    path: '/popover',
    name: 'PopoverContent',
    component:PopoverContent,
  },
  {
    path: '/test',
    name: 'Test',
    component:Test,
  },
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
