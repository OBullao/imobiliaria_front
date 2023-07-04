<template>

    <div class="container">
        <h1>Formulário</h1>
        <form>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email" placeholder="Digite o e-mail" required>
            </div>
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" required>
            </div>
            <div class="form-group">
                <label for="cpfCnpj">CPF/CNPJ:</label>
                <input type="text" class="form-control" id="cpfCnpj" placeholder="Digite o CPF/CNPJ" required>
            </div>
            <div class="form-group">
                <label for="phone">Telefone:</label>
                <input type="text" class="form-control" id="phone" placeholder="Digite o telefone" required>
            </div>
            <div class="form-group">
                <label for="documento">Documento:</label>
                <input type="text" class="form-control" id="documento" placeholder="Digite o documento" required>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "PessoaForm",
});
</script>