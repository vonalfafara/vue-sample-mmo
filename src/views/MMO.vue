<template>
  <section>
    <div class="banner">
      <img
        :src="
          game.screenshots?.length ? game.screenshots[0].image : game.thumbnail
        "
        alt=""
      />
    </div>
    <div class="container">
      <h1>{{ game.title }}</h1>
      <h5>
        {{ game.short_description }}
      </h5>
      <div v-html="game.description"></div>
      <template></template>
      <Carousel :items-to-show="1.5">
        <Slide v-for="{ image } in game.screenshots" :key="image.id">
          <img :src="image" alt="" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useRoute } from "vue-router";
import http from "../library/http";

const { params } = useRoute();
const gameId = ref(params.gameId);
const game = ref({});

async function getGame() {
  const { data } = await http.get(`/game?id=${gameId.value}`);
  game.value = data;
  console.log(game.value);
}

getGame();
</script>

<style scoped>
.banner {
  height: 400px;
}

.banner img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
