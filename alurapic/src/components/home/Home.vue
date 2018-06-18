<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro= $event.target.value" placeholder="Filtre por parte do título " />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for ="foto of fotosComFiltro" :key="foto">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva class="imagem-responsiva" v-bind:src="foto.url" :alt="foto.titulo" v-meu-transform />
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
    export default {

    components:{
        'meu-painel': Painel,
        'imagem-responsiva':ImagemResponsiva,
        'meu-botao': Botao
    },

    data() {
        return{
        titulo: 'Alurapic',
        fotos: [],
        filtro: ''
        }
    },

    methods: {
        remove(foto){
            alert('Removido a foto ' + foto.titulo);
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
        
        this.$http.get( 'http://localhost:3000/v1/fotos' )
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
