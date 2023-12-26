<template>
  <ion-page>
    <ion-content v-if="list">
      <div class="section" v-if="list?.resume">
        <h2>Résumé</h2>
        <p>{{ list.resume }}</p>
      </div>
      <div class="section" v-if="list?.prerequis">
        <h2>Pré-requis</h2>
        <ion-list>
          <ion-item v-for="(prereq, index) in list.prerequis" :key="index">
            {{ prereq }}
          </ion-item>
        </ion-list>
      </div>
      <div class="section" v-if="list?.etapes">
        <h2>Étapes</h2>
        <ion-list>
          <ion-item v-for="(etape, index) in list.etapes" :key="index">
            {{ etape }}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>



<script setup>
import { IonContent, IonPage, IonList, IonItem} from '@ionic/vue';

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Tabs from './Tabs.vue';

const router = useRouter();
const id = ref(null);
const list = ref({
  resume: '',
  prerequis: '',
  etapes: '',
});
const lists = ref([
{
    id: 1,
    title: 'Obtention du visa Schengen - Etudes',
    subtitle: '6 Étape(s)',
    imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/ambassade-de-hongrie.webp',
    resume: 'Le visa d’études permet l’entrée, aux fins d’un séjour de courte ou de longue durée, mais à temps déterminé, à l’étranger qui entend suivre des cours universitaires, des cours d’études ou de formation professionnelle auprès des Instituts reconnus ou, en tout cas, qualifiés, ou bien à l’étranger appelé à mener des activités culturelles et de recherches.Le visa d’études est en outre délivré, pour la période nécessaire, à l’étranger pour passer les examens d’habilitation à l’exercice professionnel.',
    prerequis: [
      'Avoir plus de 14 ans.',
      'En ce qui concerne les activités d’études qui comportent l’exercice d’activités sanitaires, est exigée la reconnaissance préalable du titre d’étude habilitant à l’exercice professionnel de la part du Ministère italien de la Santé.'
    ],   
    etapes: [
      'Un formulaire de demande de visa de séjour',
      'Un passeport en cours de validité supérieure de trois mois à la durée du séjour',
      'Une photo format passeport',
      'Une documentation et des garanties concernant le cours d’études, de formation professionnelle ou les activités culturelles à mener',
      'Une documentation et des garanties concernant les moyens de subsistance nécessaires',
      'Une police d’assurance pour soins médicaux et hospitalisations, là où l’étranger n’ait pas droit à l’assistance sanitaire au pays concerné en vertu d’accords ou de conventions en vigueur avec le Pays d’origine.'
    ]  },
  { id: 2, title: "Guide d'accès à l'information en Tunisie", subtitle: '3 Étape(s)', 
  imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/linstance-dacces-a-linformation.webp',
  resume: "Vous pouvez accéder aux documents administratifs produits ou reçus par les organismes publics dans le cadre de leur mission de service public",
  etapes: [
    "Demande d'accés à l'information se transmet par voie postale avec accusé de réception ou en le déposant directement au bureau d'ordre contre récépissé ou en utilisant des technologies de communication (fax ou email) Il a accès aux documents administratifs",
    "Lorsque l'accès aux documents administratifs est disponible, l'oganisme est tenue d'informer par écrit",
    "Lorsque le document administratif ne peut être mis à disposition, vous devez être informé, en vous indiquant les raisons du rejet de la demande et les dispositions particulières contenues dans le décret approuvé, avec des explications sur son droit de recours contre la décision de refus"
  ]
 },
  { id: 3, title: "Achat d'une voiture populaire", subtitle: '9 Étape(s)', 
  imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/ministere-de-lindustrie-et-du-commerce.webp',
  resume: "Acquisition d'une voiture de tourisme dont la puissance ne dépasse pas 4 chevaux vapeur fiscaux bénéficiant du régime fiscal privilégié (Voitures populaires)",
  prerequis: [
    "Les personnes physiques doivent avoir la nationalité tunisienne.",
    "Pour les personnes non mariées : Un salaire mensuel net qui ne dépasse pas 10 fois le SMIC (3785.600 DT)",
    "Pour les couples : Un salaire mensuel net cumulé qui ne dépasse pas 15 fois le SMIC (5678.400 DT)",
    "Le bénéfice du régime fiscal privilégié octroyé ne peut être renouvelé qu'après sept ans de la date de mise en circulation du véhicule acquis précédemment.",
  ],
   etapes : [
    "Une copie de la carte d'identité nationale de l'intéressé et de son conjoint." ,
    "Un reçu du paiement de l'impôt sur le revenu de l'intéressé au titre de l'année écoulée délivré de la recette des finances territorialement compétente.",
    "Une attestation de travail de l'intéressé ou toute autre pièce le prouvant.",
    "Un reçu d'inscription délivrée par un concessionnaire.",
    "Un extrait de naissance datant au plus de trois mois, pour le célibataire et le divorcé accompagné d'un certificat de décès pour le conjoint veuf.",

   ] },
  { id: 4, title: "Inscription d'une naissance", subtitle: '6 Étape(s)',
   imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/municipalite-agareb.webp',
   prerequis: [
    "Naissance d'un nouveau-né.",
    "L'inscription doit avoir lieu dans les 10 jours suivants la naissance au-delà du délai légal, l'inscription ne peut se faire que par une décision rendue par le Tribunal de Première Instance",
   
  ],
    etapes: [
      "Déclaration du père de l'enfant ou la déclaration de l'hôpital ou de la clinique où la naissance a eu lieu Ou la déclaration de toute personne ayant assisté à l'accouchement",
      "La carte d'identité nationale du père ou de la mère Ou le livret familial Ou l'extrait de naissance de l'un des fils",
      "Présenter une demande à l'Officier d'état Civil",
      "Indiquer le lieu de la naissance"
     ]

 } ,
  { id: 5, title: "Achat d'abonnement Transtu, TGM, Métro (Étudiants) - La Poste",
   subtitle: '6 Étape(s)', imageSrc: 'https://idaraty.s3.us-west-000.backblazeb2.com/logos/transtu.webp',
   resume: "Les abonnements Ichtirak mis à votre disposition par la Poste Tunisienne.",
    prerequis: [' Etudiant'],
    etapes: [
      "Se rendre sur le site" ,
      "Présenter la carte d'identité nationale lors du retrait de l'abonnement dans le bureau de poste",
      "Reçu de paiement de l'inscription en ligne ou une copie du certificat d'inscription portant la photo de l'étudiant et le cachet de l'établissement",
      "Photo d'identité" ,
      "Moyens de paiement"

    ]
 },
]);

onMounted(() => {
  console.log("ID:", id.value);
  console.log("Lists:", lists.value);
  if (router.currentRoute.value.params && Array.isArray(lists.value)) {
    id.value = router.currentRoute.value.params.id;
    list.value = lists.value.find(item => item.id === Number(id.value)) || list.value;
  }
});

</script>

<style scoped>

.section {
  margin-top: 20px;
}

</style>
