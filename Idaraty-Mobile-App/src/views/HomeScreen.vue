<template>
  <ion-page>
    <ion-header>
      <Navbar></Navbar>
    </ion-header>
    <ion-content class="ion-padding">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img src="/idaratyy.png" alt="Image 1" />
        </swiper-slide>
        <swiper-slide>
          <img src="/dog.png" alt="Image 2" />
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

      <ion-toolbar class="fixed-tab">
        <Tabs></Tabs>
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonPage, IonIcon, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { checkmark } from 'ionicons/icons';
import Navbar from './Navbar.vue';
import Tabs from './Tabs.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".sbutton-next",
    prevEl: ".sbutton-prev",
  },
  pagination: {
    el: ".sw-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  mousewheel: true,
  keyboard: true,
};
</script>

<style scoped>
.icon-container {
  margin-right: 15px;
}

.fixed-tab {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
