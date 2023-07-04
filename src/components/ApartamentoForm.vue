<template>
      <div class="container">
        <h1>Formulário - Apartamento</h1>
        <form>
            <div class="form-group">
                <label for="id">ID:</label>
                <input type="number" class="form-control" id="id" placeholder="Digite o ID" required>
            </div>
            <div class="form-group">
                <label for="cadastro">Data de Cadastro:</label>
                <input type="datetime-local" class="form-control" id="cadastro" required>
            </div>
            <div class="form-group">
                <label for="edicao">Data de Edição:</label>
                <input type="datetime-local" class="form-control" id="edicao">
            </div>
            <div class="form-group">
                <label for="ativo">Ativo:</label>
                <select class="form-control" id="ativo">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
            </div>
            <div class="form-group">
                <label for="andar">Andar:</label>
                <input type="number" class="form-control" id="andar" placeholder="Digite o andar" required>
            </div>
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" required>
            </div>
            <div class="form-group">
                <label for="interphone">Interfone:</label>
                <input type="number" class="form-control" id="interphone" placeholder="Digite o número do interfone" required>
            </div>
            <div class="form-group">
                <label for="estacionamento">Vagas de Estacionamento:</label>
                <input type="number" class="form-control" id="estacionamento" placeholder="Digite o número de vagas de estacionamento" required>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "ApartamentoForm",
});
</script>