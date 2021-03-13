<template>
  <div class="Inicial brown lighten-4">
    <Carrossel/>
    <p class="text-center ma-5">
      Esta é uma aplicação para pesquisa de fornecedores de ovos de páscoa, sabemos que a Páscoa está chegando,
      e com isso, a procura por ovos de chocolate cresce, porém com a pandemia, não dá para ficarmos procurando,
      nem andando pela rua em busca do menor preço. Pensando nisso, criamos esta aplicação, que te mostra, de 
      forma organizada, quais as empresas que estão produzindo, qual o preço, e os sabores disponíveis, enfim, 
      tudo o que você precisa para escolher o ovo ideal para sua páscoa.
    </p>
    
    <v-btn class="botao"
      elevation="13"
      large
      
    >
      Faça sua pesquisa!
    </v-btn>
    
   
  </div>
</template>

<script>
// @ is an alias to /src
import Carrossel from '../components/Carrossel.vue'

export default {
  name: 'Inicial',
  components: {
    Carrossel
  }
}
</script>

<style scoped>
  h2, p {
    text-align: left;
  }
  
</style>
