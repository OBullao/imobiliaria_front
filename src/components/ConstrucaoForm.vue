<template>
    <div>
      <h1>Formulário - Construção</h1>
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
          <label for="tipo">Tipo:</label>
          <input type="text" ref="tipo" class="form-control" id="tipo" placeholder="Digite o tipo" required>
        </div>
        <div class="form-group">
          <label for="quartos">Quartos:</label>
          <input type="number" ref="quartos" class="form-control" id="quartos" placeholder="Digite o número de quartos" required>
        </div>
        <div class="form-group">
          <label for="metrosQuadrados">Metros Quadrados:</label>
          <input type="number" ref="metrosQuadrados" class="form-control" id="metrosQuadrados" step="0.01" placeholder="Digite a área em metros quadrados" required>
        </div>
        <div class="form-group">
          <label for="suites">Suítes:</label>
          <input type="number" ref="suites" class="form-control" id="suites" placeholder="Digite o número de suítes" required>
        </div>
        <div class="form-group">
          <label for="banheiros">Banheiros:</label>
          <input type="number" ref="banheiros" class="form-control" id="banheiros" placeholder="Digite o número de banheiros" required>
        </div>
        <div class="form-group">
          <label for="apartamento">Apartamento:</label>
          <select ref="apartamento" class="form-control" id="apartamento">
            <option value="1">Apartamento 1</option>
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

export default defineComponent({
  name: "ConstrucaoForm",
});
</script>