<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-card class="card">
          <form novalidate @submit.prevent="login">
            <ion-list>
              <ion-item>
                <ion-input
                  label="Username"
                  labelPlacement="stacked"
                  v-model="username"
                  name="username"
                  type="text"
                  spellcheck="false"
                  autocapitalize="off"
                  required
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label>Password</ion-label>
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

            <ion-button :disabled="!canSubmit" type="submit" expand="block" class="signup" color="medium">
              <div class="signup-text">Login</div>
            </ion-button>
          </form>
          <ion-toast
            :is-open="showToast"
            :message="toastMessage"
            :duration="2000"
          ></ion-toast>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { IonButton, IonContent, IonHeader,IonToast, IonPage, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonInput, IonCard } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref("");
const password = ref("");
const submitted = ref(false);

const showToast = ref(false);
const toastMessage = ref("");
const canSubmit = computed(
  () => username.value.trim() !== "" && password.value.trim() !== ""
);

const login = () => {
  submitted.value = true;

  // Simulate user login by checking data in local storage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username.value && storedUser.password === password.value) {
    toastMessage.value = 'Login successful!';
    showToast.value = true;

    // Redirect to another page, if needed
    router.push('/role');
  } else {
    toastMessage.value = 'Login failed. Please check your info.';
    showToast.value = true;
  }
};
</script>

<style scoped>
/* Reuse styles from the "Create Account" page */
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
}

.card {
    width: 300px;
    height: 500px;
    padding: 20px;
    left: 35px;
    top: 60px;
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
    top: 200px ;
    left: 45px;
    width: 60%;
    height: 50px;
    position: relative;
    background: #92949C;
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.07);
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }

  .signup-text {
    width: 50%;
    height: 140%;
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

</style>
