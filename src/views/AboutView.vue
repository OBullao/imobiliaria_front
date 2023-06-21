<template>
<Headers/>
<h1>about</h1>


</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Headers from '../components/Header.vue'


@Options({
     components:{
       Headers

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
