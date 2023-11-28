<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <img src="/idaratyy.png" id="logo" alt="Idaraty Image">
      </div>
      <div class="content-container">
        <p class="pick-role-text">Choisissez votre rôle :</p>
        <ion-list class="ion-margin-top">
          <ion-radio-group v-model="selectedRole">
            <ion-item>
              <ion-radio value="citizen">Citizen</ion-radio>
            </ion-item>
            <ion-item>
              <ion-radio value="administrator">Administrator</ion-radio>
            </ion-item>
            <ion-item>
              <ion-radio value="business">Business</ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      </div>
      <ion-button @click="navigateToPage" class="submit-button" expand="full">Suivant</ion-button>

      <ion-alert
        :is-open="alertShown"
        header="Please pick your role" 
        message="Choisissez votre rôle pour que Idaraty vous aide davantage."
        :buttons="['OK']"
        :onDidDismiss="() => (alertShown = false)"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonContent, IonPage, IonButton, IonRadioGroup, IonRadio, IonList, IonAlert, IonItem } from '@ionic/vue';
import { useRouter } from 'vue-router';

const selectedRole = ref('');
const router = useRouter();
const alertShown = ref(false);

const navigateToPage = () => {
  if (!selectedRole.value) {
    showAlert();
  } else {
    // Navigate to different pages based on the selected role
    switch (selectedRole.value) {
      case 'citizen':
        router.push('/citizen');
        break;
      case 'administrator':
        router.push('/administrator');
        break;
      case 'business':
        router.push('/business');
        break;
      default:
        // Handle default case or show an error
        break;
    }
  }
};

const showAlert = () => {
  alertShown.value = true;
};
</script>

<style scoped>

ion-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.container {
  margin-top: 80px; 
}
.content-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.pick-role-text {
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}

ion-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.submit-button {
  margin-top: 150px; 
  margin-bottom: 200px; 
  margin-left: 10px; 
}
</style>
