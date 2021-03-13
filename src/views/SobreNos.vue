<template>
  <div class="SobreNos">
    <h1>Transformamos Negócios por Meio da Tecnologia</h1>
    <h2>
      Somos uma empresa jovem e descontraída. Queremos ajudar pequenos negócios locais por meio da tecnologia.
    </h2>
    <h3>
      A Gente Que Faz
    </h3>
    <a href="https://github.com/t1sbita">
    <h4>
      Elias Santos Garcia <v-icon>mdi-github</v-icon>
    </h4>
    </a>
    <p>
      Sou uma pessoa tranquila, calma, que não se contenta apenas com o conteúdo passado e segue sempre em busca 
      de mais conhecimento, pois acredito que isso que move o mundo!
    </p>
    <a href="#">
    <h4>
      Alice Silva De Meneses <v-icon>mdi-github</v-icon>
    </h4>
    </a>
    <p>
      Olá, me chamo Alice. O meu primeiro contato com programação foi durante a faculdade, ou seja, foi durante o curso que comecei a gostar de programação, então segui estudando outros conteúdos fora da faculdade, como java. Adoro sair com os amigos e assistir séries.
    </p>
    <a href="https://github.com/LiRezende">
    <h4>
      Ligia Rezende <v-icon>mdi-github</v-icon>
    </h4>
    </a>
    <p>
      Olá! Meu nome é Ligia, tenho 8 filhos de 4 patas, que são os amores da minha vida. Sou nerd assumida e amo praia. Estou sempre estudando e em busca de novas aventuras.
    </p>
    
    
   
    
  </div>
</template>

<script>
export default {
  name: 'SobreNos',
}
</script>

<style scoped>
  a {
    text-decoration:none;
  }
  h1, h2 {
    margin:20px;
  }
  h3, h4, p {
    margin:20px;
    text-align:justify;
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
