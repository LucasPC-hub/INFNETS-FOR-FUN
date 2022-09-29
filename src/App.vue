<template>
  <div id="app">
   <navBar></navBar>
    <router-view />
  </div>
</template>

<script>
import navBar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navBar,
  },
}
</script>

<style>
  body{
    background-color: black;
  }

</style>
