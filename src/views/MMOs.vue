<template>
  <section>
    <Hero title="All your MMOs in one place" />
    <div class="container">
      <h1>MMO List</h1>
      <div class="mmos">
        <Card
          v-for="mmo in mmoList"
          :key="mmo.id"
          :title="mmo.title"
          :description="mmo.short_description"
          :thumbnail="mmo.thumbnail"
          :id="mmo.id"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import { ref } from "vue";
import http from "../library/http";

const mmoList = ref([]);

async function getMMOs() {
  const { data } = await http.get("/games");
  mmoList.value = data;
}

getMMOs();
</script>

<style scoped>
h1 {
  text-align: center;
  color: #0d3051;
}

.mmos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
