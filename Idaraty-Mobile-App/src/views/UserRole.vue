<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <img src="/idaratyy.png" id="logo" alt="Idaraty Image">
      </div>
      <div class="content-container">
        <p class="pick-role-text">Choisissez votre rôle :</p>
        <ion-list class="ion-margin-top">
          <ion-item class="radio-item" :class="{ 'selected': selectedRole === 'citizen' }" @click="selectRole('citoyen')">
            <!-- <ion-button :checked="selectedRole === 'citizen'" aria-label="Citizen"></ion-button> -->
            Citoyen
            <ion-icon v-if="selectedRole === 'citizen'" name="checkmark-outline" class="checkmark"></ion-icon>
          </ion-item>
          <ion-item class="radio-item" :class="{ 'selected': selectedRole === 'administrator' }" @click="selectRole('Agent public')">
            <!-- <ion-button :checked="selectedRole === 'administrator'" aria-label="Administrator"></ion-button> -->
            Agent public
            <ion-icon v-if="selectedRole === 'administrator'" name="checkmark-outline" class="checkmark"></ion-icon>
          </ion-item>
          <ion-item class="radio-item" :class="{ 'selected': selectedRole === 'business' }" @click="selectRole('business')">
            <!-- <ion-button :checked="selectedRole === 'business'" aria-label="Business"></ion-button> -->
            Business
            <ion-icon v-if="selectedRole === 'business'" name="checkmark-outline" class="checkmark"></ion-icon>
          </ion-item>
        </ion-list>
        <p class="role-selected-text" v-if="selectedRole">Vous avez choisi le rôle {{ selectedRole }}.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonContent, IonPage, IonList, IonItem, IonIcon,IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const selectedRole = ref('');
const router = useRouter();

const selectRole = (role) => {
  selectedRole.value = role;

  setTimeout(() => {
    router.push('/list');
  }, 2000);

//   setTimeout(() => {
//     switch (role) {
//       case 'citizen':
//         router.push('/citizen');
//         break;
//       case 'administrator':
//         router.push('/administrator');
//         break;
//       case 'business':
//         router.push('/business');
//         break;
//       default:
//         break;
//     }
//   }, 3000); 
// 
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
