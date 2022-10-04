<template>
  <div class="home">
    <destaques-carrossel></destaques-carrossel>
    <musicas-view></musicas-view>
    <festivais-view></festivais-view>
    <teatros-view></teatros-view>
  </div>
</template>

<script>
import destaquesCarrossel from '../components/carrousel.vue'
import MusicasView from "@/views/MusicasView";
import FestivaisView from "@/views/FestivaisView";
import teatrosView from "@/views/TeatrosView";

export default {
  name: 'HomeView',
  components: {
    MusicasView,
    destaquesCarrossel,
    FestivaisView,
    teatrosView
  },
}
</script>

<style>
body{
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 70%, rgba(0,17,111,1) 100%);
  background-attachment: fixed;
}
@media (max-width: 480px){
  .musicas{
    width: 100%;
    flex-wrap: wrap;
    margin:auto;
  }
}
</style>