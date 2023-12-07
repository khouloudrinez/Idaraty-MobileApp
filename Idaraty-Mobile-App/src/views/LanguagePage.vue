<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="container">
          <img src="/idaratyy.png" id="logo" alt="Idaraty Image">
        </div>
        <div class="content-container">
          <p class="pick-role-text">Vous voulez continuer en :</p>
          <ion-list class="ion-margin-top">
            <ion-item class="radio-item" :class="{ 'selected': selectedLanguage === 'fr' }" @click="selectLanguage('fr')">
              Francais
              <ion-icon v-if="selectedLanguage === 'fr'" name="checkmark-outline" class="checkmark"></ion-icon>
            </ion-item>
            <ion-item class="radio-item" :class="{ 'selected': selectedLanguage === 'ar' }" @click="selectLanguage('ar')">
              بالتونسي
              <ion-icon v-if="selectedLanguage === 'ar'" name="checkmark-outline" class="checkmark"></ion-icon>
            </ion-item>
          </ion-list>
          <p class="role-selected-text" v-if="selectedLanguage">Vous avez choisi de continuer en {{ getLanguageName(selectedLanguage) }}.</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonContent, IonPage, IonList, IonItem, IonIcon, IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const selectedLanguage = ref('');
  const router = useRouter();
  
  const selectLanguage = (language) => {
    selectedLanguage.value = language;
  
    setTimeout(() => {
      router.push('/homescreen');
    }, 2000);
  };
  
  const getLanguageName = (language) => {
    return language === 'fr' ? 'Francais' : 'بالتونسي';
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
    margin-top: 40px;
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
    text-align: left;
    align-items: left;
  }
  
  .radio-item {
    border: 3px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
  }
  
  .radio-item.selected {
    border-color: #ed4f5c;
  }
  
  .checkmark {
    color: #0e0e0e;
    font-size: 30px;
  }
  
  .role-selected-text {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
  </style>
  