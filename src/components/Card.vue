<template>
  <div class="card">
    <div class="card-img">
      <img :src="thumbnail" alt="" />
    </div>
    <div class="card-body">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <router-link :to="`/mmos/${id}`">Visit Page</router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  thumbnail: String,
  id: Number,
});

console.log(props);
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  border: 1px solid #d0d0d0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 350px;
}

.card .card-img {
  height: 200px;
}

.card .card-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card .card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
}

.card .card-body h3 {
  margin-top: 0;
}

.card .card-body a {
  border-radius: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #0d3051;
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin-top: auto;
}
</style>
