<template>
    <div>
      <h1>Formulário - Localização</h1>
      <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
      <form>
        <div class="form-group">
          <label for="cep">CEP:</label>   
          <input type="text" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="localizacao.cep">
        </div>
        <div class="form-group">
          <label for="numero">Número:</label>
          <input type="number" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="localizacao.numero">
        </div>
        <div class="form-group">
          <label for="rua">Rua:</label>
          <input type="text" r:disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="localizacao.rua">
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input type="text" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="localizacao.cidade">
        </div>
        <div class="form-group">
          <label for="bairro">Bairro:</label>
          <input type="text" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="localizacao.bairro">
        </div>
        <div class="d-grid gap-1">
        
        <button v-if="form === undefined" type="button" class="btn btn-success" @click="onClickCadastrar()">Cadastrar</button>
        <button v-if="form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">Editar</button>
        <button v-if="form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">Excluir</button>
      </div>
      </form>
    </div>
  </template>


<script lang="ts">
import LocalizacaoClient from '@/client/Localizacao.client';
import { LocalizacaoModel } from '@/model/LocalizacaoModel';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompradorForm',
  data() {
    return {
      localizacao: new LocalizacaoModel(),
      mensagem: {
        ativo: false,
        titulo: "",
        mensagem: "",
        css: ""
      },
      disabled: false
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    form() {
      return this.$route.query.form;
    }
  },
  mounted() {
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {
    onClickCadastrar() {
      LocalizacaoClient.cadastrar(this.localizacao)
        .then(success => {
          this.localizacao = new LocalizacaoModel();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = success;
          this.mensagem.titulo = "Parabéns. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number) {
      LocalizacaoClient.findById(id)
        .then(success => {
          this.localizacao = success;
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
  }
});
</script>

/*,onClickEditar() {
    if (this.comprador.id) {
      CompradorClient.editar(this.comprador.id, this.comprador)
        .then(success => {
          this.comprador = new CompradorModel();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = success;
          this.mensagem.titulo = "Parabéns. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    } else {
      console.error("ID da comprador indefinido. Não é possível editar.");
    }
  },
      onClickExcluir() {
    if (this.comprador.id) {
      CompradorClient.excluir(this.comprador.id)
        .then(success => {
          this.comprador = new CompradorModel();
          this.$router.push({ name: 'comprador-lista-view' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    } else {
      console.error("ID da marcompradorca indefinido. Não é possível excluir.");
    }
      }    */