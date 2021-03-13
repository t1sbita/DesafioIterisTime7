<template>
  <v-app>
    <AppTopBar/>
    
    <v-main>
        <router-view/>
        <NossoRodape/>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import NossoRodape from './components/NossoRodape.vue'
import AppTopBar from './components/shared/AppTopBar'
export default {
  name: 'App',
  components: {
    AppTopBar,
    NossoRodape,
  }
}
</script>

