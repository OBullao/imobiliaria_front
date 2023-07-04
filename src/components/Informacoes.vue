<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="container">
    <div class="row">
      <!--Aqui eu to dividindo minha tela em 12 partes iguais com o bootstrap-->
        <div v-if="apartamento"  class="col-12" style="text-align: left;">
          <br>
          <h2>{{ apartamento.nome }}</h2>
        </div>
        <div class="container">
          <div class="row">
            <div  class="col-12" style="text-align: left;">
              <!--Aqui eu to dividindo minha tela em 9 partes iguais com o bootstrap-->
              Descrição:
              <br>
            </div>
            <!--Das 9 partes divididas aqui tenho uma divisao em 6 partes-->
            <div class="col-6 text-container">

              <tr v-if="descricao"  style="text-align: left;">
                {{ descricao.descricao }}
              </tr>
              <br>
              <br>
              <br><span v-if="localizacao">
              {{ localizacao.cep }}, {{ localizacao.cidade }}, {{ localizacao.bairro }}, {{ localizacao.rua }}, {{ localizacao.numero }}.
              </span>
              <img src="..\imagens\Local.png" alt="Descrição da imagem" class="img-fluid" style="width: 500px; height: auto;">
            </div>
            <!--Das 9 partes divididas aqui tenho uma divisao em 6 partes-->
              <div v-if="construcao"  class="col-6 infos">
                <div class="Informacoes">
                Informacoes sobre o local:
                <br>
                <br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" style="margin-right: 10px;">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>
                {{ construcao.tipo }} - {{ construcao.metrosQuadrados }} m²
                <br>
                <span v-if="apartamento">
                {{ apartamento.andar }} Andar.
                Interfone - {{ apartamento.interphone }} 
                </span>
                <br>
                <br>
                <!--ICONE CARRO-->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16" style="margin-right: 10px;">
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                </svg>
                <span v-if="apartamento">
                  {{  apartamento.estacionamento }} Garagem.
                </span>
                <br>
                <br>
                <!--ICONE CAMA-->
                <i class="fa fa-bed" style="margin-right: 10px;"></i>
                <span>{{ construcao.quartos }}</span> Quartos.
                <br>
                <br>
                <!--ICONE CHUVEIRO-->
                <i class="fa fa-shower" style="margin-right: 10px;"></i>
                <span>{{ construcao.banheiros }}</span> Banheiros.
                <br>
                <br>
                <!--ICONE TV-->
                <i class="fa fa-tv" style="margin-right: 10px;"></i>
                <span>{{ construcao.suites }} Suites.</span>
                <!--ICONE CASA-->
              </div>
                <br>
              </div>
          </div>
       </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DescricaoModel } from '@/model/DescricaoModel';
import DescricaoClient from "@/client/Descricao.client"
import  LocalizacaoClient  from '@/client/Localizacao.client';
import { LocalizacaoModel } from '@/model/LocalizacaoModel';
import { ConstrucaoModel } from '@/model/ConstrucaoModel';
import ConstrucaoClient from '@/client/Construcao.client';
import ApartamentosClient  from '@/client/Apartamento.client';
import { Apartamento } from '@/model/Apartamento';


export default defineComponent({
    name: 'Infos',

    data(){
      return{
        descricao: new DescricaoModel(),
        localizacao: new LocalizacaoModel(),
        construcao: new ConstrucaoModel(),
        apartamento: new Apartamento()
      }
    },
    computed:{
      id(){
        return this.$route.query.id
       },
      form () {
        return this.$route.query.form
      }

    },
    mounted() {
      Promise.all([
       this.findbyIdDesc(1),
       this.findbyIdLoc(1),
       this.findbyIdCon(1),
       this.findbyIdAps(1)
     ]).then(() => {
         console.log('Todas as chamadas de função foram concluídas');
     }).catch(error => {
          console.error('Erro nas chamadas de função:', error);
     });
},
    methods: {
      findbyIdDesc(id: number){
        DescricaoClient.findById(id)
        .then(sucess => {
          this.descricao = sucess;
        })
        .catch (error => {
        });
      },

      findbyIdLoc(id: number){
        LocalizacaoClient.findById(id)
        .then(sucess => {
          this.localizacao = sucess;
        })
        .catch (error => {
        });
      },

      findbyIdCon(id: number){
        ConstrucaoClient.findById(id)
        .then(sucess => {
          this.construcao = sucess;
        })
        .catch (error => {
        });
      },

      findbyIdAps(id: number){
        ApartamentosClient.findById(id)
        .then(sucess => {
          this.apartamento = sucess;
        })
        .catch (error => {
        });
      },
    }  
  }
  );


</script>

    
    <style scoped lang="scss">
  .container{
  /*Ta aqui eu altero tudo, menos o header*/
    color: white;
  }
    .text-container{
  /*Aqui eu altero tudo sobre a minha descricao*/
      max-width: 600px;
      word-wrap: break-word;
      justify-content: right;
    }
    .Informacoes{
  /*Aqui eu altero tudo sobre as informacoes do apartamento(Como bloco)*/


    }
    .infos{

      text-align: left;
      padding-left: 20%;

    }
    </style>
    