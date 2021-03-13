<template>
    <div class="app-top-bar">
        <v-app-bar
        app
        color="#5D4037"
        dense
        dark
        >

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Rota do Coelho</v-toolbar-title>

        </v-app-bar>  
        
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="brown darken-1 text--accent-4"
            >

            <router-link to="/">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Início</v-list-item-title>
                </v-list-item>
            </router-link>

            <router-link to="/listaVendedores">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-format-list-bulleted</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Vendedores</v-list-item-title>
                </v-list-item>
            </router-link>

            <a href="https://github.com/t1sbita/DesafioIterisTime7">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-github</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>GitHub</v-list-item-title>
                </v-list-item>
            </a>

            <router-link to="/SobreNos">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Sobre nós</v-list-item-title>
                </v-list-item>
            </router-link>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    
    data: () => ({
    drawer: false,
    group: null,
    }),

}
</script>

<style>
    .app-top-bar a{
        text-decoration: none; 
    }
</style>