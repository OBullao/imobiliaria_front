<template>
<Headers/>
<h1>aaaaaa</h1>
<Anuncios/>

</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Headers from '../components/Header.vue'
import Anuncios from '../components/Anuncios.vue'


@Options({
     components:{
       Headers,
       Anuncios

     },
})
export default class HomeView extends Vue {
  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
</script>

<style lang="scss">
</style>
