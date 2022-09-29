<template>
  <h1>MUSICAS</h1>
  <div class="musicas">
    <flipCards class="musicas" v-for="item in bandas" :key="item.id" :nome="item.nome" :imagem=item.imagem :descricao=item.descricao></flipCards>
  </div>
</template>

<script>
import flipCards from "@/components/flipCards";



export default {
  name: "MusicasView",
  components:{
    flipCards
  },
  data(){
    return{
      bandas:[
        {id:1,nome:"Angra" ,imagem:"ANGRA-2.jpeg", descricao:'Angra é uma banda brasileira de power metal, formada na ' +
              'cidade de São Paulo em 1991, pelo vocalista, tecladista e multi-instrumentista Andre Matos e os guitarristas ' +
              'Rafael Bittencourt e André Linhares, após se conhecerem na Faculdade Santa Marcelina, onde cursavam composição ' +
              'e regência.'},
        {id:2,nome:"Europe" ,imagem:"Europe-3.jpg", descricao:'Europe é uma banda de rock, formada em Upplands Väsby, S' +
              'uécia, em 1979 sob o nome Force pelo vocalista Joey Tempest e guitarrista John Norum. Apesar de largament' +
              'e associada ao hard rock, o som da banda incorpora elementos de sinfonia e heavy metal, apesar de seus ' +
              'integrantes classificarem a banda como rock clássico.'},
        {id:3,nome:"Iron Maidem" ,imagem:"814qxGP5HWL._AC_SL1500_.jpg", descricao:'Iron Maiden é uma banda inglesa de ' +
              'heavy metal formada em Leyton, East London, em 1975 pelo baixista e compositor Steve Harris.'},
        {id:4,nome:"Band Maid" ,imagem:"3431c4914a7c66e5c66399f24cc5d41c.jpg", descricao:'Band-Maid é uma banda de rock japonesa formada em 2013 ' +
              'assinada pela Gump Records mas atualmente está sob os cuidados da Crown Stones desde 2016. A banda combina' +
              ' o som de rock com o visual Cosplay de Maid.'},
      ]
    }
  }
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