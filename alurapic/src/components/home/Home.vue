<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
<img src="/static/teste.png">
    <p v-show="mensagem" class="centralizado">{{ mensagem}}</p>
    <input type="search" class="filtro" v-on:input="filtro= $event.target.value" placeholder="Filtre por parte do título " />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for ="foto of fotosComFiltro" :key="foto._id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva class="imagem-responsiva" v-bind:src="foto.url" :alt="foto.titulo" 
          v-meu-transform:scale.animate="1.2" />
          <router-link :to="{name: 'altera', params: {id: foto._id}}">
              <meu-botao tipo="button"  rotulo="ALTERAR" />
          </router-link>

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
    import fotoService from '../../domain/foto/FotoService';

    export default {

    components:{
        'meu-painel': Painel,
        'imagem-responsiva':ImagemResponsiva,
        'meu-botao': Botao,
        
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

            this.service
            .apaga( foto._id )
            .then( () => {
                //busca o indice da foto
                let indice = this.fotos.indexOf( foto );
                //remove programaticamento o item do array
                this.fotos.splice( indice, 1 );
                this.mensagem = 'Foto excluida com sucesso!';
                }, err => {
                    this.mensagem = err.message;}
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
        // criando uma instância do nosso serviço que depende de $resource
        this.service = new fotoService( this.$resource );

        this.service
            .lista()
            .then( fotos => this.fotos = fotos, 
                    err => this.mensagem = err.message);
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
