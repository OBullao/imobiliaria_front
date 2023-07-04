<template>
<Headers/>
<!--<Carousei/>
<div class="imgfundo"> 
  <img :src="imagemAtual" alt="Imagem Dinâmica">
</div>-->
<img class="imgfundo" src="../assets/predio.jpg" alt="">
<Anuncios/>

</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Headers from '../components/Header.vue'
import { ref, computed, onMounted } from 'vue';
import Anuncios from '../components/Anuncios.vue'
import imagem1 from  '../assets/lucas.png';
import imagem2 from '../assets/imob.png';
import Carousei from '../components/Carousei.vue'


@Options({
     components:{
       Headers,
       Anuncios,
       Carousei

     },
})
export default class HomeView extends Vue {
  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

/*setup() {
    const imagens = [imagem1, imagem2, imagem3];
    const indiceImagemAtual = ref(0);

    const imagemAtual = computed(() => {
      return imagens[indiceImagemAtual.value];
    });

    onMounted(() => {
      // Exemplo de alteração dinâmica da imagem a cada 3 segundos
      setInterval(() => {
        indiceImagemAtual.value = (indiceImagemAtual.value + 1) % imagens.length;
      }, 3000);
    });

    return {
      imagemAtual
    };
  }*/
};

</script>


<style lang="scss">

.imgfundo{
width: 100vw;
height: 60vh;
blur(1000px);
margin-top: -2.7vw;

}


</style>


