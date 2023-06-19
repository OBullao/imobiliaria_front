<template>
    <Headers/>
    <Carousei/>
    
    </template>

<script>
import { Options, Vue } from 'vue-class-component';
import Headers from '../components/Header.vue'
import Carousei from '../components/Anuncios.vue'


@Options({
     components:{
       Headers,
       Carousei

     },
})
export default class HomeView extends Vue {

  
  }
</script>