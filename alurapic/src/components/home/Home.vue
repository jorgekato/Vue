<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem}}</p>
    <input type="search" class="filtro" v-on:input="filtro= $event.target.value" placeholder="Filtre por parte do título " />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for ="foto of fotosComFiltro" :key="foto">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva class="imagem-responsiva" v-bind:src="foto.url" :alt="foto.titulo" 
          v-meu-transform:scale.animate="1.2" />
          <meu-botao tipo="button" 
          rotulo="REMOVER" 
          @botaoAtivado="remove(foto)"
          :confirmacao="true"
          estilo="perigo"/>
          
        </meu-painel>
      </li>  
    </ul>

  </div>
</template>

<script>
    import Painel from '../shared/painel/Painel.vue';
    import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
    import Botao from '../shared/botao/Botao.vue';
/**import da directiva Transform */
    import transform from '../../directives/Transform';
    import bModal from 'bootstrap-vue/es/components/modal/modal';

    export default {

    components:{
        'meu-painel': Painel,
        'imagem-responsiva':ImagemResponsiva,
        'meu-botao': Botao,
        'b-modal': bModal
    },

    directives: {
        'meu-transform': transform
    },

    data() {
        return{
        titulo: 'Alurapic',
        fotos: [],
        filtro: '',
        mensagem: ''
        }
    },

    methods: {
        remove(foto){
            //this.$http.delete('http://localhost:3000/v1/fotos/' + foto._id);
            this.$http.delete(`v1/fotos/${ foto._id }`)
            .then( () => {
                //busca o indice da foto
                let indice = this.fotos.indexOf( foto );
                //remove programaticamento o item do array
                this.fotos.splice( indice, 1 );
                this.mensagem = 'Foto excluida com sucesso!';
                }, err => {
                console.log( err ); 
                this.mensagem = 'Não foi possivel remover a foto'}
                );
        }
    },

    computed:{
        
        fotosComFiltro(){
        if(this.filtro){
            /*filtrar*/
            let exp = new RegExp(this.filtro.trim(), 'i');
            return this.fotos.filter(foto => exp.test(foto.titulo));
        }
        else{
            return this.fotos;
        }
        }
    },

    created(){
        //http://localhost:3000/ esta em main.js
        this.$http.get( 'v1/fotos' )
        .then( res => res.json() )
        .then( fotos => this.fotos = fotos, err => console.log( err ) );
    }
    }
</script>

<style lang="scss">

.centralizado{
  text-align: center;
}

.lista-fotos{
  list-style: none;
}

.lista-fotos-item{
  display: inline-block;
}

.imagem-responsiva{
  width: 100%;
}

.filtro {
  display: block;
  width: 100%;
}

</style>
