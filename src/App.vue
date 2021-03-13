<template>
  <v-app>
    <v-main>
        <router-link to="/">Inicial</router-link>
        <router-link to="/about">About</router-link>
        <router-view/>
        <NossoRodape/>
    </v-main>
  </v-app>
</template>

<script>
import NossoRodape from './components/NossoRodape.vue'
export default {
  name: 'App',
  components: {
    NossoRodape,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
