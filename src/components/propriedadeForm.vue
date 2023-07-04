<template>
    <div>
      <h1>Formulário - Propriedade teste</h1>
      <form >
        
        <div class="form-group">
          <label for="valor">Valor:</label>
          <input type="number" ref="valor" class="form-control" id="valor" step="0.01" placeholder="Digite o valor" required>
        </div>
        <div class="form-group">
          <label for="proprietario">Proprietário:</label>
          <select class="form-select" v-model="propriedade.proprietario">
          <option v-for="prop in proprietarioList" :key="prop.id" :value="prop">{{prop.nome}}</option>
        </select>
         </div>
        <div class="form-group">
          <label for="vendedor">Vendedor:</label>
          <select class="form-select" v-model="propriedade.vendedor">
          <option v-for="vend in vendedorList" :key="vend.id" :value="vend">{{vend.nome}}</option>
        </select>
        </div>
        <div class="form-group">
          <label for="localizacao">Localização:</label>
          <select class="form-select" v-model="propriedade.vendedor">
          <option v-for="local in localizacaoList" :key="local.id" :value="local">{{local.cidade+"-"+local.bairro+"-"+local.rua+"-"+local.numero}}</option>
        </select>
        </div>
        <div class="form-group">
          <label for="descricao">Descrição:</label>
          <select class="form-select" v-model="propriedade.vendedor">
          <option v-for="desc in descricaoList" :key="desc.id" :value="desc">{{desc.descricao}}</option>
        </select></div>
        <div class="form-group">
          <label for="largura">Largura:</label>
          <input type="number" ref="largura" class="form-control" id="largura" step="0.01" placeholder="Digite a largura" required>
        </div>
        <div class="form-group">
          <label for="comprimento">Comprimento:</label>
          <input type="number" ref="comprimento" class="form-control" id="comprimento" step="0.01" placeholder="Digite o comprimento" required>
        </div>
        
        <div class="form-group">
          <label for="construcao">Construção:</label>
          <select ref="construcao" class="form-control" id="construcao">
          </select>
        </div>
        
        <button v-if="form === undefined" type="button" class="btn btn-success" @click="onClickCadastrar()">Cadastrar</button>
        <button v-if="form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">Editar</button>
        <button v-if="form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">Excluir</button>
      
      </form>
    </div>
  </template>


<script lang="ts">
import DescricaoClient from '@/client/Descricao.client';
import LocalizacaoClient from '@/client/Localizacao.client';
import ProprietarioClient from '@/client/Proprietario.client';
import VendedorClient from '@/client/Vendedor.client';
import PropriedadeClient from '@/client/Propriedade.client';
import { PropriedadeModel } from '@/model/PropriedadeModel';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropriedadeForm',
  data() {
    return {
      propriedade: new PropriedadeModel(),
      proprietarioList:[],
      vendedorList:[],
      localizacaoList:[],
      descricaoList:[],
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
    this.listarProprietario();
    this.listarVendedor();
    this.listarLocalizacao();
    this.listarDescricao();
  },
  methods: {
    onClickCadastrar() {
      PropriedadeClient.cadastrar(this.propriedade)
        .then(success => {
          this.propriedade = new PropriedadeModel();
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
      PropriedadeClient.findById(id)
        .then(success => {
          this.propriedade = success;
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    listarProprietario() {
      ProprietarioClient.listaAll()
        .then(success => {
          this.proprietarioList = success;
        })
        .catch(error => {
          console.log(error);
        });
    }
    ,
    listarVendedor() {
      VendedorClient.listaAll()
        .then(success => {
          this.vendedorList = success;
        })
        .catch(error => {
          console.log(error);
        });
    }
    ,
    listarLocalizacao() {
      LocalizacaoClient.listaAll()
        .then(success => {
          this.localizacaoList = success;
        })
        .catch(error => {
          console.log(error);
        });
    }
    ,
    listarDescricao() {
      DescricaoClient.listaAll()
        .then(success => {
          this.descricaoList = success;
        })
        .catch(error => {
          console.log(error);
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