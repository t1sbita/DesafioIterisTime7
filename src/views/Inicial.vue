<template>
  <div class="Inicial">
    <Carrossel/>
    <h2>
      Quem resiste a um delicioso Ovo de Páscoa?!
    </h2>
    <h3>
      Difícil, não é mesmo?! E que tal encontrar Ovos únicos de Sabores Especiais, feitos com Amor e Carinho?!
    </h3>
    <p>
      Acesse nosso catálogo e confira nossos sabores.
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
    margin:30px;
  }
</style>
