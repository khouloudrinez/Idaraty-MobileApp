<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-toolbar>
        <ion-searchbar placeholder="Search"></ion-searchbar>
      </ion-toolbar>

      <div>
        <h2>Administrations</h2>
        <ion-list>
          <ion-row>
            <ion-col v-for="(item, index) in administrationList" :key="index" size="6">
              <ion-card @click="showMore(item)">
                <ion-img :src="item.image" alt="Card Image"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle>{{ item.name }}</ion-card-subtitle>
                  <ion-card-title>{{ item.description }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-button>Show More</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-list>
      </div>

      <div>
        <h2>Procedures</h2>
        <ion-list>
          <ion-row>
            <ion-col v-for="(item, index) in procedureList" :key="index" size="6">
              <ion-card @click="showMore(item)">
                <ion-img :src="item.image" alt="Card Image"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle>{{ item.name }}</ion-card-subtitle>
                  <ion-card-title>{{ item.description }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-button>Show More</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-list>
      </div>

    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <Tabs></Tabs>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { IonContent, IonPage, IonList, IonFooter, IonSearchbar, IonRow,IonCol, IonSegment, IonSegmentButton, IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonToolbar, IonButton } from '@ionic/vue';
import Tabs from './Tabs.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedSegment = ref('administrations'); 
 const administrationList = [
  { name: 'STEG', description: 'Description ', image: "/idaratyy.png" },
  { name: 'SONEDE', description: 'Description ', image: "/idaratyy.png" },

];

const procedureList = [
  { name: 'Procedure 1', description: 'Procedure Description 1', image: "/idaratyy.png" },
  { name: 'Procedure 2', description: 'Procedure Description 2', image: "/idaratyy.png" },

];

const showMore = (item) => {
  const route = selectedSegment.value === 'administrations' ? '/admdetails/' : '/procdetails/';
  router.push(`${route}${encodeURIComponent(item.name)}`);
};

const itemsToShow = computed(() => {
  return selectedSegment.value === 'administrations' ? administrationList : procedureList;
});
</script>

<style scoped>

ion-content {
  --ion-background-color: #f4f4f4; 
}

ion-card {
  margin: 15px;
  border: 1px solid #ddd; 
}

ion-row {
  justify-content: space-between; 
}
</style>
