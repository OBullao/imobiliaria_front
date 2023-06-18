<template>
    <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-6 col-md-4 col-lg-3">
        <div class="quadrado"></div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div class="quadrado"></div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div class="quadrado"></div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div class="quadrado"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'Anuncio'
})
</script>
<style scoped land="scss">
.quadrado {
  padding-bottom: 100%; 
  background-color: red;
}
</style>
