<template>
  <h1>MÚSICAS</h1>
  <div class="musicas">
    <template v-for="item in bandas.items" :key="item.id"><flipCards class="musicas" v-if="item.id<4" :nome="item.nome" :imagem=item.imagem :descricao=item.descricao :id=item.id></flipCards></template>
  </div>
</template>

<script setup>

import { useDados } from '@/stores/dados'


const bandas = useDados();


</script>

<script>
import flipCards from "@/components/flipCards";
export default {
  name: "MusicasView",
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