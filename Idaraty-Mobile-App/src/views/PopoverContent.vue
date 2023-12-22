<template>
    <ion-list>
      <ion-item @click="saveItem">
        <ion-icon name="bookmark" slot="start"></ion-icon>
        Enregistrer
      </ion-item>
      <ion-item @click="commentItem">
        <ion-icon name="chatbubble" slot="start"></ion-icon>
        Commenter
      </ion-item>
      <ion-item @click="shareItem">
        <ion-icon name="share" slot="start"></ion-icon>
        Partager
      </ion-item>
    </ion-list>
  </template>
  
  <script>
    import {IonItem, IonIcon } from '@ionic/vue';

  export default {
    methods: {
      saveItem() {
        this.$emit('saveItem');
      },
      commentItem() {
        this.$emit('commentItem');
      },
      shareItem() {
        this.$emit('shareItem');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  