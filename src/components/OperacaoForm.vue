<template>
    <div>
      <h1>Formulário - Operação</h1>
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
          <label for="contrato">Contrato:</label>
          <select ref="contrato" class="form-control" id="contrato">
            <option value="Locação">Locação</option>
            <option value="Venda">Venda</option>
          </select>
        </div>
        <div class="form-group">
          <label for="comprador">Comprador:</label>
          <input type="text" ref="comprador" class="form-control" id="comprador" placeholder="Digite o nome do comprador" required>
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
          <label for="contratoVenda">Contrato de Venda:</label>
          <input type="text" ref="contratoVenda" class="form-control" id="contratoVenda" placeholder="Digite o contrato de venda" required>
        </div>
        <div class="form-group">
          <label for="descricaoVenda">Descrição de Venda:</label>
          <textarea ref="descricaoVenda" class="form-control" id="descricaoVenda" placeholder="Digite a descrição da venda" required></textarea>
        </div>
        <div class="form-group">
          <label for="propriedade">Propriedade:</label>
          <select ref="propriedade" class="form-control" id="propriedade">
            <option value="1">Propriedade 1</option>
            <option value="2">Propriedade 2</option>
            <option value="3">Propriedade 3</option>
            <option value="4">Propriedade 4</option>
          </select>
        </div>
        <div class="form-group">
          <label for="valor">Valor:</label>
          <input type="number" ref="valor" class="form-control" id="valor" step="0.01" placeholder="Digite o valor" required>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "OperacaoForm",
});
</script>