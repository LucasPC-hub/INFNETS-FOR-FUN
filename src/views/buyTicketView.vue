<template>
  <buy-ticket :imagem="dados.items[id].imagem" :nome="dados.items[id].nome" :desc="dados.items[id].descricao"></buy-ticket>
</template>

<script setup>
import { useDados } from '@/stores/dados'


const dados = useDados();


</script>
<script>
import buyTicket from "@/components/buyTicket";

export default {
  name: "buyTicketView",
  components:{
    buyTicket
  },props:['id']
}
</script>

<style scoped>
</style>