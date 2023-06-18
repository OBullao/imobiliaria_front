<template>
<Headers/>
  <div class="about">
    <div class="a d-flex justify-content-center align-items-center bg-warning" style="width: 100px; height: 100px;"></div>
    <h1>This is an about page</h1>

  </div>
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
}
</script>