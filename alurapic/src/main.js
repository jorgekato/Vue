import Vue from 'vue'
import App from './App.vue'
import { Layout } from 'bootstrap-vue/es/components';


import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
/**Não é um elemento padrão, entao deve estar entre {} */
import { routes } from './routes';
/**import da directiva para ser registrada na global Vue */
import './directives/Transform';
/**import do vee-validate */
import VeeValidate from 'vee-validate';
import msg from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';

Vue.use(VueResource);
Vue.http.options.root='http://localhost:3000';
Vue.use(VueRouter);
Vue.use(Layout);
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

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
