<template>
    <ion-page>
        <ion-header>
    <ion-toolbar>
      <ion-title> Create Account </ion-title>
    </ion-toolbar>
  </ion-header>
      <ion-content :fullscreen="true">
        <div class="container">
            <ion-card class="card">
              <div class="btn">
          <ion-button @click="loginWithGoogle" class="continue-google" color = "medium">
            <ion-label class="button-label"> <ion-icon :icon="logoGoogle"></ion-icon>Continue with Google</ion-label>
          </ion-button>
          <ion-button @click="loginWithFacebook" class="continue-facebook" color = "medium" >
            <ion-label class="button-label"> <ion-icon :icon="logoFacebook"></ion-icon>Continue with Facebook</ion-label>
          </ion-button>
        </div>
          <div class="or">OR</div>
          <div class="divider"></div>

          <form @submit.prevent="signUp">
            <ion-list>
              <ion-item>
                <ion-input
              labelPlacement="stacked"
              label="Email"
              v-model="email"
              name="email"
              type="email"
              required
            ></ion-input>
              </ion-item>
              
              <ion-item>
                <ion-input
              labelPlacement="stacked"
              label="Username"
              v-model="username"
              name="username"
              type="text"
              required
            ></ion-input>
              </ion-item>
              
              <ion-item>
                 <ion-input
              labelPlacement="stacked"
              label="Password"
              v-model="password"
              name="password"
              type="password"
              required
            ></ion-input>
              </ion-item>
            </ion-list>
            
            <ion-button @click="signUp" type="submit" expand="block" class="signup" color="medium">
              <div class="signup-text">Sign Up</div>
            </ion-button>
        </form>
          </ion-card>
        </div>
        <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        :duration="2000"
      ></ion-toast>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { IonContent, IonPage,IonHeader,IonToolbar,IonTitle,IonToast, IonButton, IonText, IonCard, IonList, IonItem, IonLabel, IonInput, IonIcon } from '@ionic/vue';
  import { logoGoogle, logoFacebook } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const email = ref('');
  const username = ref('');
  const password = ref('');

  const submitted = ref(false);

  const showToast = ref(false);
const toastMessage = ref("");
  
  const loginWithGoogle = () => {
   
  };
  
  const loginWithFacebook = () => {
    
  };

  
  const signUp = () => {
    submitted.value = true;
  localStorage.setItem('user', JSON.stringify({ username: username.value, password: password.value }));

  toastMessage.value = "Successfully signed up!";
  showToast.value = true;

  
  username.value = '';
  password.value = '';
  router.push('/login');
};
  </script>
  
  <style scoped>
   .container {
    width: 100%;
    height: 100%;
    position: relative;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .card {
    width: 323px;
    height: 550px;
    padding: 20px;
    left: 15px;
    top: 40px;
    position: absolute;
    background: white;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.20);
    border-radius: 8px;
    border: 3px #92949C solid;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  

  .signup {
    top: 10px ;
    left: 60px;
    width: 60%;
    height: 30px;
    position: relative;
    background: #92949C;
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.07);
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }

  .signup-text {
    width: 50%;
    height: 270%;
    position: center;
    text-align: center;
    color: white;
    font-size: 15px;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 56px;
    letter-spacing: 1.20px;
    word-wrap: break-word;
  }

  .divider {
    width: 100%;
    height: 1px;
    position: relative;
    margin-bottom: 70px;
    background: rgba(0, 0, 0, 0.54);
  }

  .input-field {
    width: 100%;
    padding: 8px 16px;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .input-label,
  .input-placeholder {
    flex: 1 1 0;
  }

  .continue-google,
  .continue-facebook {
    width: 110%;
    left: -15px ;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
   
   
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #262626;
    font-size: 13px;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 36.40px;
    letter-spacing: 1.20px;
  }

  .or {
    width: 100%;
    height: 29px;
    text-align: center;
    color: black;
    font-size: 13px;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 36.40px;
    letter-spacing: 1.20px;
    word-wrap: break-word;
  }
  ion-icon {
    width: 50px;
    height: 15px;
  }
  </style>
  