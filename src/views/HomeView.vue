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