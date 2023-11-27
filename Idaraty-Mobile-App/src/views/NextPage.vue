<template>
  <ion-page>
    <ion-content class="ion-padding">
      Hello World
    </ion-content>
     
    <router-link to="/home" class="arrow">
      <ion-icon name="arrow-back-outline" size="large"></ion-icon>
    </router-link>
   
  </ion-page>
</template>

<script setup>
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
</script>

<style scoped>
ion-page {
  display: flex;
  flex-direction: column;
  height: 100vh; 
}

ion-content {
  flex: 1; 
}

.arrow {
  position: fixed;
  bottom: 10px;
  left: 10px;
  color: black ;
}
</style>
