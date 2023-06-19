<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 justify-content-around mx-auto d-flex">
      <div class="col mb-4">
        <div class="card h-100 card-hover fundo">
          <div class="position-relative">
            <img
              src="../assets/b58677ca-24f1-42f4-bcd6-1081f021a27a.jpeg"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="fundo card-body text-start">
            <h5 class="fundo card-title">Propriedade</h5>
            <p class="fundo lh-sm ">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p class="preco fundo lh-sm "> R$100.000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-hover {
  transition: transform 0.3s ease;
}

.card-hover:hover {
  transform: scale(1.05);
}

.mb-4 {
  margin-bottom: 1rem;
}

.fundo {
  background-color: #f8f9fa; /* Cor de fundo desejada */
}

.card {
  border: none; /* Remover a borda */
}

.preco {
  border-radius: 30% 0% 0% 0%;
}

.glass-effect {
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.5);
}

.larger-width {
  width: 150px; /* Ajuste a largura desejada */
}

.smaller-font {
  font-size: 18px; /* Ajuste o tamanho da fonte desejado */
}

img {
  border-radius: 5%;
}
</style>
