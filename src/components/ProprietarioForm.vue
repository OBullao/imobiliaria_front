<template>

    <div class="container">
        <h1>Formulário-proprietario</h1>
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
                <label for="email">E-mail:</label>
                <input type="email" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="proprietario.email">
            </div>
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="email" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="proprietario.nome">
            </div>
            <div class="form-group">
                <label for="cpfCnpj">CPF/CNPJ:</label>
                <input type="email" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="proprietario.cpfCnpj">
            </div>
            <div class="form-group">
                <label for="phone">Telefone:</label>
                <input type="email" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="proprietario.phone">
            </div>
            <div class="form-group">
                <label for="documento">Documento:</label>
                <input type="email" :disabled="form === 'excluir' ? disabled : false"  class="form-control" v-model="proprietario.documento">
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
import ProprietarioClient from '@/client/Proprietario.client';
import { ProprietarioModel } from '@/model/ProprietarioModel';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProprietarioForm',
  data() {
    return {
      proprietario: new ProprietarioModel(),
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
        ProprietarioClient.cadastrar(this.proprietario)
        .then(success => {
          this.proprietario = new ProprietarioModel();
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
        ProprietarioClient.findById(id)
        .then(success => {
          this.proprietario = success;
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