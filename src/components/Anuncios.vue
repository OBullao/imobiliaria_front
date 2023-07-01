<template>
  <div class="container">
      <div class="row row-cols-1 row-cols-md-4 justify-content-around mx-auto">
      <div class="col mb-2">
        <div class="card h-100 card-hover fundo">
          <div class="position-relative">
            <img
              src="../assets/b58677ca-24f1-42f4-bcd6-1081f021a27a.jpeg"
              class="card-img-top"
              alt="..."  height="100%"
            />
          </div>
          <div class="fundo card-body text-start">
            <h5 class="fundo card-title">bairro</h5>
            <p class="fundo lh-sm ">
              cidade
            </p>
            <p class=" fundo lh-sm ">
              descricao basica, diferente da descricao completa
            </p>
            <div class="fundo d-flex justify-content-between">
              <p class="fundo lh-sm">R$preco</p>
              <p class="fundo lh-sm">metros qudrados m²</p>
            </div>
          </div>
        </div>
      </div>
      


      <div v-for="item in List" :key="item.id" class="col mb-2">
        <div class="card h-100 card-hover fundo">
          <div class="position-relative">
            <img
              src="{{item.descricao.fotos}}"
              class="card-img-top"
              alt="..."  height="100%"
            />
          </div>
          <div class="fundo card-body text-start">
            <h5 class="fundo card-title">{{item.localizacao.bairro}}</h5>
            <p class="fundo lh-sm ">
              {{item.localizacao.cidade}}
            </p>
            <p class=" fundo lh-sm ">
              {{ item.descricao.descricao }}
            </p>
            <div class="fundo d-flex justify-content-between">
              <p class="fundo lh-sm">{{"R$"+item.valor}}</p>
              <p class="fundo lh-sm">{{item.construcao.metrosQuadrados+"m²"}}</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import PropriedadeClient from '@/client/Propriedade.client';
import { PropriedadeModel } from '@/model/PropriedadeModel';

export default defineComponent({
  name: 'Lista',
  data() {
    return {
      List: new Array<PropriedadeModel>()
    };
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      PropriedadeClient.listaAll()
        .then(success => {
          this.List = success;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
</script>



<style scoped>
.card-hover:hover {
  transform: scale(1.04);
  background-color: aqua;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.fundo {
  background-color: #ffffff;
  border-radius: 2%;
}

.card {
  border: none;
  border-radius: 5%;
  overflow: hidden; /* Adicionado overflow: hidden */
  box-shadow: 1px 1px 6px rgb(88, 88, 88);
}

.glass-effect {
  backdrop-filter: blur(8px);
  background-color: rgb(255, 255, 255);
}

.larger-width {
  width: 150px;
}

.mb-2 {
  margin-bottom: 0.5rem;
}
.smaller-font {
  font-size: 18px;
}

img {
  border-radius: 2%;
}
</style>
