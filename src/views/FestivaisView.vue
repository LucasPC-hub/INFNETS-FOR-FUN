<template>
  <h1>FESTIVAIS</h1>
  <div class="musicas">
    <template v-for="item in festivais.items" :key="item.id"><flipCards class="musicas" v-if="item.id>3 && item.id<8" :nome="item.nome" :imagem=item.imagem :descricao=item.descricao :id=item.id></flipCards></template>
  </div>
</template>

<script setup>

import { useDados } from '@/stores/dados'


const festivais = useDados();


</script>
<script>
import flipCards from "@/components/flipCards";



export default {
  name: "FestivaisView",
  components:{
    flipCards
  },
}


</script>

<style scoped>
.musicas{
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
h1{
  font-family: "Bebas",serif;
  font-size: 100px;
  margin-bottom: -100px;
  text-align: center;
  color: aliceblue;
}

</style>