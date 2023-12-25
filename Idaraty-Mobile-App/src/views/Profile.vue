<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="user-info">
        <ion-avatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-label>
          <h2>{{ user.username }}</h2>
        </ion-label>
      </div>

      <ion-item class="styled-item">
        <ion-label>
          <ion-title class="styled-title reduced">{{ `Switch Language` }}</ion-title>
        </ion-label>
        <ion-select v-model="selectedLanguage">
          <ion-select-option value="fr">Francais</ion-select-option>
          <ion-select-option value="ar">بالتونسي</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item class="styled-item">
        <ion-label>
          <ion-title class="styled-title">{{ `Saved Posts(${savedPosts.length})` }}</ion-title>
        </ion-label>
      </ion-item>

      <ion-list v-if="savedPosts.length > 0" class="styled-list">
        <ion-item v-for="post in savedPosts" :key="post.id" @click="navigateToPostDetail(post)">
          <ion-avatar slot="start">
            <img :src="post.image" alt="Saved Post" />
          </ion-avatar>
          <ion-label>{{ post.title }}</ion-label>
        </ion-item>
      </ion-list>

      <div v-else class="styled-no-posts">
        <p>No posts saved for now.</p>
      </div>
    </ion-content>

    <ion-toolbar class="fixed-tab">
      <Tabs></Tabs>
    </ion-toolbar>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonAvatar, IonLabel, IonSelect, IonTitle,IonSelectOption, IonItem, IonList, IonToolbar, IonContent } from '@ionic/vue';
import Tabs from './Tabs.vue';

const router = useRouter();
const user = JSON.parse(localStorage.getItem('user'));
const userAvatar = 'https://example.com/avatar.jpg';
const savedPosts = ref([]);
const selectedLanguage = ref('fr');

const navigateToPostDetail = (item) => {

router.push({ name: 'FeedPostDetail', params: { id: item.id } });
};

const fetchSavedPosts = () => {
  const savedPostsData = localStorage.getItem('savedPosts');
  savedPosts.value = savedPostsData ? JSON.parse(savedPostsData) : [];
};

onMounted(() => {
  fetchSavedPosts();
});
</script>



<style scoped>
.user-info {
  display: flex;
  align-items: center;
  padding: 20px;
}

.user-info ion-avatar {
  margin-right: 15px;
}

.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-info h2 {
  font-size: 18px;
  font-weight: bold;
}

.styled-item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.styled-title {
  font-size: 16px;
  font-weight: bold;
  margin-left: -10px;
}
.reduced {
  margin-left: -10px; 
}

.styled-list {
  margin-top: 20px;
}

.styled-no-posts {
  margin-top: 20px;
  text-align: center;
}

ion-item ion-avatar {
  width: 40px;
  height: 40px;
}

ion-item img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
