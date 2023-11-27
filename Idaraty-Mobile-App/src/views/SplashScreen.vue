<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <img src="/idaratyy.png" alt="Idaraty Image">
        <strong>Welcome To Idaraty</strong>
      </div>
    </ion-content>

    <router-link to="/home" class="arrow">
      <ion-icon name="arrow-back-outline" size="large"></ion-icon>
    </router-link>

    <ion-button router-link="/next" color="danger" class="red-button">
      Let's get started >>
    </ion-button>
  </ion-page>
</template>

<script setup>
import { IonContent, IonPage, IonIcon, IonButton } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 66px;
}

.arrow {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>
