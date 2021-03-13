<template>
  <v-footer
    color="#5D4037"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} © <strong>Desafio Iteris Grupo 07</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name: 'NossoRodape',
}
</script>

<style scoped>

</style>