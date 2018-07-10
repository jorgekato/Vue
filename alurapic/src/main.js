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

import './assets/js/teste.js';
import 'bootstrap/dist/js/bootstrap.js';
Vue.use(VueResource);
/**verifica se exixte uma url de api */
//Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';
Vue.http.options.root = 'http://localhost:3000';
/**interceptador */
/*Vue.http.interceptors.push((req, next) => {

  // é possível colocar informações no header antes do envio da requisição
  req.headers.set('Authorization', 'informação de segurança aqui');
  console.log('Lidando com o request');

  next(res => {
    console.log('Lidando com a resposta')
    // é possível acessar os dados da reposta e realizar transformações antes
    console.log(res.body);
  });
});
*/
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
});
