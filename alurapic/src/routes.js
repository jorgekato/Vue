import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

/*Config de rotas*/
export const routes = [
    {path: '', component: Home, titulo: 'Home'},/* localhost:3000/#/ */
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}/* localhost:3000/#/cadastro */

];