<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-searchbar :placeholder="$t('Navbar.rechercher')"></ion-searchbar>
      <div class="section-container" v-for="(section, index) in sections" :key="index">
        <div class="section-header">
          <h2 class="section-title">{{ section.title }}</h2>
          <h2 class="viewall" @click="viewAll(section.key)">View All <ion-icon name="chevron-forward-outline"></ion-icon></h2>
        </div>
      
        <ion-scroll :options="scrollOptions">
          <ion-row>
            <ion-col v-for="(item, itemIndex) in section.items" :key="itemIndex" size="1.5" size-md="1.5" size-lg="3">
              <ion-card class="custom-card" @click="showMore(item)">
                <div class="card-content">
                  <ion-img :src="item.image" alt="Card Image"></ion-img>
                  <ion-card-header>
                    <ion-card-subtitle>{{ item.name }}</ion-card-subtitle>
                  </ion-card-header>
                </div>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-scroll>


      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <Tabs v-model="selectedSegment"></Tabs>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { IonContent, IonFooter, IonSearchbar, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonToolbar,IonIcon,IonCardContent, IonPage} from '@ionic/vue';
import Tabs from './Tabs.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedSegment = ref('administrations');
const administrationList = [
  { name: 'STEG', image: "/steg.jpg" },
  { name: 'SONEDE', image: "/sonede.jpg" },
  { name: 'CNAM', image: "/cnam.jpg" },
  { name: 'LA POSTE', image: "/laposte.jpg" },
  { name: 'CNSS', image: "/cnss.jpg" },
  { name: 'DOUANE', image: "/douane.png" },
];

const procedureList = [
  { name: "Achat d'une voiture populaire", image: "/attijara.jpg" },
  { name: "Extrait d'un acte de naissance", image: "/agareb.jpg" },
  { name: "Obtention du visa Schengen", image: "/visa.png" },
  { name: 'Procedure 2', description: 'Procedure Description 2', image: "/idaratyy.png" },
  { name: 'Procedure 2', description: 'Procedure Description 2', image: "/idaratyy.png" },
  { name: 'Procedure 2', description: 'Procedure Description 2', image: "/idaratyy.png" },
];

const formulaireList = [
  { name: "Demande d'autorisation de conduire un véhicule (RS)", image: "/douane.png" },
  { name: 'Form 2', description: 'Form Description 2', image: "/idaratyy.png" },
  { name: 'Form 3', description: 'Form Description 3', image: "/idaratyy.png" },
  { name: 'Form 4', description: 'Form Description 4', image: "/idaratyy.png" },
  { name: 'Form 5', description: 'Form Description 5', image: "/idaratyy.png" },
  { name: 'Form 6', description: 'Form Description 6', image: "/idaratyy.png" },
];

const sections = [
  { key: 'administrations', title: 'Administrations', items: administrationList },
  { key: 'procedures', title: 'Procèdures', items: procedureList },
  { key: 'formulaires', title: 'Formulaires', items: formulaireList },
];

const showMore = (item) => {
  console.log("Selected Segment:", selectedSegment.value);
  let route;
  switch (selectedSegment.value) {
    case 'administrations':
      route = '/admdetails';
      break;
    case 'procedures':
      route = '/procdetails';
      break;
    case 'formulaires':
      route = '/formdetails';
      break;
    default:
      route = '/';
  }
  router.push(route);
};




const viewAll = (sectionKey) => {
  const route = getViewAllRoute(sectionKey);
  router.push(route);
};


const getViewAllRoute = (segment) => {
  switch (segment) {
    case 'administrations':
      return '/admpage';
    case 'procedures':
      return '/procpage';
    case 'formulaires':
      return '/formpage';
    default:
      return '/';
  }
};

const scrollOptions = {
  direction: 'x',
  slot: 'fixed',
  scrollbarX: false,
  scrollbarY: false,
};

const itemsToShow = computed(() => {
  switch (selectedSegment.value) {
    case 'administrations':
      return administrationList;
    case 'procedures':
      return procedureList;
    case 'formulaires':
      return formulaireList;
    default:
      return [];
  }
});
</script>

<!-- <style scoped>
ion-card.custom-card {
  width: 190px;
  height: 254px;
  border: 1px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  color: black;
  
  overflow: hidden;
  padding: 10px;
}

.custom-card:hover {
  border: 1px solid rgb(40, 38, 38);
  transform: scale(1.05);
}

.custom-card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ion-scroll {
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
}

ion-scroll ion-row {
  flex: 0 0 auto;
  width: max-content;
  gap: 10px;
}

ion-img {
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
  border-top-right-radius: 15px;
}

ion-card-title,
ion-card-subtitle {
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}



h2 {
  color: #181818;
}

.section-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
}

.section-footer h2 {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.section-title {
  font-size: 20px; /* Adjust the font size for the section title */
}
.section-header .viewall {
  font-size: 16px; /* Adjust the font size for the "View All" link in the header */
}
.section-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.section-container h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px; /* Adjust the font size for the section title */
  font-weight: bold;
}

.section-container h2 ion-icon {
  margin-left: 5px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 18px; /* Adjust the font size for the section title in the header */
  font-weight: bold;
}

.section-header h2 ion-icon {
  margin-left: 5px;
  font-size: 17px;
}
</style> -->


<style scoped>
ion-card.custom-card {
  width: 300px;
  margin: 10px;
  overflow: hidden;
  max-width: 100%;
  padding: 10px; 
  border-radius: 15px; 
  border: 1px solid #acabab; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

ion-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-scroll {
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
}

ion-scroll ion-row {
  flex: 0 0 auto;
  width: max-content;
  gap: 10px;
}

ion-img {
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
  border-top-right-radius: 15px;
}

ion-card-header {
  text-align: center;
}

ion-card-title,
ion-card-subtitle {
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}



h2 {
  color: #181818;
}

.section-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
}

.section-footer h2 {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.section-title {
  font-size: 20px; /* Adjust the font size for the section title */
}
.section-header .viewall {
  font-size: 16px; /* Adjust the font size for the "View All" link in the header */
}
.section-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.section-container h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px; /* Adjust the font size for the section title */
  font-weight: bold;
}

.section-container h2 ion-icon {
  margin-left: 5px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 18px; /* Adjust the font size for the section title in the header */
  font-weight: bold;
}

.section-header h2 ion-icon {
  margin-left: 5px;
  font-size: 17px;
}
</style>
