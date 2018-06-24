import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

/*Config de rotas*/
export const routes = [
    {path: '', name:'home', component: Home, titulo: 'Home', menu:true},/* localhost:3000/#/ */
    {path: '/cadastro', name:'cadastro', component: Cadastro, titulo: 'Cadastro', menu:true},/* localhost:3000/#/cadastro */
    {path: '/cadastro/:id', name:'altera', component: Cadastro, titulo: 'Cadastro', menu:false},
    {path: '*', component: Home, menu:false}
];