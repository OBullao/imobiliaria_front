<template>
  <div id="carouselExampleCaptions" class="carousel slide">
      
      <div class="carousel-inner">
        <div class="d-flex justify-content-center carousel-item active">
          <img src="../assets/b58677ca-24f1-42f4-bcd6-1081f021a27a.jpeg" class="foto d-block w-1" alt="lucas">
          
        </div>
        <div class="carousel-item d-flex justify-content-center">
          <img src="../assets/b58677ca-24f1-42f4-bcd6-1081f021a27a.jpeg" class="foto d-block w-1" alt="lucas">
          
        </div>
        <div class="carousel-item d-flex justify-content-center">
          <img src="../assets/imob.png" class="foto d-block w-1" alt="lucas">
          
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
   
  
  
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Carousei",
    
  });
  </script>
  
  <style scoped>
  
  .foto{
  max-width: 20%;
  height: 20%;
  
  }
  
  .arumar{
    display: flex;
    justify-content: center;
  }
  </style>