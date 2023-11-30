<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="welcome-container">
          <img src="/idaratyy.png" class="logo" alt="Idaratyy Logo">
          <h1>Welcome, Administrator!</h1>
          <p class="description">
            Idaraty offre des outils puissants pour simplifier la gestion administrative. Gérez les processus et accédez aux informations nécessaires en toute simplicité.
          </p>
          <ion-button @click="navigateToPage" expand="full" class="suivant-button">Suivant</ion-button>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonContent, IonPage , IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToPage = () => {
  router.push('/homescreen');
};
  </script>
  
  <style scoped>
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .logo {
    width: 100px; 
    margin-bottom: 20px;
  }
  
  .description {
    font-size:25px;
    margin-top: 100px;
    color: #333; 
  }
  .suivant-button {
  margin-top: 200px;
}
  </style>
  