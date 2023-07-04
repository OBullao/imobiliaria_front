<template>
    <div>
      <h1>Formulário - Propriedade</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="id">ID:</label>
          <input type="number" ref="id" class="form-control" id="id" placeholder="Digite o ID" required>
        </div>
        <div class="form-group">
          <label for="cadastro">Data de Cadastro:</label>
          <input type="datetime-local" ref="cadastro" class="form-control" id="cadastro" required>
        </div>
        <div class="form-group">
          <label for="edicao">Data de Edição:</label>
          <input type="datetime-local" ref="edicao" class="form-control" id="edicao">
        </div>
        <div class="form-group">
          <label for="ativo">Ativo:</label>
          <select ref="ativo" class="form-control" id="ativo">
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <div class="form-group">
          <label for="valor">Valor:</label>
          <input type="number" ref="valor" class="form-control" id="valor" step="0.01" placeholder="Digite o valor" required>
        </div>
        <div class="form-group">
          <label for="proprietario">Proprietário:</label>
          <input type="text" ref="proprietario" class="form-control" id="proprietario" placeholder="Digite o nome do proprietário" required>
        </div>
        <div class="form-group">
          <label for="vendedor">Vendedor:</label>
          <input type="text" ref="vendedor" class="form-control" id="vendedor" placeholder="Digite o nome do vendedor" required>
        </div>
        <div class="form-group">
          <label for="cep">CEP:</label>
          <input type="text" ref="cep" class="form-control" id="cep" placeholder="Digite o CEP" required>
        </div>
        <div class="form-group">
          <label for="numero">Número:</label>
          <input type="number" ref="numero" class="form-control" id="numero" placeholder="Digite o número" required>
        </div>
        <div class="form-group">
          <label for="rua">Rua:</label>
          <input type="text" ref="rua" class="form-control" id="rua" placeholder="Digite a rua" required>
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input type="text" ref="cidade" class="form-control" id="cidade" placeholder="Digite a cidade" required>
        </div>
        <div class="form-group">
          <label for="bairro">Bairro:</label>
          <input type="text" ref="bairro" class="form-control" id="bairro" placeholder="Digite o bairro" required>
        </div>
        <div class="form-group">
          <label for="largura">Largura:</label>
          <input type="number" ref="largura" class="form-control" id="largura" step="0.01" placeholder="Digite a largura" required>
        </div>
        <div class="form-group">
          <label for="comprimento">Comprimento:</label>
          <input type="number" ref="comprimento" class="form-control" id="comprimento" step="0.01" placeholder="Digite o comprimento" required>
        </div>
        <div class="form-group">
          <label for="descricao">Descrição:</label>
          <textarea ref="descricao" class="form-control" id="descricao" placeholder="Digite a descrição" required></textarea>
        </div>

        <div class="form-group">
          <label for="status">Status:</label>
          <select ref="status" class="form-control" id="status">
            <option value="Listado">Listado</option>
            <option value="Vendido">Vendido</option>
          </select>
        </div>
        <div class="form-group">
          <label for="construcao">Construção:</label>
          <select ref="construcao" class="form-control" id="construcao">
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Sobrado">Sobrado</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div class="form-group">
          <label for="localizacao">Localização:</label>
          <select ref="localizacao" class="form-control" id="localizacao">
            <option value="1">Localização 1</option>
            <option value="2">Localização 2</option>
            <option value="3">Localização 3</option>
            <option value="4">Localização 4</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "PropriedadeForm",
});
</script>
  