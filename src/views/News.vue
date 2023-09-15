<template>
  <section>
    <div class="banner">
      <img src="../assets//dog.jpg" alt="" />
      <div class="overlay"></div>
      <div class="banner-text">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure cum
          magnam quibusdam veniam adipisci quidem in aperiam, sapiente eum.
        </p>
      </div>
    </div>
    <div class="container">
      <a
        v-for="article in news"
        :key="article.id"
        :href="article.article_url"
        target="_blank"
        class="news"
      >
        <img :src="article.main_image" alt="" />
        <div class="overlay"></div>
        <div class="news-text">
          <h3>{{ article.title }}</h3>
          <p>
            {{ article.short_description }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import http from "../library/http";

const news = ref([]);

async function getNews() {
  const { data } = await http.get("/latestnews");
  news.value = data;
}

getNews();
</script>

<style scoped>
.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.banner .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
}

.banner .banner-text {
  margin-bottom: 2rem;
  color: white;
}

.container {
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.news {
  position: relative;
  height: 200px;
  width: 45%;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
}

.news img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news .overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
