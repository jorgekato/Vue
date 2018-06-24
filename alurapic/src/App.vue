<template>
  <div class="corpo">

    <meu-menu :rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {routes} from './routes';
  import Menu from './components/shared/menu/Menu.vue';
  export default {

    components:{
      'meu-menu': Menu
    },

    data(){
      return {
        //so exibe a rota em que o menu for true
        routes: routes.filter( route => route.menu )
      }

    }
  }
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';

.corpo{
  font-family:Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active {
      opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
      transition: opacity .4s;
  }
</style>
