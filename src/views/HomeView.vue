<template>
  <div class="home">
    <destaques-carrossel></destaques-carrossel>
  </div>
</template>

<script>
import destaquesCarrossel from '../components/carrousel.vue'

export default {
  name: 'HomeView',
  components: {
    destaquesCarrossel
  },
}
</script>