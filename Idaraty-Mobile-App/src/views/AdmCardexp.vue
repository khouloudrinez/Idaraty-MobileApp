<template>
    <ion-page>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col v-for="item in administration" :key="item.id">
              <ion-card class="card" @click="cardClicked(item)">
                <ion-card-header class="top-section">
                  <ion-img :src="item.image" alt="Logo"></ion-img>
                </ion-card-header>
                <ion-card-content class="bottom-section">
                  <ion-label class="title">{{ item.name }}</ion-label>
                  <ion-row class="row row1">
                    <ion-col class="item" @click="itemClicked(item.valueproc, 'Procedures')">
                      <span class="big-text">{{ item.valueproc }}</span>
                      <span class="regular-text">Procedures</span>
                    </ion-col>
                    <ion-col class="item" @click="itemClicked(item.valuefrom, 'Formulaires')">
                      <span class="big-text">{{ item.valuefrom }}</span>
                      <span class="regular-text">Formulaires</span>
                    </ion-col>
                    <ion-col class="item" @click="itemClicked(item.valuepub, 'Publications')">
                      <span class="big-text">{{ item.valuepub }}</span>
                      <span class="regular-text">Publications</span>
                    </ion-col>
                  </ion-row>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonIcon,
  } from '@ionic/vue';
  

  const administration = reactive([
    { id: 1, name: 'La Poste', image: 'https://v2.idaraty.tn/images/logos/laposte-tunisie.webp', valueproc: 20, valuefrom: 10, valuepub: 5 },
    // Add more items as needed
  ]);
  
  const cardClicked = (item) => {
    console.log(`${item.name} Card Clicked`);
    // Handle card click event, if needed
  };
  
  const socialMediaClicked = (index) => {
    console.log(`Social Media Icon ${index + 1} Clicked`);
    // Handle social media icon click event, if needed
  };
  
  const itemClicked = (value, type) => {
    console.log(`${type} Clicked: ${value}`);
    // Handle row item click event, if needed
  };
  
  </script>
  
  <style scoped>
  .card {
  width: 230px;
  border-radius: 20px;
  background: #1b233d;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
  position: relative;
}
.card .top-section ion-img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 100%; 
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #1b233d;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #1b233d;
}





.card .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}

.card .top-section .icons .social-media {
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;
}

.card .top-section .icons .social-media .svg {
  height: 100%;
  fill: #1b233d;
}

.card .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: rgba(170, 222, 243, 0.721);
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}
  </style>
  