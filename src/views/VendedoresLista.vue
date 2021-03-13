<template>
  <v-container>
      <h2 class="text-center mb-7 mt-2">Lista de Vendedores</h2>

    <v-card>
        <v-card-title>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="listaVendedores"
            :search="search"
        >
            <template v-slot:[`item.imagem`]='item'>
                <a :href="item.item.imagem">
                    <v-avatar size= "35">
                        <img
                            :src="item.item.imagem"
                            :alt="item.item.nome"
                        >
                    </v-avatar>
                </a>
            </template>
        </v-data-table>
  </v-card>
  </v-container>
</template>

<script>

export default {
    name: 'VendedoresLista',
    data () {
        return {
            search: '',
            headers: [
            {
                text: 'Produto',
                align: 'start',
                value: 'nome',
            },
            { text: 'Imagem Produto', value: 'imagem', filterable: false },
            { text: 'Sabor', value: 'sabor' },
            { text: 'Preço', value: 'preco' },
            { text: 'Localização', value: 'local.nome' },
            ],
            listaVendedores: [],
        }
    },
    created(){
        fetch('https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(response => response.json())
        .then(json => {
            this.listaVendedores = json;
        });
    }
  }
</script>

<style>

</style>