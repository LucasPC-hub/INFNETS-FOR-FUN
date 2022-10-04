<template>
  <div id="app">
   <navBar></navBar>
    <router-view />
    <footerComponent />
  </div>
</template>

<script>
import navBar from './components/navbar.vue'
import footerComponent from './components/footerComponent.vue'


export default {
  name: 'App',
  components: {
    navBar,
    footerComponent
  },
}
</script>

<style>
  body{
    background-color: black;
  }

</style>
