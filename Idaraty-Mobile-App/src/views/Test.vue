<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="feed-container">
         <!-- Card First Modal   -->
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
            <ion-button @click="(event) => toggleSave(event, item)" fill="clear" class="action-button">
   <ion-icon :name="item.saved ? 'bookmark' : 'bookmark-outline'"></ion-icon>
   Enregistrer
</ion-button>


            <ion-button @click="navigateToPostDetail(item)" fill="clear" class="action-button">
              Voir plus
            </ion-button>
          </ion-footer>
        </ion-card>
 
 <!-- <ion-card v-for="(item, index) in feedItems" :key="index" @click="navigateToPostDetail(item)" class="feed-item">
  <div class="custom-card">
    <ion-img class="image" :src="item.image"></ion-img>
    <div class="content">
      <a href="#">
        <span class="title">{{ item.title }}</span>
      </a>
      <p class="desc">{{ item.content.substring(0, 100) }}</p>
      <a @click="navigateToPostDetail(item)" class="action">
        Voir plus
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</ion-card> -->


        </div>
      </ion-content>
    </ion-page>
  </template>
  <!-- <template>
    <ion-page>
      <ion-content class="ion-padding">
        <section class="container">
          <ion-card v-for="(item, index) in feedItems" :key="index" @click="navigateToPostDetail(item)" class="card">
            <ion-card-header class="content">
              <ion-img class="logo" :src="item.image"></ion-img>
              <ion-label class="title">{{ item.title }}</ion-label>
              <ion-label class="h6">{{ item.subtitle }}</ion-label>
              <ion-label class="hover_content">
                <p>{{ item.content }}</p>
              </ion-label>
            </ion-card-header>
          </ion-card>
        </section>
      </ion-content>
    </ion-page>
  </template> -->
  <!-- <template>
    <ion-page>
      <ion-content class="ion-padding">
        <section class="container">
          <ion-card v-for="(item, index) in feedItems" :key="index" @click="navigateToPostDetail(item)" class="card">
            <div class="card-image" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
            <div class="category">{{ item.title }}</div>
            <div class="heading">{{ item.content.substring(0, 80) }}...</div>
            <div class="author">By <span class="name">{{ item.subtitle }}</span> {{ item.date }}</div>
          </ion-card>
        </section>
      </ion-content>
    </ion-page>
  </template> -->

  <script setup>
import { ref, reactive } from 'vue';
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

import { useRouter } from 'vue-router';
import Tabs from './Tabs.vue';
import Navbar from './Navbar.vue';

const router = useRouter();






