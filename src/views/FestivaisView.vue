<template>
  <h1>FESTIVAIS</h1>
  <div class="musicas"> <flipCards class="musicas" v-for="item in festivais" :key="item.id" :nome="item.nome" :imagem=item.imagem :descricao=item.descricao></flipCards>
  </div>
</template>

<script>
import flipCards from "@/components/flipCards";



export default {
  name: "FestivaisView",
  components:{
    flipCards
  },
  data(){
    return{
      festivais:[
        {id:1,nome:"Encontro das Tribos" ,imagem:"f6c52bd4e0ec193110bc6d5c0553e5b9.jpg", descricao:'Do fundo do mar ressurge uma nova era. ' +
              'O que aconteceu no passado virou história para que o novo pudesse vir e contar o que ' +
              'só o futuro sabe. Assim, os tempos distintos se fundem em uma combinação perfeita para a criação de OCEANIX.'},
        {id:2,nome:"Black Label Society" ,imagem:"black-label-society-e1654537943175.jpeg", descricao:'A banda liderada pela entidade sagrada das ' +
              'guitarras, Zakk Wylde,' +
              ' promoverá o seu brilhante décimo primeiro álbum, "Doom Crew Inc.",' +
              ' em oito cidades brasileiras em outubro de 2022. Serão noites de exaltação dos aspectos mais poderosos e ' +
              'apaixonantes do heavy metal / hard rock,'},
        {id:3,nome:" Prime Rock Brasil" ,imagem:"278288444_1902752853246413_9201458277261402297_n_0.jpg", descricao:'O palco do @mineirao vai receber a poesia' +
              ' e a musicalidade atemporal do Legião Urbana, ' +
              'juntamente com a qualidade do repertório dos @titasoficial, mostrando que ninguém completa 40 anos de carreira em vão.'},
        {id:1,nome:"João Rock" ,imagem:"joao-rock-2019.png", descricao:'A edição comemorativa dos 18 anos do Festival ' +
              'João Rock contará com 21 grandes shows, distribuídos em quatro palcos, somando mais de 12 horas de música. '},
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