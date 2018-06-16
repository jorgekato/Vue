<template>
  <div>
    <h1>{{ titulo }}</h1>

<ul>
  <li v-for ="foto of fotos">
    <img v-bind:src="foto.url" :alt="foto.titulo"></li>
  
</ul>

   
  </div>
</template>

<script>
export default {
  data() {
    return{
      titulo: 'Alurapic',
      fotos: [
        {
        url: 'https://images-na.ssl-images-amazon.com/images/I/51Ya2eTZVPL.jpg',
        titulo: 'livro'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/I/51Ya2eTZVPL.jpg',
        titulo: 'livrao'
      }]
    }
  }
}
</script>

<style lang="scss">

</style>
