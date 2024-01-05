<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <img src="/logo.png" class="logo" alt="Idaraty Image">
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
import { IonContent, IonPage, IonList, IonItem, IonIcon,IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { i18n } from '../main.js'

const selectedLanguage = ref('');
const router = useRouter();

const selectLanguage = (language) => {
  selectedLanguage.value = language;

  i18n.global.locale = language;
  

  router.push('/homescreen');
};

const getLanguageName = (language) => {
  return language === 'fr' ? 'Francais' : 'بالتونسي';
};
</script>
<!-- 1 -->

<!-- <style scoped>
  .logo {
    margin-left: auto;
    margin-right: auto;
    display: block; 
  }

  ion-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .container {
    margin-top: 40px;
  }

  .content-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    text-align: center;
  }

  .pick-role-text {
    text-align: center;
    font-weight: bold;
    font-size: 19px;
    margin-top: 10px;
    color: #333;
  }

  ion-list {
    margin-top: 20px;
    text-align: left;
  }

  .radio-item {
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .radio-item.selected {
    border-color: rgb(247, 90, 90);
  }

  .role-selected-text {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
</style> -->

  <!-- 2 -->

  <!-- <style scoped>
  .logo {
    margin-left: auto;
    margin-right: auto;
    display: block; 
  }

  ion-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ecf0f1;
  }

  .container {
    margin-top: 40px;
  }

  .content-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    text-align: center;
  }

  .pick-role-text {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    color: #333;
  }

  ion-list {
    margin-top: 20px;
    text-align: left;
  }

  .radio-item {
    border: 2px solid #b8b9ba;
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
  }

  .radio-item.selected {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }

  .role-selected-text {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
</style> -->

<!-- 3 -->
<style scoped>
  .logo {
    margin-left: auto;
    margin-right: auto;
    display: block; 
  }

  ion-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ecf0f1;
  }

  .container {
    margin-top: 40px;
  }

  .content-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    text-align: center;
  }

  .pick-role-text {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    color: #333;
  }

  ion-list {
    margin-top: 20px;
    text-align: left;
  }

  .radio-item {
    border: 2px solid #bdc3c7;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .radio-item.selected {
    border-color: rgb(247, 90, 90);
  }

  .role-selected-text {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
</style>
