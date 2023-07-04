<template>
    <div>
      <h1>Formulário - Descrição do Apartamento</h1>
      <form >
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
          <label for="descricao">Descrição:</label>
          <textarea ref="descricao" class="form-control" id="descricao" placeholder="Digite a descrição" required></textarea>
        </div>
        <div class="form-group">
          <label for="fotos">Fotos:</label>
          <input type="file" ref="fotos" class="form-control" id="fotos" accept="image/*" required>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "descricaoForm",
});
</script>