const feedItems = reactive( [
  {id: 1, title: 'Tunisie: La validité du passeport passera de 5 à 10 ans', subtitle: 'Ministère des Finances', content : "Le ministre des Finances Nizar Yaïche a fait savoir que le gouvernement annoncera prochainement le doublement de la période de validité des passeports à 10 ans au lieu de 5 ans pour les personnes âgées de plus de quinze ans.\n\nIl a expliqué qu’une période de validité de 5 ans restera pour les moins de 15 ans, étant donné que les traits physiques changent chez cette tranche d’âge.\n\nLe ministre a ajouté que cette décision avait été prise en consultation avec le ministère de l’Intérieur, qui s’y prépare actuellement. D’ailleurs, un décret gouvernemental portant sur cette mesure sera publié dans la semaine prochaine."
 , image: "/Image.png",  saved: false },
//   {id: 2, title: "Municipalité de Tunis: Augumentation des droits de stationnement et tarifs de la fourrière", subtitle: 'Municipalité Tunis', content: "La Municipalité de Tunis annonce une augmentation des droits de stationnement et tarifs relatifs à la fourrière applicables à partir du lundi 5 Octobre 2020\n\nREPUBLIQUE TUNISIENNE MUNICIPALITE DE TUNIS\n\nAVIS AU PUBLIC\n\nIl est porté à la connaissance du public qu’il a été procédé à la révision des droits du stationnement dans les parkings municipaux et sur la voirie, ainsi que des tarifs de répression des infractions à la réglementation du stationnement dans la ville de Tunis, et ce, comme suit :\n\nLe droit du stationnement dans les parkings municipaux, gérés par l’Agence municipale de gestion, est fixé à 2500 millimes/ séance.\nLe droit du stationnement dans les parkings municipaux à étages concédés (Lafayette, rue Mokhtar Attia et rue Abderrazek Chraibi) est fixé à 900 millimes/ heure.\nLe droit du stationnement payant sur la voie publique dans des zones bleues équipées d’horodateurs est fixé à 1100 millimes/heure.\nLe tarif de libération d’un véhicule immobilisé, suite à une infraction aux réglementaires du stationnement dans les zones de stationnement payant (zones bleues), est fixé à 20 dinars.\nLe tarif de libération d’un véhicule mis en fourrière pour un stationnement interdit, est fixé à 45 dinars.\nL'application des arrêtés municipaux relatifs à ces nouveaux tarifs est prévue pour le lundi 5 Octobre 2020."
// , image: "/post-municipalite-de-tunis-augumentation-des-droits-de-stationnement-fourriere.png", saved: false },
//   {id: 3, title: "Institut national de la météorologie - Vague de chaleur intense à venir annoncée", subtitle: "Institut National de la Météorologie ", content: "L’Institut national de la météorologie (INM) annonce une hausse remarquable des températures sur tout le pays à partir de ce mercredi 12 Août jusqu’au milieu de la semaine prochaine. Cette hausse sera accompagnée de vents de sirocco et dépassera les moyennes saisonnières du mois d’août avec de 4 à 8°C de différences, notamment dans les régions du nord et du centre.\n\nVoici un résumé des températures à partir de ce mercredi.\n\nGrand Tunis (37°C, 39°C)\nBizerte (35°C, 36°C, 39°C)\nNabeul (32°C, 34°C, 36°C)\nZaghouan (36°C, 37°C, 40°C)\nBéja (38°C, 41°C, 41°C)\nJendouba (40°C, 42°C, 42°C)\nLe Kef (36°C, 39°C, 39°C)\nSiliana (37°C, 40°C, 41°C)\nSousse (35°C, 36°C, 37°C)\nMonastir (34°C, 36°C, 37°C)\nMahdia (32°C, 32°C, 36°C)\nKairouan (39°C, 41°C, 42°C)\nSidi Bouzid (36°C, 40°C, 40°C)\nKasserine (36°C, 39°C, 39°C)\nGafsa (37°C, 39°C, 40°C)\nTozeur (40°C, 41°C, 42°C)\nKebili (39°C, 41°C, 43°C)\nSfax (32°C, 33°C, 36°C)\nGabes (33°C, 34°C, 36°C)\nMédenine (36°C, 37°C, 38°C)\nTataouine (36°C, 37°C, 39°C)\n\nCette vague de chaleur, à la limite de la canicule, nous invite à prendre soin des plus fragiles d'entre nous, c'est-à-dire les personnes âgées, les personnes souffrant d'une maladie et les femmes enceintes et les inciter à s'hydrater en permanence et à rester au frais.\n\nPour information, canicule et vague de chaleur sont deux choses différentes. Pour parler de canicule, les températures doivent être plus élevées de 5 degrés par rapport aux normales de saison, le jour, comme la nuit, et cela pendant au moins 3 jours et 3 nuits.\n\nN'oubliez donc pas votre casquette, vos lunettes et profitez des plages hors des pics de chaleurs et en appliquant les protections adéquates."
// , image: "/post-institut-national-de-la-meteorologie-vague-chaleur-tunisie-inm-aout-2020.png", saved: false },
//    {id: 4, title: "La Télé-déclaration désormais obligatoire à partir d'un chiffre d'affaires de 100 mille dinars", subtitle:"Ministère des Finances", content :"Le chiffre d'affaires annuel brut réalisé par les contribuables tenus de déposer les déclarations, listes et relevés comportant des renseignements destinés à l'administration fiscale ou aux services du recouvrement de l'impôt sur supports magnétiques ou par les moyens électroniques fiables a été fixé par arrêté du ministre des Finances du 22 mai 2020 (publié dans le JORT le 29 mai 2020)\n\nCe chiffre d'affaires réalisé est désormais fixé à 100 mille dinars, contre 500 mille dinars d'affaires actuellement. Cet arrêté s'applique aux déclarations fiscales déposées à compter du premier juillet 2020, dues par les contribuables soumis au régime réel.\n\nÀ titre de rappel, le service de Télé-déclaration fiscale permet de liquider et de payer vos déclarations mensuelles d’impôts, vos déclarations annuelles (déclarations mensuelles, dépôt des déclarations de l'impôt sur les sociétés, déclaration de l'avance due par les sociétés de personnes et assimilées, déclaration de l'impôt sur le revenu des personnes physiques, déclaration de l'acompte provisionnel)."
//  , image : "/post-teledeclaration-tn.png", saved: false }
  
]);

const savedPosts = ref([]);

const toggleSave = (event, item) => {
  console.log('Toggle Save Called');
  event.stopPropagation();

  item.saved = !item.saved;

  if (item.saved) {
    savedPosts.value = [...savedPosts.value, item];
  } else {
    const index = savedPosts.value.findIndex((post) => post.id === item.id);
    if (index !== -1) {
      savedPosts.value.splice(index, 1);
    }
  }
  localStorage.setItem('savedPosts', JSON.stringify(savedPosts.value));
};


