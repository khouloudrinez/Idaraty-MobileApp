<template>
  <ion-app>
    <IonRouterOutlet>
     
    </IonRouterOutlet> 


  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Tabs from './views/Tabs.vue';




export default defineComponent({
    name: 'App',
    components: { IonApp, IonRouterOutlet },
  });

</script>
