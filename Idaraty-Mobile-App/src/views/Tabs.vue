<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
  
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/homescreen">
            <ion-icon :icon="home" />
            <ion-label>{{ $t('Tabs.home') }}</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/explore">
            <ion-icon :icon="search" />
            <ion-label> {{ $t('Tabs.Explore') }} </ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="profile" href="/profile">
            <ion-icon :icon="person" />
            <ion-label>{{ $t('Tabs.profile') }}</ion-label>
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
  

   <!-- <template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
  
        <ion-tab-bar slot="bottom" style="background-color: #ec1721; color: #ffffff;">
          <ion-tab-button :tab="homeTab" href="/homescreen" :class="{ 'selected-tab': activeTab === homeTab }">
            <ion-icon :icon="home" style="color: #807c7c;" />
            <ion-label style="color: #807c7c;">{{ $t('Tabs.home') }}</ion-label>
          </ion-tab-button>
  
          <ion-tab-button :tab="exploreTab" href="/explore" :class="{ 'selected-tab': activeTab === exploreTab }">
            <ion-icon name="search" style="color: #807c7c;" />
            <ion-label style="color: #807c7c;">{{ $t('Tabs.Explore') }}</ion-label>
          </ion-tab-button>
  
          <ion-tab-button :tab="notificationsTab" href="/notifications" :class="{ 'selected-tab': activeTab === notificationsTab }">
            <ion-icon name="notifications" style="color:#807c7c;" />
            <ion-label style="color: #807c7c;">notifications</ion-label>
          </ion-tab-button>
  
          <ion-tab-button :tab="profileTab" href="/profile" :class="{ 'selected-tab': activeTab === profileTab }">
            <ion-icon :icon="person" style="color: #807c7c;" />
            <ion-label style="color: #807c7c;">{{ $t('Tabs.profile') }}</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <style scoped>
  .selected-tab {
    background-color: #ffffff; /* Background color for the selected tab */
    color: #ec1721 !important; /* Text color for the selected tab */
  }
  </style>
  
  <script>
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  import { home, search, person } from 'ionicons/icons';
  
  export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
      return {
        activeTab: 'home',
        homeTab: 'home',
        exploreTab: 'explore',
        notificationsTab: 'notifications',
        profileTab: 'profile',
        home,
        search,
        person,
      };
    },
    watch: {
      $route(to) {
        this.activeTab = to.name; // Assuming your route names match the tab names
      },
    },
  };
  </script>
   -->