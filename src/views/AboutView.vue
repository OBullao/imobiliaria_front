<template>
  <Headers/>
  <Informacoes/>
  </template>
  
  <script>
  import { Options, Vue } from 'vue-class-component';
  import Headers from '../components/Header.vue'
  import Informacoes from '../components/Informacoes.vue'
  
  
  
  @Options({
       components:{
         Headers,
         Informacoes
       },
  })
  export default class HomeView extends Vue {
  }
  </script>