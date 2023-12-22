<template>
  <ion-page>
    <ion-searchbar v-model="searchTerm" :placeholder="$t('Navbar.rechercher')"></ion-searchbar>
    <ion-content class="ion-padding">
      <ion-scroll
        :options="scrollOptionsCards"
        @ionScrollStart="handleScrollStart"
        @ionScrollEnd="handleScrollEnd"
      >
        <ion-row>
          <ion-col v-for="(card, index) in cards" :key="card.id">
            <ion-card
              :style="{ backgroundColor: pastelColors[index] }"
              @click="handleCardClick(index)"
              :class="{ 'zoomed': zoomedCard === index }"
            >
              <div class="CardContent">
                <ion-img class="Logo" :src="card.logo" alt="Card Logo"></ion-img>
                <div class="Title">{{ card.title }}</div>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-scroll>

      <ion-list lines="full">
        <ion-item v-for="list in filteredLists" :key="list.id">
          <div class="DepricatedItemThumbnail">
            <div class="Container">
              <div class="Content">
                <div class="Image">
                  <ion-img class="Image" :src="list.imageSrc" style="width: 40px; height: 40px;"></ion-img>
                </div>
                <div class="Lables">
                  <div class="ListItemTitle">{{ list.title }}</div>
                  <div class="SecondaryText1">{{ list.subtitle }}</div>
                </div>
                <ion-icon class="ArrowIcon" name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-toolbar class="fixed-tab">
      <Tabs></Tabs>
    </ion-toolbar>
  </ion-page>
</template>



<script setup>
import Tabs from './Tabs.vue';
import { ref, computed } from 'vue';
import { IonContent, IonFooter, IonSearchbar, IonRow, IonCol, IonImg, IonCard, IonList,IonItem, IonToolbar,IonIcon,IonCardContent, IonPage} from '@ionic/vue';



const cards = ref([
  { id: 1, logo:'/procedures/demenagement.png' , title: 'Je déménage', image: '/idaratyy.png' },
  { id: 2, logo: '/procedures/perdu-porte-feuille.png', title: 'J\'ai perdu mon portefeuille' },
  { id: 3, logo: '/procedures/voyage.png', title: 'Je voyage' },
  { id: 4, logo: '/procedures/ma-voiture.png', title: 'Ma voiture et moi' },
  { id: 5, logo: '/procedures/nouvelle-entreprise.png', title: 'Je crée mon entreprise' },
  { id: 6, logo: '/procedures/artiste-tunisie.png', title: 'Artiste en Tunisie' },
  { id: 7, logo: '/procedures/fin-etudes.png', title: 'Je viens d\'avoir mon diplôme' },
 
]);

const pastelColors = ref(['#FFD3C0', '#D3FFC0', '#C0D3FF', '#FFC0D3', '#C0D3FF', '#FFD3C0', '#D3FFC0']);
const scrollOptionsCards = ref({
  direction: 'x',
  slot: 'fixed',
  scrollbarX: false,
  scrollbarY: false,
});
const zoomedCard = ref(null);

const lists = ref([
  { id: 1, title: 'Obtention du visa Schengen - Etudes', subtitle: '6 Étape(s)', imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/ambassade-de-hongrie.webp' },
  { id: 2, title: "Guide d'accès à l'information en Tunisie", subtitle: '3 Étape(s)', imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/linstance-dacces-a-linformation.webp' },
  { id: 3, title: "Achat d'une voiture populaire", subtitle: '9 Étape(s)', imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/ministere-de-lindustrie-et-du-commerce.webp' },
  { id: 4, title: "Inscription d'une naissance", subtitle: '6 Étape(s)', imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/municipalite-agareb.webp' },
  { id: 5, title: "Achat d'abonnement Transtu, TGM, Métro (Étudiants) - La Poste", subtitle: '6 Étape(s)', imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/transtu.webp' },
]);
const searchTerm = ref('');

const filteredLists = computed(() => {
  const term = searchTerm.value.toLowerCase();
  return lists.value.filter(list => list.title.toLowerCase().includes(term));
});
const handleCardClick = (index) => {
  zoomedCard.value = zoomedCard.value === index ? null : index;
};

const handleScrollStart = () => {
  zoomedCard.value = null;
};

const handleScrollEnd = () => {

};
</script>

<style scoped>
.CardContent {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

ion-card {
  width: 6cm;
  height: 4cm;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

ion-card.zoomed {
  transform: scale(1.1);
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

.Logo {
  width: 60px;
  height: 60px;
}

.Title {
  font-size: 19px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.DepricatedItemThumbnail {
  padding: 20px;
}

.Container {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.Content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.Image {
  width: 50px;
  height: 50px;
}

.ListItemTitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.SecondaryText1 {
  font-size: 14px;
  color: #888;
}
ion-item {
  border-bottom: 1px solid #ccc; 

}
.ArrowIcon {
  color: #6b6d6e;
  font-size: 25px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
