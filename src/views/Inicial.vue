<template>
  <div class="Inicial">
<<<<<<< HEAD
    <h2>
      Tecnologia que movimenta negócios...
    </h2>
    <p>
      Somos uma empresa jovem e descontraída. Queremos ajudar pequenos negócios locais por meio da tecnologia.
    </p>
    <v-btn 
      elevation="13"
      large
    >Faça sua pesquisa!</v-btn>
=======
    <Carrossel/>
>>>>>>> 537e07d01d356f5d1ca997967b3bd147ef76d5c7
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
