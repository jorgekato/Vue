export default class FotoService {

    constructor( resource ) {
        this._resourceFoto = resource( 'v1/fotos{/id}' );
    }

    cadastra( foto ) {

        return this._resourceFoto.save(foto);
    }

    apaga( id ) {
        
        return this._resourceFoto.delete( { id: id } );
    }

    lista() {

        return this._resourceFoto
        .query()  //realiza a busca
        .then( res => res.json() );  //converte para formato json
    }

}