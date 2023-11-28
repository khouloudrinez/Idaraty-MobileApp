<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div v-if="!loading" id="container">
        <img src="/idaratyy.png" alt="Idaraty Image">
        <strong>Welcome To Idaraty</strong>
      </div>

      <ion-spinner v-if="loading" name="crescent"></ion-spinner>
    </ion-content>

    <router-link to="/home" class="arrow">
      <ion-icon name="arrow-back-outline" size="large"></ion-icon>
    </router-link>

    <ion-button @click="startLoading" color="danger" class="red-button">
      Let's get started >>
    </ion-button>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonContent, IonPage, IonIcon, IonButton, IonSpinner } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);

const startLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push('/role');
  }, 3000);
};
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

ion-spinner {
  font-size: 3rem ;
  position: absolute;
  top: 50%;
  left: 50% ;
  transform: translate(-50%, -50%)
}

</style>
