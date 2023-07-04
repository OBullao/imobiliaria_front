<template>
    <Headers/>
   <Carousei/>
    <h1>aaaaa</h1>
    <CompradorForm/>
    <H1>separar</H1>
    <VendedorForm/>
    <H1>separar</H1>
    <ProprietarioForm/>
    <H1>separar</H1>
    <PessoaForm/>
    <H1>separar</H1>
    <ApartamentoForm/>
    <H1>separar</H1>
    <DescricaoForm/>
    <H1>separar</H1>
    <LocalizacaoForm/>
    <H1>separar</H1>
    <ConstrucaoForm/>
    <H1>separar</H1>
    <PropriedadeForm/>

    </template>

<script>
import { Options, Vue } from 'vue-class-component';
import Headers from '../components/Header.vue'
import Carousei from '../components/Carousei.vue'
import PessoaForm from '../components/PessoaForm.vue'
import ApartamentoForm from '../components/ApartamentoForm.vue'
import DescricaoForm from '../components/DescricaoForm.vue'
import LocalizacaoForm from '../components/LocalizacaoForm.vue'
import ConstrucaoForm from '../components/ConstrucaoForm.vue'
import PropriedadeForm from '../components/propriedadeForm.vue'
import CompradorForm from '../components/CompradorForm.vue'
import VendedorForm from '../components/VendedorForm.vue'
import ProprietarioForm from '../components/ProprietarioForm.vue'




@Options({
     components:{
       Headers,
       Carousei,
       PessoaForm,
       ApartamentoForm,
       DescricaoForm,
       LocalizacaoForm,
       ConstrucaoForm,
       PropriedadeForm,
       CompradorForm,
       VendedorForm,
       ProprietarioForm
     },
})
export default class HomeView extends Vue {
}
</script>
.h1 {
  display: flex;
}
<style lang="scss">
</style>