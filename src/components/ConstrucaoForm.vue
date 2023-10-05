<template>
    <div class="container">
      <h1>Formulário - Construção</h1>
      <form>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <select v-model="construcao.tipo" class="form-select" aria-label="Default select example">
          <option v-for="tipoCons in tipoEnum" :key="tipoCons" :value="tipoCons"   selected>{{tipoCons}}</option>
        </select>
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
          <select class="form-select" v-model="construcao.apartamento">
            <option v-for="aps in apartamentoList" :key="aps.id" :value="aps">
            {{ aps.nome }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" @click="onClickCadastrar">Enviar</button>




      
      
      
      
      
      
      
      
      
      
      
      
      
      </form>
    </div>








             
















  </template>
  
  
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import ConstrucaoClient from "@/client/Construcao.client";
import { ConstrucaoModel } from "@/model/ConstrucaoModel";
import { Apartamento } from "@/model/Apartamento";
import ApartamentoClient from "@/client/Apartamento.client";
import { Tipo } from "@/model/Tipo";

export default defineComponent({
  name: "ConstrucaoForm",

  data(){
    return{
        construcao: new ConstrucaoModel(),
        apartamentoLista: [] as Apartamento[],
        apartamentoList:[],
        tipoEnum: Tipo,
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
    this.listarApartamento();
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
          console.log(error);
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
    },

    listarApartamento() {
      ApartamentoClient.listAll()
        .then(success => {
          this.apartamentoList = success;
          console.log(this.apartamentoList);
        })
        .catch(error => {
          console.log(error);
        });
    }
    



       
  }

});
</script>