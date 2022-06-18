import Pessoa from "./Pessoa.mjs";
import Orgao from "./Orgao.mjs";


class DoadorOrgaos extends Pessoa {
    constructor(nome, idade, cpf, email, tipoSanguineo){
        super(nome, idade, cpf, email, tipoSanguineo);

        this.historicoDoacao  = [];
    }

    DoarOrgao(orgao){        
        const novoOrgao = new Orgao(orgao, this.tipoSanguineo, this);

        this.adicionarHistorico(novoOrgao)

        return novoOrgao;

    }

    adicionarHistorico(orgaoDoado){
        const novoHistorico = {
            orgaoDoado,
            data: new Date()
        }

        this.historicoDoacao.push(novoHistorico)

        return novoHistorico;

    }
}

export default DoadorOrgaos