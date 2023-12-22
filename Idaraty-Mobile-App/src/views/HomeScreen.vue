<template>
  <ion-page>
    <ion-header>
      <Navbar></Navbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-scroll :options="scrollOptions" class="scroll-container">
        <ion-row class="scroll-content">
          <ion-col v-for="card in cards" :key="card.id">
            <ion-card class="horizontal-card">
              <ion-img :src="card.image" alt="Card Image"></ion-img>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-scroll>

      
      <div class="feed-container">
        <!-- Card First Modal  -->
        <ion-card v-for="(item, index) in feedItems" :key="index" @click="navigateToPostDetail(item)" class="feed-item">
          <ion-img :src="item.image"></ion-img>
          <ion-card-header>
            <ion-card-title class="feed-title">{{ item.title }}</ion-card-title>
            <ion-card-subtitle class="feed-subtitle">{{ item.subtitle }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            {{ item.content.substring(0, 100) }}
          </ion-card-content>
          <ion-footer class="feed-actions">
            <ion-button @click="saveItem(item)" fill="clear" class="action-button">
              <ion-icon name="bookmark"></ion-icon>
              Enregistrer
            </ion-button>
            <ion-button @click="navigateToPostDetail(item)" fill="clear" class="action-button">
              Voir plus
            </ion-button>
          </ion-footer>
        </ion-card>
          <!-- Card second Modal  -->
          <!-- <ion-card v-for="(item, index) in feedItems" :key="index" @click="navigateToPostDetail(item)" class="feed-item horizontal-card">
  <ion-row>
    <ion-col size="4">
      <ion-img :src="item.image"></ion-img>
    </ion-col>
    <ion-col size="8">
      <ion-card-header>
        <ion-card-title class="feed-title">{{ item.title }}</ion-card-title>
        <ion-card-subtitle class="feed-subtitle">{{ item.subtitle }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        {{ item.content.substring(0, 100) }}
      </ion-card-content>
      <ion-footer class="feed-actions">
        <ion-button @click="saveItem(item)" fill="clear" class="action-button">
          <ion-icon name="bookmark"></ion-icon>
          Enregistrer
        </ion-button>
        <ion-button @click="navigateToPostDetail(item)" fill="clear" class="action-button">
          Voir plus
        </ion-button>
      </ion-footer>
    </ion-col>
  </ion-row>
</ion-card> -->

<!-- CARD THIRD MODAL-->
<!-- <ion-card v-for="(item, index) in feedItems" :key="index" class="feed-item compact-card">
  <ion-card-content>
    <ion-card-header>
      <ion-card-title class="feed-title">{{ item.title }}</ion-card-title>
      <ion-card-subtitle class="feed-subtitle">{{ item.subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-img :src="item.image" class="compact-image"></ion-img>
    <ion-card-subtitle class="compact-subtitle">{{ item.content.substring(0, 80) }}</ion-card-subtitle>
    <ion-footer class="feed-actions"> -->
 
      <!-- Swap the positions of "Voir plus" button and ellipsis icon -->
      <!-- <ion-button @click="navigateToPostDetail(item)" fill="clear" class="action-button">
        Voir plus
      </ion-button>
      
      <ion-button @click="presentPopover($event, item)" fill="clear" class="action-button">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </ion-button> -->

      <!-- Ion Popover for actions -->
      <!-- <ion-popover
        v-if="item.showPopover"
        :event="item.popoverEvent"
        translucent
        @ionPopoverDidDismiss="item.showPopover = false"
      >
        <ion-list>
          <ion-item @click="saveItem(item)">
            <ion-icon name="bookmark" slot="start"></ion-icon>
            Enregistrer
          </ion-item>
          <ion-item @click="commentItem(item)">
            <ion-icon name="chatbubble" slot="start"></ion-icon>
            Commenter
          </ion-item>
          <ion-item @click="shareItem(item)">
            <ion-icon name="share" slot="start"></ion-icon>
            Partager
          </ion-item>
        </ion-list>
      </ion-popover>
    </ion-footer>
  </ion-card-content> 
</ion-card>-->

      </div>

      <ion-loading :is-active="isLoading"></ion-loading>

      <ion-infinite-scroll :disabled="!canLoadMore" @ionInfinite="loadMoreItems">
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more items..."
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>

    <ion-toolbar class="fixed-tab">
      <Tabs></Tabs>
    </ion-toolbar>
  </ion-page>
  
</template>


<script setup>
import { ref, h } from 'vue';
import {
  IonContent,
  IonPage,
  IonButton,
  IonFooter,
  IonIcon,
  IonHeader,
  IonPopover,
  popoverController,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import Tabs from './Tabs.vue';
import Navbar from './Navbar.vue';
// import PopoverContent from './PopoverContent.vue';
const popover = ref(null);
const router = useRouter();


const cards = [
  { id: 1, image: 'https://v2.idaraty.tn/images/logos/ministere-de-lagriculture.webp' },
  { id: 2, image: 'https://v2.idaraty.tn/images/logos/laposte-tunisie.webp' },
  { id: 3, image: 'https://v2.idaraty.tn/images/logos/cnss-tunisie.webp' },
  { id: 4, image: 'https://v2.idaraty.tn/images/logos/ministere-de-lenseignement-superieur-de-la-recherche-scientifique.webp' },
  { id: 5, image: 'https://v2.idaraty.tn/images/logos/cnrps-tunisie.webp' },
  { id: 6, image: 'https://v2.idaraty.tn/images/logos/aneti.webp' },
  { id: 7, image: 'https://v2.idaraty.tn/images/logos/ministere-du-commerce.webp' },
  { id: 8, image: 'https://v2.idaraty.tn/images/logos/agence-nationale-de-certification-electronique.webp' },
  { id: 9, image:  'https://v2.idaraty.tn/images/logos/ministere-des-finances.webp'},
  { id: 10, image: '/https://v2.idaraty.tn/images/logos/ministere-du-commerce.webp' },
]; 

const scrollOptions = {
  direction: 'x',
  slot: 'fixed',
  scrollbarX: false,
  scrollbarY: false,
};



const isLoading = false;

const swiperItems = [
  { title: 'Item 1', image: "/idaratyy.png" },
  { title: 'Item 2', image: "/idaratyy.png" },
  { title: 'Item 3', image: "/idaratyy.png" },
  
];

const feedItems = [
  {id: 1, title: 'Tunisie: La validité du passeport passera de 5 à 10 ans', subtitle: 'Ministère des Finances', content : "Le ministre des Finances Nizar Yaïche a fait savoir que le gouvernement annoncera prochainement le doublement de la période de validité des passeports à 10 ans au lieu de 5 ans pour les personnes âgées de plus de quinze ans.\n\nIl a expliqué qu’une période de validité de 5 ans restera pour les moins de 15 ans, étant donné que les traits physiques changent chez cette tranche d’âge.\n\nLe ministre a ajouté que cette décision avait été prise en consultation avec le ministère de l’Intérieur, qui s’y prépare actuellement. D’ailleurs, un décret gouvernemental portant sur cette mesure sera publié dans la semaine prochaine."
, image: "/post-passport-tunisien-double-validite.png",showPopover: false },
  {id: 2, title: "Municipalité de Tunis: Augumentation des droits de stationnement et tarifs de la fourrière", subtitle: 'Municipalité Tunis', content: "La Municipalité de Tunis annonce une augmentation des droits de stationnement et tarifs relatifs à la fourrière applicables à partir du lundi 5 Octobre 2020\n\nREPUBLIQUE TUNISIENNE MUNICIPALITE DE TUNIS\n\nAVIS AU PUBLIC\n\nIl est porté à la connaissance du public qu’il a été procédé à la révision des droits du stationnement dans les parkings municipaux et sur la voirie, ainsi que des tarifs de répression des infractions à la réglementation du stationnement dans la ville de Tunis, et ce, comme suit :\n\nLe droit du stationnement dans les parkings municipaux, gérés par l’Agence municipale de gestion, est fixé à 2500 millimes/ séance.\nLe droit du stationnement dans les parkings municipaux à étages concédés (Lafayette, rue Mokhtar Attia et rue Abderrazek Chraibi) est fixé à 900 millimes/ heure.\nLe droit du stationnement payant sur la voie publique dans des zones bleues équipées d’horodateurs est fixé à 1100 millimes/heure.\nLe tarif de libération d’un véhicule immobilisé, suite à une infraction aux réglementaires du stationnement dans les zones de stationnement payant (zones bleues), est fixé à 20 dinars.\nLe tarif de libération d’un véhicule mis en fourrière pour un stationnement interdit, est fixé à 45 dinars.\nL'application des arrêtés municipaux relatifs à ces nouveaux tarifs est prévue pour le lundi 5 Octobre 2020."
, image: "/post-municipalite-de-tunis-augumentation-des-droits-de-stationnement-fourriere.png",showPopover: false },
  {id: 3, title: "Institut national de la météorologie - Vague de chaleur intense à venir annoncée", subtitle: "Institut National de la Météorologie ", content: "L’Institut national de la météorologie (INM) annonce une hausse remarquable des températures sur tout le pays à partir de ce mercredi 12 Août jusqu’au milieu de la semaine prochaine. Cette hausse sera accompagnée de vents de sirocco et dépassera les moyennes saisonnières du mois d’août avec de 4 à 8°C de différences, notamment dans les régions du nord et du centre.\n\nVoici un résumé des températures à partir de ce mercredi.\n\nGrand Tunis (37°C, 39°C)\nBizerte (35°C, 36°C, 39°C)\nNabeul (32°C, 34°C, 36°C)\nZaghouan (36°C, 37°C, 40°C)\nBéja (38°C, 41°C, 41°C)\nJendouba (40°C, 42°C, 42°C)\nLe Kef (36°C, 39°C, 39°C)\nSiliana (37°C, 40°C, 41°C)\nSousse (35°C, 36°C, 37°C)\nMonastir (34°C, 36°C, 37°C)\nMahdia (32°C, 32°C, 36°C)\nKairouan (39°C, 41°C, 42°C)\nSidi Bouzid (36°C, 40°C, 40°C)\nKasserine (36°C, 39°C, 39°C)\nGafsa (37°C, 39°C, 40°C)\nTozeur (40°C, 41°C, 42°C)\nKebili (39°C, 41°C, 43°C)\nSfax (32°C, 33°C, 36°C)\nGabes (33°C, 34°C, 36°C)\nMédenine (36°C, 37°C, 38°C)\nTataouine (36°C, 37°C, 39°C)\n\nCette vague de chaleur, à la limite de la canicule, nous invite à prendre soin des plus fragiles d'entre nous, c'est-à-dire les personnes âgées, les personnes souffrant d'une maladie et les femmes enceintes et les inciter à s'hydrater en permanence et à rester au frais.\n\nPour information, canicule et vague de chaleur sont deux choses différentes. Pour parler de canicule, les températures doivent être plus élevées de 5 degrés par rapport aux normales de saison, le jour, comme la nuit, et cela pendant au moins 3 jours et 3 nuits.\n\nN'oubliez donc pas votre casquette, vos lunettes et profitez des plages hors des pics de chaleurs et en appliquant les protections adéquates."
, image: "/post-institut-national-de-la-meteorologie-vague-chaleur-tunisie-inm-aout-2020.png",showPopover: false },
   {id: 4, title: "La Télé-déclaration désormais obligatoire à partir d'un chiffre d'affaires de 100 mille dinars", subtitle:"Ministère des Finances", content :"Le chiffre d'affaires annuel brut réalisé par les contribuables tenus de déposer les déclarations, listes et relevés comportant des renseignements destinés à l'administration fiscale ou aux services du recouvrement de l'impôt sur supports magnétiques ou par les moyens électroniques fiables a été fixé par arrêté du ministre des Finances du 22 mai 2020 (publié dans le JORT le 29 mai 2020)\n\nCe chiffre d'affaires réalisé est désormais fixé à 100 mille dinars, contre 500 mille dinars d'affaires actuellement. Cet arrêté s'applique aux déclarations fiscales déposées à compter du premier juillet 2020, dues par les contribuables soumis au régime réel.\n\nÀ titre de rappel, le service de Télé-déclaration fiscale permet de liquider et de payer vos déclarations mensuelles d’impôts, vos déclarations annuelles (déclarations mensuelles, dépôt des déclarations de l'impôt sur les sociétés, déclaration de l'avance due par les sociétés de personnes et assimilées, déclaration de l'impôt sur le revenu des personnes physiques, déclaration de l'acompte provisionnel)."
 , image : "/post-teledeclaration-tn.png",showPopover: false }
  
];

const presentPopover = async (event, item) => {
  console.log('presentPopover called');
  item.showPopover = true;
  item.popoverEvent = event;

  if (popover.value) {
    popover.value.present();
  }
};

const saveItem = (item) => {
  console.log('Save item clicked:', item);
  // Implement save logic
  item.showPopover = false;
};
const commentItem = (item) => {
  console.log('Comment item clicked:', item);
  // Implement comment logic
  item.showPopover = false;
};

const shareItem = (item) => {
  console.log('Share item clicked:', item);
  // Implement share logic
  item.showPopover = false;
};




const onSearch = (event) => {
  
};

const dismissPopover = async () => {
  await popover.value.dismiss();
};
const navigateToPostDetail = (item) => {

  router.push({ name: 'FeedPostDetail', params: { id: item.id } });
};
</script>

<style scoped>
 .horizontal-card {
    width: 3cm;
    height: 3cm;
    background: white;
    border: 1px ;
  }
  
  ion-scroll {
    white-space: nowrap;
    overflow-x: hidden;
    display: flex;
    flex-wrap: nowrap;
    animation: scrollAnimation 15s linear infinite;
  }
  
  .scroll-container {
    width: calc((3cm + 10px) * 10); 
  }
  
  .scroll-content {
    flex: 0 0 auto;
    gap: 10px;
  }
  
  @keyframes scrollAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc((3cm + 10px) * -10)); /* Move to the left by the total width of cards */
    }
  }
  

.feed-container {
  
  display: flex;
  flex-direction: column;
}
.title {
  margin-top: 20px;
  margin-right: 15px;
} 

.feed-item {
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

ion-card {
  background: white;
  border: 1px solid #f2efef;
}

ion-img {
  width: 100%;
  max-height: 200px; 
  object-fit: cover;
}

.feed-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.feed-subtitle {
  color: #555;
  margin-bottom: 8px;
}

.feed-actions {
  display: flex;
  justify-content: space-between;
}

.action-button {
  color: #6e6d6d;
}



/*  SECOND CARD STYLE */
/* .horizontal-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.horizontal-card ion-card-header,
.horizontal-card ion-card-content,
.horizontal-card ion-footer {
  padding: 12px;
}

.horizontal-card ion-card-title {
  font-size: 18px;
  font-weight: bold;
}

.horizontal-card ion-card-subtitle {
  color: #555;
  font-size: 14px;
}

.horizontal-card ion-card-content {
  color: #333;
}

.horizontal-card ion-footer {
  display: flex;
  justify-content: space-between;
}

.horizontal-card .action-button {
  color: #6e6d6d;
} */

/*  THIRD CARD STYLE */

/* .compact-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.compact-card ion-card-content {
  padding: 12px;
}

.compact-card ion-card-title {
  font-size: 18px;
  font-weight: bold;
}

.compact-card ion-card-subtitle {
  color: #555;
  font-size: 14px;
}

.compact-card .compact-image {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  margin-top: 8px;
}

.compact-card ion-card-content ion-card-subtitle {
  margin-top: 20px;
}

.compact-card ion-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 12px; 
}

.compact-card .action-button {
  color: #6e6d6d;
}
 */


 
</style>


