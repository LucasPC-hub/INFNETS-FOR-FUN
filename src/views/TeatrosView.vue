<template>
  <h1>PEÇAS TEATRAIS</h1>
  <div class="musicas">
    <flipCards class="musicas" v-for="item in teatros" :key="item.id" :nome="item.nome" :imagem=item.imagem :descricao=item.descricao></flipCards>
  </div>
</template>

<script>
import flipCards from "@/components/flipCards";



export default {
  name: "TeatrosView",
  components: {flipCards},
  data(){
    return{
      teatros:[
        {id:1,nome:"Amadeus" ,imagem:"amadeus-quadro-com-poster-de-peca-teatral-sobre-mozart-televisao.jpg", descricao:'Dentro de um manicômio, ' +
              'Amadeus lembra os fatos de três décadas antes, quando o jovem Mozart ganhou a confiança da corte do imperador austríaco Joseph II. ' +
              'Uma lenda urbana se forma sobre a morte de Amadeus Mozart.'},
        {id:2,nome:"O Jardim do Inimigo" ,imagem:"37822424_1780481418654221_5630968249819594752_n.jpg", descricao:'O espetáculo aborda ' +
              'situações que acontecem nas relações humanas, como violência doméstica, uso de drogas, prostituição, miséria, além do ' +
              'descompromisso com Deus e a igreja.'},
        {id:3,nome:"Quatro Metades" ,imagem:"15d4d4f5f9ae42.jpg", descricao:'O encenador promete uma viagem pelo imaginário do escritor através' +
              ' das suas personagens e a forma como estas questionam o mundo à sua volta. “Na Berma de Nenhuma Estrada”, “Entrada no Céu”, “Meia culpa, ' +
              'meia própria culpa” e “O nome gordo de Isadorangela” são os quatro contos que servem de inspiração'},
        {id:4,nome:"Roleta" ,imagem:"15d4d4f60a2e64.jpg", descricao:'Thriller escrito por Raphael Montes e lançado em 2012, Suicidas projetou o nome do romancista' +
              ' carioca dentro do cenário literário brasileiro. O livro ganhou tamanho alcance que chamou a atenção do diretor César Baptista,' +
              ' que assinou a primeira adaptação do título para os palcos.'},
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