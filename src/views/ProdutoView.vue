<template>
    <Headers/>
   <Carousei/>
    <h1>aaaaa</h1>
    </template>

<script>
import { Options, Vue } from 'vue-class-component';
import Headers from '../components/Header.vue'
import Carousei from '../components/Carousei.vue'




@Options({
     components:{
       Headers,
       Carousei
     },
})
export default class HomeView extends Vue {
}
</script>

<style lang="scss">
</style>