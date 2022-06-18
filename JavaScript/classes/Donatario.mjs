import Pessoa from "./Pessoa.mjs";


class Donatario extends Pessoa {
    constructor(nome, idade, cpf, email, tipoSanguineo, listaDeEspera){
        super(nome, idade, cpf, email, tipoSanguineo);

        this.listaDeEspera           = listaDeEspera;
        this.orgaosEmEspera          = [];
        this.historicoOrgaosRecebido = [];

    }

    subirListaEspera(){

    }

    adicionarOrgaoListaEspera(nomeOrgao){
        const novoOrgao = new Orgao (nomeOrgao, this.tipoSanguineo)

        this.orgaosEmEspera.push(novoOrgao)

    }

    removerOrgaoListaEspera(orgao){
        const indexOrgao = this.orgaosEmEspera.findIndex((elem) =>{
           return elem.nome === orgao.nome;
        })

        if (indexOrgao >= 0){
            this.orgaosEmEspera.splice(indexOrgao, 1);
    
            this.adicionarHistorico(orgao);
        }

    }

    adicionarHistorico(orgaoRecebido){
        const novoHistorico = {
            orgaoRecebido,
            data: new Date(),
        }

        this.historicoOrgaosRecebido.push(novoHistorico)

        return novoHistorico

    }
}

export default Donatario