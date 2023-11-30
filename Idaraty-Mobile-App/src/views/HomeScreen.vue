<template>
    <ion-page>
      <ion-header>
        <Navbar></Navbar>
      </ion-header>
      <ion-content class="ion-padding">
       
        
        <swiper :options="swiperOptions">
        
        <swiper-slide>
          <img src="/dog.png" alt="Image 1" />
        </swiper-slide>
        <swiper-slide>
          <img src="/idaratyy.png" alt="Image 2" />
        </swiper-slide>
        <swiper-slide>
          <img src="/idaratyy.png" alt="Image 3" />
        </swiper-slide>
        <swiper-slide>
          <img src="/idaratyy.png" alt="Image 4" />
        </swiper-slide>
        <swiper-slide>
          <img src="/idaratyy.png" alt="Image 5" />
        </swiper-slide>
      </swiper>

      <div class="center-titles">
        <ion-title class="big-title">Vos démarches administratives</ion-title>
        <ion-title class="secondtitle">plus simples à naviguer</ion-title>
      </div>
  

        <div class="features-container">
          <div class="feature">
            <div class="icon-container">
              <ion-icon :icon="checkmark"></ion-icon>
            </div>
            
            <div class="text-container">

                
              <div class="title">Un accompagnement pas à pas</div>
              <div class="description">Les étapes de chaque procédure sont expliquées</div>
            </div>
          </div>
  
          <div class="feature">
            <div class="icon-container">
              <ion-icon :icon="checkmark"></ion-icon>
            </div>
            <div class="text-container">
              <div class="title">Critères d'éligibilité clairs</div>
              <div class="description">Ne ratez pas les conditions de chaque procédure</div>
            </div>
          </div>
  
          <div class="feature">
            <div class="icon-container">
              <ion-icon :icon="checkmark"></ion-icon>
            </div>
            <div class="text-container">
              <div class="title">Les références légales incluses</div>
              <div class="description">Consultez un aperçu sur les références légales derrière chaque procédure</div>
            </div>
          </div>
  
          <div class="feature">
            <div class="icon-container">
              <ion-icon :icon="checkmark"></ion-icon>
            </div>
            <div class="text-container">
              <div class="title">On n'a pas oublié les cas particuliers</div>
              <div class="description">
                La contribution de la communauté vous permet de comprendre les situations particulières propres à chaque procédure
              </div>
            </div>
            
          </div>
          
        </div>
      <ion-toolbar class="fixed-tab">
        <Tabs></Tabs>
      </ion-toolbar>
      </ion-content>
   
    </ion-page>
  </template>
  
  <script setup>
  import { IonContent, IonPage, IonIcon, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
  import { checkmark } from 'ionicons/icons';
  import Navbar from './Navbar.vue';
  import Tabs from './Tabs.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  const swiperOptions = {
  direction: 'horizontal', 
  slidesPerView: 'auto', 
  spaceBetween: 10, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
  </script>
  
  <style scoped>
  .features-container {
    display: flex;
    flex-direction: column;
  }
  
  .feature {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .icon-container {
    margin-right: 15px;
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .description {
    font-size: 14px;
    color: #555;
  }

  .center-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px; /* Adjust the margin as needed */
  }

  .big-title {
    font-size: 23px;
    font-weight: bold;
  }
  .secondtitle {
    font-size: 23px;
    font-weight: bold;
  }
  .fixed-tab {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  </style>
  