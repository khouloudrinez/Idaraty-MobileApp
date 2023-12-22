import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createI18n } from 'vue-i18n' ;
import fr from './locale/fr.json' ; 
import ar from './locale/ar.json' ;    
 

import { IonicVue } from '@ionic/vue';
import { IonIcon } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
const savedLanguage = localStorage.getItem('selectedLanguage');
const defaultLocale = savedLanguage || 'fr';

const i18n = createI18n({
  locale: 'fr',
  messages: {
    fr: fr,
    ar: ar,
  },
});

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n) ;
  
router.isReady().then(() => {
  app.mount('#app');
});

export { i18n };