const navigateToPostDetail = (item) => {

  router.push({ name: 'FeedPostDetail', params: { id: item.id } });
};

  </script>
  <!-- 1 -->
 <style scoped>
  .feed-item {
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ion-card{
    background: #f9f9f9; /* Light gray background */
    border: 1px solid #e0e0e0; /* Light gray border */
  }

  ion-img{
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  .feed-title{
    margin-top: 13px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333; /* Dark text color */
  }

  .feed-subtitle{
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
</style>

<!-- 2 -->
<!-- <style scoped>
  .feed-item{
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ion-card {
    background: #f9f0f0; 
    border: 1px solid #aaa8a8; 
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
    color: #1f1e1e; 
  }

  .feed-subtitle {
    color: #3b3b3b; 
    margin-bottom: 8px;
  }

  .feed-actions {
    display: flex;
    justify-content: space-between;
  }

  .action-button {
    color: #3b3b3b; 
  }
</style> -->

<!-- 3 -->
<!-- <style scoped>
  .feed-item {
    margin-bottom: 16px; 
    overflow: hidden;   
  }
  .feed-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #555; /* Dark gray text color */
  }

  .feed-subtitle {
    color: #777; /* Lighter gray subtitle color */
    margin-bottom: 8px;
  }

  .feed-actions {
    display: flex;
    justify-content: space-between;
  }

  .action-button {
    color: #999; /* Gray action button text color */
  }
</style> -->


<!-- 4 -->
<!-- 
<style scoped>
  .feed-container {
    display: flex;
    flex-direction: column;
  }

  .feed-item {
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ion-card {
    background: #fff;
    border: 1px solid #e0e0e0;
  }

  .compact-image {
   
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  .feed-title {
    font-size: 18px;
    font-weight: bold;
    bottom:0px ;
    color: #333;
  }

  .feed-subtitle,
  .compact-subtitle {
    margin-top: 10px;
    color: #555;
 
  }

  .feed-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .action-button {
    color: #6e6d6d;
  }

  .ion-popover-wrapper {
    max-width: 150px; 
  }
</style> -->


<!-- <style scoped>
.custom-card {
  max-width: 300px;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
}

.custom-card .image {
  object-fit: contain;
  width: 120%;
  height: 100%;
 
}

.custom-card a {
  text-decoration: none;
}

.custom-card .content {
  padding: 1.1rem;
}

.custom-card .title {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.custom-card .desc {
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.custom-card .action {
  display: inline-flex;
  margin-top: 1rem;
  color: #0c0c0c;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #dfdfe3;
  padding: 4px 8px;
  border-radius: 4px;
  /* margin-left :175px;   */
}

.custom-card .action span {
  transition: .3s ease;
}

.custom-card .action:hover span {
  transform: translateX(4px);
}
</style> -->


<!-- <style scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  position: relative;
  border: 1px solid #b8b6b6;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 22em;
  max-width: 80%;
  padding: 2em 0;
  background: #FFF;
  box-shadow: 0 0 6px 0 rgba(32, 32, 36, 0.12);
  transition: all 0.35s ease;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgb(232, 105, 105);
  height: 4px;
}

.card::before {
  width: 0;
  opacity: 0;
  transition: opacity 0 ease, width 0 ease;
  transition-delay: 0.5s;
}

.card::after {
  width: 100%;
  background: rgb(232, 105, 105);
  transition: width 0.5s ease;
}

.card .content {
  width: 18em;
  max-width: 80%;
}

.card .logo {
  margin: 0 0 1em;
  width: 100%;
  max-height: 10em;
  object-fit: cover;
  transition: all 0.35s ease;
}

.card .title {
  margin-bottom: 0.5em;
  color: black; 
  font-size: 1.2em; 
  font-weight: bold; 

}

.card .h6 {
  color: #7d7c7c;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 2px;
}

.card .hover_content {
  overflow: hidden;
  max-height: 0;
  transform: translateY(1em);
  transition: all 0.55s ease;
}

.card .hover_content p {
  margin: 1.5em 0 0;
  color: #6E6E70;
  line-height: 1.4em;
}

.card:hover {
  width: 24em;
  box-shadow: 0 10px 20px 0 rgba(32, 32, 36, 0.12);
}

.card:hover::before {
  width: 100%;
  opacity: 1;
  transition: opacity 0.5s ease, width 0.5s ease;
  transition-delay: 0;
}

.card:hover::after {
  width: 0;
  opacity: 0;
  transition: width 0 ease;
}

.card:hover .logo {
  margin-bottom: 10px;
  
}

.card:hover .hover_content {
  max-height: 10em;
  transform: none;
}
</style> -->

<style scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  height: 300px; /* Adjust the height as needed */
  width: 240px; /* Adjust the width as needed */
  background: white;
  padding: .4em;
  border-radius: 6px;
  overflow: hidden; /* Hide overflowing content */
}

.card:hover .card-image {
  transform: scale(0.98);
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 150px; 
  border-radius: 6px 6px 0 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s ease;
}

.category {
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 700;
  color: rgb(17, 17, 17);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 10px; /* Adjust the font-weight as needed */
  font-size: 0.8em;
  color: rgb(88, 87, 87);
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
</style>