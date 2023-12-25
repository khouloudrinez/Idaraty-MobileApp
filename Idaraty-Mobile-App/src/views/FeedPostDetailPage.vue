<template>
    <ion-page>
      <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" class="back-button" @click="goToHomeScreen">
          <ion-icon name="arrow-back" class="back-icon"></ion-icon>
          <span class="back-text">Previous</span>
        </ion-buttons>
        
      </ion-toolbar>
    </ion-header>
     
  
      <ion-content class="ion-padding" v-if="post">
        <ion-card>
          <ion-img v-if="post.image" :src="post.image"></ion-img>
          <ion-card-header>
            <ion-card-title>{{ post.title }}</ion-card-title>
            <ion-card-subtitle>{{ post.subtitle }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-text>
              {{ post.content }}
            </ion-text>
          </ion-card-content>
        </ion-card>
  
        <ion-footer class="feed-actions">
          <ion-button @click="commentOnPost" fill="clear" class="action-button">
            <ion-icon name="chatbox"></ion-icon>
            Commenter
          </ion-button>
          <ion-button @click="sharePost" fill="clear" class="action-button">
            <ion-icon name="share"></ion-icon>
            Partager
          </ion-button>
        </ion-footer>
      </ion-content>
  
      <ion-loading v-else>
        <ion-spinner></ion-spinner>
      </ion-loading>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { IonHeader,IonTitle, IonContent, IonPage, IonIcon,IonImg,IonLoading, IonSpinner,IonText,IonButton, IonCardTitle, IonCard , IonFooter, IonCardContent,IonCardHeader,IonCardSubtitle} from '@ionic/vue';
  import { useRouter } from 'vue-router';
//   import Navbar from './Navbar.vue';
  
  const router = useRouter();
  const id = ref(null);
  const post = ref(null);
  const feedItems = [
  {id: 1, title: 'Tunisie: La validité du passeport passera de 5 à 10 ans', subtitle: 'Ministère des Finances', content : "Le ministre des Finances Nizar Yaïche a fait savoir que le gouvernement annoncera prochainement le doublement de la période de validité des passeports à 10 ans au lieu de 5 ans pour les personnes âgées de plus de quinze ans.\n\nIl a expliqué qu’une période de validité de 5 ans restera pour les moins de 15 ans, étant donné que les traits physiques changent chez cette tranche d’âge.\n\nLe ministre a ajouté que cette décision avait été prise en consultation avec le ministère de l’Intérieur, qui s’y prépare actuellement. D’ailleurs, un décret gouvernemental portant sur cette mesure sera publié dans la semaine prochaine."
, image: "/post-passport-tunisien-double-validite.png" },
  {id: 2, title: "Municipalité de Tunis: Augumentation des droits de stationnement et tarifs de la fourrière", subtitle: 'Municipalité Tunis', content: "La Municipalité de Tunis annonce une augmentation des droits de stationnement et tarifs relatifs à la fourrière applicables à partir du lundi 5 Octobre 2020\n\nREPUBLIQUE TUNISIENNE MUNICIPALITE DE TUNIS\n\nAVIS AU PUBLIC\n\nIl est porté à la connaissance du public qu’il a été procédé à la révision des droits du stationnement dans les parkings municipaux et sur la voirie, ainsi que des tarifs de répression des infractions à la réglementation du stationnement dans la ville de Tunis, et ce, comme suit :\n\nLe droit du stationnement dans les parkings municipaux, gérés par l’Agence municipale de gestion, est fixé à 2500 millimes/ séance.\nLe droit du stationnement dans les parkings municipaux à étages concédés (Lafayette, rue Mokhtar Attia et rue Abderrazek Chraibi) est fixé à 900 millimes/ heure.\nLe droit du stationnement payant sur la voie publique dans des zones bleues équipées d’horodateurs est fixé à 1100 millimes/heure.\nLe tarif de libération d’un véhicule immobilisé, suite à une infraction aux réglementaires du stationnement dans les zones de stationnement payant (zones bleues), est fixé à 20 dinars.\nLe tarif de libération d’un véhicule mis en fourrière pour un stationnement interdit, est fixé à 45 dinars.\nL'application des arrêtés municipaux relatifs à ces nouveaux tarifs est prévue pour le lundi 5 Octobre 2020."
, image: "/post-municipalite-de-tunis-augumentation-des-droits-de-stationnement-fourriere.png" },
  {id: 3, title: "Institut national de la météorologie - Vague de chaleur intense à venir annoncée", subtitle: "Institut National de la Météorologie ", content: "L’Institut national de la météorologie (INM) annonce une hausse remarquable des températures sur tout le pays à partir de ce mercredi 12 Août jusqu’au milieu de la semaine prochaine. Cette hausse sera accompagnée de vents de sirocco et dépassera les moyennes saisonnières du mois d’août avec de 4 à 8°C de différences, notamment dans les régions du nord et du centre.\n\nVoici un résumé des températures à partir de ce mercredi.\n\nGrand Tunis (37°C, 39°C)\nBizerte (35°C, 36°C, 39°C)\nNabeul (32°C, 34°C, 36°C)\nZaghouan (36°C, 37°C, 40°C)\nBéja (38°C, 41°C, 41°C)\nJendouba (40°C, 42°C, 42°C)\nLe Kef (36°C, 39°C, 39°C)\nSiliana (37°C, 40°C, 41°C)\nSousse (35°C, 36°C, 37°C)\nMonastir (34°C, 36°C, 37°C)\nMahdia (32°C, 32°C, 36°C)\nKairouan (39°C, 41°C, 42°C)\nSidi Bouzid (36°C, 40°C, 40°C)\nKasserine (36°C, 39°C, 39°C)\nGafsa (37°C, 39°C, 40°C)\nTozeur (40°C, 41°C, 42°C)\nKebili (39°C, 41°C, 43°C)\nSfax (32°C, 33°C, 36°C)\nGabes (33°C, 34°C, 36°C)\nMédenine (36°C, 37°C, 38°C)\nTataouine (36°C, 37°C, 39°C)\n\nCette vague de chaleur, à la limite de la canicule, nous invite à prendre soin des plus fragiles d'entre nous, c'est-à-dire les personnes âgées, les personnes souffrant d'une maladie et les femmes enceintes et les inciter à s'hydrater en permanence et à rester au frais.\n\nPour information, canicule et vague de chaleur sont deux choses différentes. Pour parler de canicule, les températures doivent être plus élevées de 5 degrés par rapport aux normales de saison, le jour, comme la nuit, et cela pendant au moins 3 jours et 3 nuits.\n\nN'oubliez donc pas votre casquette, vos lunettes et profitez des plages hors des pics de chaleurs et en appliquant les protections adéquates."
, image: "/post-institut-national-de-la-meteorologie-vague-chaleur-tunisie-inm-aout-2020.png" },
{id: 4, title: "La Télé-déclaration désormais obligatoire à partir d'un chiffre d'affaires de 100 mille dinars", subtitle:"Ministère des Finances", content :"Le chiffre d'affaires annuel brut réalisé par les contribuables tenus de déposer les déclarations, listes et relevés comportant des renseignements destinés à l'administration fiscale ou aux services du recouvrement de l'impôt sur supports magnétiques ou par les moyens électroniques fiables a été fixé par arrêté du ministre des Finances du 22 mai 2020 (publié dans le JORT le 29 mai 2020)\n\nCe chiffre d'affaires réalisé est désormais fixé à 100 mille dinars, contre 500 mille dinars d'affaires actuellement. Cet arrêté s'applique aux déclarations fiscales déposées à compter du premier juillet 2020, dues par les contribuables soumis au régime réel.\n\nÀ titre de rappel, le service de Télé-déclaration fiscale permet de liquider et de payer vos déclarations mensuelles d’impôts, vos déclarations annuelles (déclarations mensuelles, dépôt des déclarations de l'impôt sur les sociétés, déclaration de l'avance due par les sociétés de personnes et assimilées, déclaration de l'impôt sur le revenu des personnes physiques, déclaration de l'acompte provisionnel)."
 , image : "/post-teledeclaration-tn.png" }
];
  
  onMounted(() => {
    if (router.currentRoute.value.params) {
      id.value = router.currentRoute.value.params.id;
      post.value = feedItems.find(item => item.id === Number(id.value));
    }
  });
  
  const commentOnPost = () => {
 
  };
  
  const sharePost = () => {
  
  };

  const goToHomeScreen = () => {
  router.push('/homescreen');
};
  </script>
  
  <style scoped>
.ion-card {
  border-radius: 15px;
}
.ion-card-content {
  line-height: 1.5;
}

.feed-actions {
  display: flex;
  justify-content: space-between;
  padding: 1px; 
  background-color: #fff; 
  position: center;
 
 
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
}

.action-button {
  color: #555;
  flex: 2; 
}

.back-button {
  font-size: 20px; 
  margin-left: 16px; 
  margin-top: 8px; 
}

.back-icon {
  color: #000; 
}
.back-text {
  margin-left: 5px; 
  font-size: 20px;
  color: #949494;
}
</style>
  