<template>
  <ion-page>
    <ion-content class="ion-padding" scroll-y="false">
      <div class="Frame3">
        <div>
          <img class="logo" src="/logo.png">
        </div>

        <ion-label class="text">
          Vous êtes peut-être intéressé par
        </ion-label>

        <ion-label class="ListHeading">
          Suggestions des administrations que vous pouvez suivre :
        </ion-label>

        <ion-list class="List">
          <ion-item class="Item" v-for="(item, index) in items" :key="index">
  <div class="ItemMaster">
    <div class="ItemContent">
      <h2 class="ListItemTitle">{{ item.title }}</h2>
    </div>
    <div class="ItemContent">
      <p class="Note" @click="suivreClicked(item.title, index)">
        {{ followedItems.includes(index) ? 'Suivi' : 'Suivre' }}
        <ion-icon
          v-if="followedItems.includes(index)"
          class="Checkmark"
          name="checkmark-outline"
        ></ion-icon>
      </p>
    </div>
  </div>
</ion-item>

        </ion-list>

        <div class="Counter" v-if="followedItems.length > 0">
          <p>{{ counter }}/5</p>
        </div>

        <ion-button class="SuivantButton" expand="full" fill="clear" @click="suivantClicked">
          Suivant
        </ion-button>

        <ion-button class="SkipButton" expand="full" fill="clear" @click="skipClicked">
          <ion-icon name="play-skip-forward-outline"></ion-icon>
          Skip
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>


  <script setup>
import { ref } from 'vue';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const counter = ref(0);

const items = [
  { title: 'La Poste' },
  { title: 'STEG' },
  { title: 'Sonede' },
  { title: 'CNSS' },
  { title: 'CNAM' }
];

const followedItems = ref([]);

const suivreClicked = (itemName, index) => {
  console.log(`Suivre clicked for: ${itemName}`);
  followedItems.value = followedItems.value || [];
  followedItems.value = followedItems.value.includes(index)
    ? followedItems.value.filter((item) => item !== index)
    : [...followedItems.value, index];

    counter.value = followedItems.value.length;
};

const skipClicked = () => {
  router.push('/language');
};

const suivantClicked = () => {
  router.push('/language');
};
</script>
<!-- 1 -->

<!-- <style scoped>
  .Frame3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh; 
  }

  .List {
    max-width: 400px;
    width: 100%;
    margin: 16px 0;
  }

  .ItemMaster {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 16px;
  width: 100%;
}

.ItemContent {
  display: flex;
  align-items: center;
}

.ListItemTitle {
  flex: 1;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin: 0;
  word-wrap: break-word;
}

.Note {
  color: #666666;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.4px;
  cursor: pointer;
}

  .Counter {
    text-align: center;
    margin-top: 16px;
  }

  .SuivantButton,
  .SkipButton {
   
    color: #666666;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 44.80px;
    position: fixed;
    letter-spacing: 1.20px;
    word-wrap: break-word;
    bottom: 40px;
  }
  .SkipButton {
    bottom: 10px;
    font-size: 13px; 
    line-height: 28px; 
  }

  .Checkmark {
    color: #ff000d;
    margin-left: 8px;
  }

  .logo {
    margin: 16px auto;
    display: block;
  }

  .text {
    text-align: center;
    color: black;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-top: 16px;
  }

  .ListHeading {
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-family: Roboto;
    font-weight: 600;
    letter-spacing: 0.4px;
    margin-top: 16px;
  }
</style> -->

<!-- 2 -->
<style scoped>
  .Frame3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-color: #f9f9f9; 
  }

  .List {
    max-width: 400px;
    width: 100%;
    margin: 16px 0;
  }

  .ItemMaster {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px; 
    padding: 16px;
    width: 100%;
    background-color: white;
    border-radius: 10px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  }

  .ItemContent {
    display: flex;
    align-items: center;
  }

  .ListItemTitle {
    flex: 1;
    color: #333;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    font-weight: 500;
    line-height: 24px;
    margin: 0;
    word-wrap: break-word;
  }

  .Note {
    color: #666666;
    font-size: 14px; 
    cursor: pointer;
  }

  .Counter {
    text-align: center;
    margin-top: -20px;
    color: #333;
    font-size: 14px; 
  }

  .SuivantButton,
  .SkipButton {
    color: rgb(43, 42, 42);
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 44.80px;
    position: fixed;
    letter-spacing: 1.20px;
    word-wrap: break-word;
    bottom: 40px;
    background-color: #c4c2c25b; 
    border: none;
    border-radius: 10px;
  }

  .SkipButton {
    background-color: white; 
    bottom: 0px;
    font-size: 12px;
    line-height: 28px;
  }

  .Checkmark {
    color: rgb(35, 34, 34);
    margin-left: 8px;
  }

  .logo {
    margin: 16px auto;
    display: block;
  }

  .text {
    text-align: center;
    color: #333;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 24px;
    margin-top: 16px;
  }

  .ListHeading {
    color: #333;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    margin-top: 16px;
  }
</style>
