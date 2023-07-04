<template>
      <div class="container">
        <h1>Formulário - Apartamento</h1>
        <form>
            <div class="form-group">
                <label for="andar">Andar:</label>
                <input type="number" class="form-control" id="andar" placeholder="Digite o andar" required v-model="apartamento.andar">
            </div>
            <div class="form-group">
                <label for="nome">Nome do apartamento:</label>
                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" required v-model="apartamento.nome">
            </div>
            <div class="form-group">
                <label for="interphone">Numero do Interfone:</label>
                <input type="number" class="form-control" id="interphone" placeholder="Digite o número do interfone" required v-model="apartamento.interphone">
            </div>
            <div class="form-group">
                <label for="estacionamento">Vagas de Estacionamento:</label>
                <input type="number" class="form-control" id="estacionamento" placeholder="Digite o número de vagas de estacionamento" required v-model="apartamento.estacionamento">
            </div>
            <button type="submit" class="btn btn-primary" @click="onClickCadastrar">Enviar</button>
        </form>
    </div>



















  </template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { ApartamentosClient } from "@/client/Apartamento.client";
import { Apartamento } from "@/model/Apartamento";
export default defineComponent({
  name: "ApartamentoForm",

  data(){
    return{
        apartamento: new Apartamento(),
        apartamentosClient: new ApartamentosClient() 
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    form () {
      return this.$route.query.form
    }
  },

  mounted(){
    if(this.id !== undefined){
        this.findById(Number(this.id))
    }
  },
  methods:{
    findById(id: number){
        this.apartamentosClient.findById(id)
        .then(sucess => {
          this.apartamento = sucess;
        })
        .catch(error => {
        });
    },

    onClickCadastrar(){
        this.apartamentosClient.cadastrar(this.apartamento)
        .then(sucess => {
          this.apartamento = new Apartamento();
        })
        .catch(error => {
        });
    },

    onClickEditar(){
      this.apartamentosClient.editar(this.apartamento.id, this.apartamento)
        .then(sucess => {
          this.apartamento = new Apartamento()
        })
        .catch(error => {
        });
    },

    onClickExcluir(){
      this.apartamentosClient.desativar(this.apartamento.id)
        .then(sucess => {
          this.apartamento = new Apartamento()          
          this.$router.push({ name: 'ListCondutor' });
        })
        .catch(error => {
        });
    }
  }

});
</script>