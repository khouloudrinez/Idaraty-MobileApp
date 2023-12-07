<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
  
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/homescreen">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/explore">
            <ion-icon :icon="search" />
            <ion-label>Explore</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="profile" href="/profile">
            <ion-icon :icon="person" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script >
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
    import { home, search, person } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          home,
          search,
          person,
        };
      },
    };
  </script>
  