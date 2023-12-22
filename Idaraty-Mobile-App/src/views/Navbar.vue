<template>
  <ion-toolbar class="header">
    <ion-buttons slot="start">
      <ion-button>
        <img src="/idaratyy.png" alt="Idaraty - ادارتي" class="logo">
      </ion-button>
    </ion-buttons>

    <ion-searchbar
    :placeholder="$t('Navbar.rechercher')"
  class="custom"
  show-clear-button="always"
></ion-searchbar>
     
  </ion-toolbar>
</template>

<script>
export default {
  components: {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonSearchbar

},
  name: 'Navbar',
};
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonSearchbar } from '@ionic/vue';
</script>

<style scoped>

.header {
  --background: white; 
  --border-color: transparent; 
  --color: #fff; 
}

.button {
  --border-color: rgb(230, 54, 54); 
  --color: rgb(230, 54, 54); 
}
.red-button {
  --background: rgb(230, 54, 54); 
  --color: white; 
  
}
.logo {
  width: 130px; 
  height: auto; 
}
ion-searchbar.custom{
  --padding-end: 40px; /* Increase padding at the end to create space for the clear button */
    --cancel-button-width: 40px; /* Set the width of the cancel button */
    --cancel-button-color: #fff; 
}
</style>
