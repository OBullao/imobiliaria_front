<template>
<Headers/>
<Dados/>
</template>

<script>
import { defineComponent } from 'vue';
import Headers from '../components/Header.vue'
import Dados from '../components/Dados.vue'




export default defineComponent({
  components: {
    Headers,
    Dados
  },
  setup() {

  }
});
</script>