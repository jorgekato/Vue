import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
/**Não é um elemento padrão, entao deve estar entre {} */
import { routes } from './routes';
/**import da directiva para ser registrada na global Vue */
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

/*cria uma instancia de router passando as rotas como parametro*/
const router = new VueRouter({ 
  routes:routes,
  mode: 'history' 
});
/*Poderia ser: const router = new VueRouter({ routes }); */

/**Vue instance */
new Vue({
  el: '#app',
  router,/* Se o elemento for igual a constante, pode-se omitir o elemento. Ex: router */
  render: h => h(App)
})
