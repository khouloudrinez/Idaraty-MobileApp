<template>
    <ion-page>
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
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          { id: 1, image: '/idaratyy.png' },
          { id: 2, image: '/steg.jpg' },
          { id: 3, image: '/sonede.jpg' },
          { id: 4, image: '/cnam.jpg' },
          { id: 5, image: '/laposte.jpg' },
          { id: 6, image: '/idaratyy.png' },
          { id: 7, image: '/cnss.jpg' },
          { id: 8, image: '/douane.png' },
          { id: 9, image: '/sonede.jpg' },
          { id: 10, image: '/cnss.jpg' },
        ],
        scrollOptions: {
          direction: 'x',
          slot: 'fixed',
          scrollbarX: false,
          scrollbarY: false,
        },
      };
    },
  };
  </script>
  
  <style scoped>
 .horizontal-card {
    width: 3cm;
    height: 3cm;
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
  </style>
  