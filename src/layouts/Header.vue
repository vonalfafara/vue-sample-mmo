<template>
  <header>
    <div class="container">
      <router-link to="/">MMO</router-link>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/news">News</router-link></li>
          <li><router-link to="/mmos">MMO List</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: #0d3051;
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}
</style>
