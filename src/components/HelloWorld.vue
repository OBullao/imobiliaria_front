<template>
  <nav class="fundo navbar navbar-expand-lg bg-body-tertiary">
    <div class=" fundo container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logo.png"
          alt="Logo"
          width="30"
          height="24"
          class="fundo d-inline-block align-text-top"
        />
        <a>Teste-logo</a>
      </router-link>
      <button
        class=" navbar-toggler"
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
        class="fundo collapse navbar-collapse justify-content-around d-flex flex-nowrap"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="fundo nav-item order-1 p-2 ">
            <router-link class="fundo" to="/">Home</router-link>
          </li>
          <li class=" fundo nav-item order-2 p-2 ">
            <router-link class="fundo" to="/about">About</router-link>
          </li>
          <li class="fundo nav-item order-3 p-2 ">
            <router-link class="fundo" to="/about">dados</router-link>
          </li>
        </ul>
      </div>
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
  
}

.menu {
  height: 100px;
}

/* Adicione a regra abaixo para definir a cor de fundo como vermelho */
.fundo {
  background-color: red;
  color: white;
}
</style>
