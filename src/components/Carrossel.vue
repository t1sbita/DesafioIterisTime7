<template>
      <v-carousel hide-delimiters height=300>
        <v-carousel-item
        v-for="(ovo, i) in ovos"
        :key="i"
        :src="ovo.imagem"
        reverse-transition="fade-transition"
        transition="fade-transition"
        >

            <v-container fill-height class="d-flex justify-center align-center">
              <h3 class="display-1">Experimente Nossos Sabores</h3>
            </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
        data: () => ({
      ovos: [],
    }),
    created(){
      fetch('https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resultado => resultado.json())
        .then(json => {
          this.ovos = json;
        })
    }
}
</script>

<style scoped>


</style>