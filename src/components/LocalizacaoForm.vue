<template>
    <div>
      <h1>Formulário - Localização</h1>
      <form>
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
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "LocalizacaoForm",
});
</script>