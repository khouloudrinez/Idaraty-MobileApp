<template>
  <ion-page>
    <ion-content :fullscreen="true">
 
    

      <Tabs></Tabs>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from './Tabs.vue';

</script>

<style scoped>
/* Add styles for the sections if needed */
.section {
  margin-top: 20px;
}

/* Add other styles as needed */
</style>
