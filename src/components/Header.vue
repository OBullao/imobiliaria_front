<template>
  <nav class="navbar navbar-expand-lg  fixed-top">
    <div class="container-fluid">
      <img
        src="../assets/imob.png"
        alt="Logo"
        class="logo-image"
        width="50"
        height="50"
      />
      <a class="navbar-brand" href="#">imobiliaria</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" style="border: none"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">about</router-link>
          <router-link class="nav-link" to="/produto">produto</router-link>
          <router-link class="nav-link" to="/dados">dados</router-link> <!--deve aparecer apenas para o adm-->
        </div>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/login">Login</router-link>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 custom-search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(160, 134, 168);
}

a {
  color: white;
  text-decoration: none;
  position: relative;
}

.nav-link::after {
  content: "";
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

.custom-search-input {
  width: 200px; /* Defina a largura desejada para o campo de pesquisa */
}

.logo-container {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.logo-image {
  border-radius: 100%;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>