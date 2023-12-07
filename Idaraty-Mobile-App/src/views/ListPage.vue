<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="Frame3">
            <div>
          <img class="logo" src="/idaratyy.png"> 
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
                <ion-label class="Content">
                  <ion-label class="Lables">
                    <ion-label class="ContentStart">
                      <h2 class="ListItemTitle">{{ item.title }}</h2>
                    </ion-label>
                    <ion-label class="ContentEnd">
                      <ion-label class="Contents">
                        <p class="Note" @click="suivreClicked(item.title, index)">
                          {{ followedItems.includes(index) ? 'Suivi' : 'Suivre' }}
                          <ion-icon
                            v-if="followedItems.includes(index)"
                            class="Checkmark"
                            name="checkmark-outline"
                          ></ion-icon>
                        </p>
                      </ion-label>
                    </ion-label>
                  </ion-label>
                </ion-label>
              </div>
            </ion-item>
          </ion-list>
          <div>
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
  <style scoped>
  .Frame3 {

    background: white;
  }
  .logo {
  margin-left: 85px;
  width: 180px; 
  height: 100px; 
}
  
  .text {
    width: 100%;
    height: 100%;
    text-align: center;
    color: black;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 44.80px;
    letter-spacing: 1.20px;
    word-wrap: break-word;
  }
  
  .ListHeading {
   
    width: 100%;

    height: 100%;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-family: Roboto;
    font-weight: 600;
   
    letter-spacing: 0.40px;
 
  }
  
  .List {
    width: 319px;
    height: 353px;
    padding-top: 18px;
    padding-bottom: 8px;
    left: 17px;
    top: 250px;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
  }
  
  .Item {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }
  
  .ItemMaster {
    flex: 1 1 0 ;
    height: 80px;
    
    padding-left: 16px;
    background: white;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }
  
  .Content {
    flex: 1 1 0;
    height: 40px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: flex;
  }
  
  .Lables {
    flex: 1 1 0;
    align-self: center;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 16px;
    background: white;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.25);
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  
  .ContentStart {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: inline-flex;
  }
  
  .ListItemTitle {
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.15px;
    word-wrap: break-word;
  }
  
  .ContentEnd {
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    display: flex;
  }
  
  .Contents {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 2px;
    display: inline-flex;
  }
  
  .Note {
    text-align: right;
    color: #666666;
    font-size: 12px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.40px;
    word-wrap: break-word;
    cursor: pointer;
  }
  .SkipButton {
  /* margin-top: 50px ; */
  color: #666666;
  font-size: 10px;
  font-family: Roboto;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 28px;
  letter-spacing: 1.20px;
  word-wrap: break-word;
}
.SuivantButton {
  margin-top: 405px ;
  color: #666666;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 44.80px;
  letter-spacing: 1.20px;
  word-wrap: break-word;
}

.Checkmark {
  color: #ff000d;
  margin-left: 8px;
}

  </style>
  