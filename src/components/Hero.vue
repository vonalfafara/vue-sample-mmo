<template>
  <section>
    <div class="container">
      <div class="hero-text">
        <h1>{{ title }}</h1>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolore
          laudantium ipsa reprehenderit modi nisi, vitae distinctio repellendus
          voluptas autem.
        </h5>
        <div class="buttons">
          <button class="cta">Get Started</button>
          <button>Learn more</button>
        </div>
      </div>
      <div>
        <img src="../assets/dog.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
section {
  background-image: linear-gradient(
    to right top,
    #0d3051,
    #233b72,
    #4c418d,
    #7d3fa0,
    #b333a8
  );
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.container > * {
  flex: 1;
}
img {
  height: 300px;
  display: block;
  margin: auto;
}

.hero-text {
  color: white;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.buttons button {
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.cta {
  background-color: #0d3051;
  color: white;
}
</style>
