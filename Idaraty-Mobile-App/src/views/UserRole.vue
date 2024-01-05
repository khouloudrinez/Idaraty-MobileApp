<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <img src="/logo.png" class="logo" alt="Idaraty Image">
      </div>
      <div class="content-container">
        <p class="pick-role-text">Choisissez votre rôle :</p>
        <ion-list class="ion-margin-top">
          <ion-item class="radio-item" :class="{ 'selected': selectedRole === 'citoyen' }" @click="selectRole('citoyen')">
            <!-- <ion-button :checked="selectedRole === 'citizen'" aria-label="Citizen"></ion-button> -->
            Citoyen
            <ion-icon v-if="selectedRole === 'citoyen'" name="checkmark-outline" class="checkmark"></ion-icon>
          </ion-item>
          <ion-item class="radio-item" :class="{ 'selected': selectedRole === 'Agent public' }" @click="selectRole('Agent public')">
            <!-- <ion-button :checked="selectedRole === 'administrator'" aria-label="Administrator"></ion-button> -->
            Agent public
            <ion-icon v-if="selectedRole === 'Agent public'" name="checkmark-outline" class="checkmark"></ion-icon>
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
  font-weight:bold;
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
  border-color :rgb(247, 90, 90);
}

.role-selected-text {
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}

</style> 
 -->

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
  margin-top: 30px;
}

.content-container {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
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

</style>  -->

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
  margin-top: 30px;
}

.content-container {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
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
  border-color :rgb(247, 90, 90);
}

.role-selected-text {
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}

</style>

