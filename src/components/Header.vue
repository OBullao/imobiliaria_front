<template>
  <nav class="fundo navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logo.png"
          alt="Logo"
          width="30"
          height="30"
          class="d-inline-block align-text-top"
        />
        <a>IMOBILIARIA</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-around d-flex flex-nowrap"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item order-1 p-2 ">
            <router-link class="link" to="/">Home</router-link>
          </li>
          <li class="nav-item order-2 p-2 ">
            <router-link class="link" to="/about">About</router-link>
          </li>
          <li class="nav-item order-3 p-2 ">
            <router-link class="link" to="/about">dados</router-link>
          </li>
        </ul>
      </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Header",
  components: {
    RouterLink,
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(160, 134, 168);
}

.menu {
  height: 100px;
}

a {
  color: white;
  text-decoration: none;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(255, 255, 255);
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a:hover::after {
  transform: scaleX(1);
}

.navbar-brand a {
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 20px;
}
</style>
