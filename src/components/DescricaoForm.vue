<template>
  <div>
    <h1>Formulário - Descrição </h1>
    <form @submit.prevent="onClickCadastrar">
      <div v-if="mensagem.ativo" class="row">
        <div class="col-md-12 text-start">
          <div :class="mensagem.css" role="alert">
            <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <textarea :disabled="form === 'excluir' ? disabled : false" class="form-control" v-model="descricao.descricao"></textarea>
      </div>

      <div class="form-group">
        <label for="fotos">Fotos:</label>
        <input type="text" class="form-control" :disabled="form === 'excluir' ? disabled : false" v-model="descricao.fotos">
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
import DescricaoClient from '@/client/Descricao.client';
import { DescricaoModel } from '@/model/DescricaoModel';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DescricaoForm',
  data() {
    return {
      descricao: new DescricaoModel(),
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
      // Aqui você pode incluir a lógica para enviar a foto para o servidor junto com a descrição

      DescricaoClient.cadastrar(this.descricao)
        .then(success => {
          this.descricao = new DescricaoModel();
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
    },
    findById(id: number) {
      DescricaoClient.findById(id)
        .then(success => {
          this.descricao = success;
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
  }
});
</script>
