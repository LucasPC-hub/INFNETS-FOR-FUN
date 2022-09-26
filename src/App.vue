<template>
 <navBar></navBar>
  <destaques-carrossel></destaques-carrossel>
</template>

<script>
import navBar from './components/navbar.vue'
import destaquesCarrossel from './components/carrousel.vue'

export default {
  name: 'App',
  components: {
    navBar,
    destaquesCarrossel
  },
}
</script>

<style>
  body{
    background-color: black;
  }

</style>
