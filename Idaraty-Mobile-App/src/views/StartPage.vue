<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="container">
            <img class="logo" src="/idaratyy.png" alt="Idaraty Image" />
          <ion-card class="card">
            <ion-text class="subtitle">
              <h3 class="tagline">Idaraty vous accompagne dans vos procédures administratives</h3>
            </ion-text>
            <ion-button @click="createAccount" class="create-account" color="medium">
              Create Account
            </ion-button>
            <ion-text class="login-text">
            <h3>Have an Account? <span @click="goToLogin" class="login-link" style="text-decoration: underline; cursor: pointer;">Log In</span></h3>
          </ion-text>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonContent, IonPage, IonIcon, IonButton, IonText, IonCard } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const createAccount = () => {
   
    router.push('/createaccount'); 
  };
  const goToLogin = () => {
  router.push('/login');
};
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    background: white;
  }
  
  .card {
    width: 330px;
    height: 430px;
    left: 18px;
    top: 210px;
    position: absolute;
    background: white;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.20);
    border-radius: 8px;
    border: 3px #92949C solid;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .tagline {
    color: black;
    font-size: 25px;
    font-family: 'RocknRoll One';
    font-weight: 400;
    text-align: center;
    line-height: 1.2;
    margin-top: 20px;
  }
  
  .logo {
    margin-top: 40px;
   margin-left: 20px;
    align-self: center;
  }
  
  .login-text {
    color: black;
    font-size: 12px;
    font-family: 'RocknRoll One';
    font-weight: 400;
    text-align: center;
  }
  
  .login-link {
    color: rgba(0, 0, 0, 0.76);
  }
  
  .create-account {
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 56px;
    font-size: 20px;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.20px;
    word-wrap: break-word;
  }
 
  </style>
  