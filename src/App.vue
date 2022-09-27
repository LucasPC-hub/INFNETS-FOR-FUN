<template>
  <div id="app">
   <navBar></navBar>
    <destaques-carrossel></destaques-carrossel>
    <router-view />
  </div>
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
