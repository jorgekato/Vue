export default class FotoService {

    constructor( resource ) {
        this._resourceFoto = resource( 'v1/fotos{/id}' );
    }

    cadastra( foto ) {

        if(foto._id){
            return this._resourceFoto
                .update( { id: foto._id }, foto); //$http.put
        }else{
            return this._resourceFoto
                .save(foto);
        }
        
    }

    apaga( id ) {
        
        return this._resourceFoto
            .delete( { id: id } )
            .then( null, err => {
                console.log(err);
                throw new Error('Não foi possível remover a foto');
            });
    }

    lista() {

        return this._resourceFoto
        .query()  //realiza a busca
        .then( res => res.json(),
                err => {
                    console.log(err);
                    throw new Error('Não foi possível obter as fotos.');
                }
    );  //converte para formato json
    }

    busca( id ) {
        return this._resourceFoto
        .get( { id } )
        .then( res => res.json() );
    }

}