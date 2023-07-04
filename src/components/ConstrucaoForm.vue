<template>
    <div class="container">
      <h1>Formulário - Construção</h1>
      <form>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <input type="text" ref="tipo" class="form-control" id="tipo" placeholder="Digite o tipo" required v-model="construcao.tipo">
        </div>
        <div class="form-group">
          <label for="quartos">Quartos:</label>
          <input type="number" ref="quartos" class="form-control" id="quartos" placeholder="Digite o número de quartos" required v-model="construcao.quartos">
        </div>
        <div class="form-group">
          <label for="metrosQuadrados">Metros Quadrados:</label>
          <input type="number" ref="metrosQuadrados" class="form-control" id="metrosQuadrados" step="0.01" placeholder="Digite a área em metros quadrados" required v-model="construcao.metrosQuadrados">
        </div>
        <div class="form-group">
          <label for="suites">Suítes:</label>
          <input type="number" ref="suites" class="form-control" id="suites" placeholder="Digite o número de suítes" required v-model="construcao.suites">
        </div>
        <div class="form-group">
          <label for="banheiros">Banheiros:</label>
          <input type="number" ref="banheiros" class="form-control" id="banheiros" placeholder="Digite o número de banheiros" required v-model="construcao.banheiros">
        </div>



        <div class="form-group">
          <label for="apartamento">Apartamento:</label>
          <select v-model="construcao.apartamento" class="form-select" aria-label="Default select example">
            <option v-for="itemAp in apartamentoFiltrado" :key="itemAp.id" :value="itemAp" selected>
            {{ itemAp.nome }}</option>
            <!-- Adicione outras opções de apartamento aqui -->
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      
      
      
      
      
      
      
      
      
      
      
      
      
      </form>
    </div>








             
















  </template>
  
  
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import ConstrucaoClient from "@/client/Construcao.client";
import { ConstrucaoModel } from "@/model/ConstrucaoModel";
import { Apartamento } from "@/model/Apartamento";

export default defineComponent({
  name: "ConstrucaoForm",

  data(){
    return{
        construcao: new ConstrucaoModel(),
        apartamentoLista: [] as Apartamento[]
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    form () {
      return this.$route.query.form
    },
    apartamentoFiltrado() :Apartamento[] {
        return this.apartamentoLista;
    } 

  },

  mounted(){
    if(this.id !== undefined){
        this.findById(Number(this.id))
    }
  },
  methods:{
    findById(id: number){
        ConstrucaoClient.findById(id)
        .then(sucess => {
          this.construcao = sucess;
        })
        .catch(error => {
        });
    },

    onClickCadastrar(){
      ConstrucaoClient.cadastrar(this.construcao)
        .then(sucess => {
          this.construcao = new ConstrucaoModel();
        })
        .catch(error => {
        });
    },

    onClickEditar(){
      ConstrucaoClient.editar(this.construcao.id, this.construcao)
        .then(sucess => {
          this.construcao = new ConstrucaoModel()
        })
        .catch(error => {
        });
    },
    onClickExcluir(){
      ConstrucaoClient.desativar(this.construcao.id)
        .then(sucess => {
          this.construcao = new ConstrucaoModel()          
          this.$router.push({ name: 'ListCondutor' });
        })
        .catch(error => {
        });
    }
  }

});
</script>