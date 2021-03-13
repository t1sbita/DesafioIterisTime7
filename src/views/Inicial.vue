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

    <router-link to="listaVendedores"><div class="btn">CONHEÇA NOSSOS SABORES</div></router-link>
   
  </div>
</template>

<script>
import Carrossel from '../components/Carrossel.vue'
export default {
  name: 'Inicial',
  components: {
    Carrossel
  }
}
</script>

<style scoped>
  h2 {
    margin-top:20px;
    padding-bottom:10px;
  }
  h2, h3, p {
    color: #ed2939;
  }
  p {
    margin-top:20px;
    font-weight: 600;
  }
  .btn {
    cursor: pointer;
    background-color: #0f6080; 
    border: 3px solid #0f6080;
    border-radius: 5px;
    color: #f5af00;
    font-weight: 700;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  
</style>
