<template>
  <div class="login-container d-flex align-items-center justify-content-center">
    <div class="login-form">
      <h3 class=" fundo text-center mb-4">Login</h3>
      <form>
        <div class="fundo mb-3">
          <label for="email" class=" form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="fundo mb-3">
          <label for="password" class="fundo form-label">Password</label>
          <input type="password" class=" form-control" id="password" placeholder="Enter password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  height: 100vh;
}

.login-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
.fundo{
   background-color: rgb(255, 252, 194);
}
</style>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
});
</script>
