import ValidarDoacao from "./ValidarDoacao.mjs";


class BancoOrgaos {
    constructor(cnpj, endereco, razaoSocial, ){
        this.cnpj        = cnpj;
        this.endereco    = endereco;
        this.razaoSocial = razaoSocial;

        this.orgaosDoados      = [];
        this.historicoDoacao   = [];
        this.historicoRecepcao = [];

    }

    adicionarOrgaoAoBanco(orgao){

        const doacaoValida = ValidarDoacao.validarIdade(orgao.doador)

        if (doacaoValida){
            this.orgaosDoados.push(orgao)
        
            this.adicionarHistorico(orgao.nome, orgao.doador)
            //1- toda vez que chamar esta função ela vai fazer com que AdicionarHistorico crie um novo objeto
        }
       
    }

    //Para remover o orgão eu preciso saber se a pessoa que está doando tem o mesmo tipo sanguineo do donatario
    removerOrgaoAoBanco(orgao, donatario){
        //código de avaliação
       const orgaoEncontrado = this.orgaosDoados.find((elem) => {
            return elem.nome === orgao.nome.toUpperCase();
        } )    

        const transplanteValidado = [
            orgaoEncontrado,
            ValidarDoacao.validarTipoSanguineo(orgaoEncontrado, donatario),
            ValidarDoacao.validarDoador(orgao.doador, donatario)
        ].every((item) => item)

        if (transplanteValidado){
            const indexOrgao = this.orgaosDoados.indexOf(orgaoEncontrado)            

            this.orgaosDoados.splice(indexOrgao, 1)

            this.adicionarHistoricoRecepcao(orgao, donatario)
        }

        return orgaoEncontrado;

    }

    adicionarHistorico(orgao, pessoa){

        const novoHistorico = {
            doador: pessoa,
            orgao: orgao,
            dataDoacao: new Date()
        }

        //A partir do momento que foi chamado o adicionar histórico, ele vai criar este objeto
        // Ao chamar o historicoDoacao e passar como parâmetro a variavel novohistorico, então estes objeto vão para dentro do array historicoDoacao como objeto

        this.historicoDoacao.push(novoHistorico)

        return novoHistorico

    }

    adicionarHistoricoRecepcao(orgao, pessoa){

        const novoHistorico = {
            donatario: pessoa,
            orgao: orgao,
            dataDoacao: new Date()
        }

        //A partir do momento que foi chamado o adicionar histórico, ele vai criar este objeto
        // Ao chamar o historicoDoacao e passar como parâmetro a variavel novohistorico, então estes objeto vão para dentro do array historicoDoacao como objeto

        this.historicoRecepcao.push(novoHistorico)

        return novoHistorico

    }

}

export default BancoOrgaos