class ValidarDoacao {
    constructor(){

    }

    static validarTipoSanguineo(orgao, donatario){
        let transplanteValidado = false

        if ( orgao.tipoSanguineo === donatario.tipoSanguineo){
            transplanteValidado = true

        }
        return transplanteValidado
    }
}