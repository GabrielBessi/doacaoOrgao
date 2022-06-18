function testarCodigo(){
    const bancoKenzieOrgaos = new BancoOrgaos(
        "14.925.036/0001-90",
        "Rua Domingos Vaz de Oliveira",
        "Banco Kenzie de Orgãos"
    )

    
    
    listaDoadoresOrgaos = doadores.map((doador) => {
        const { nome, idade, cpf, email, tipoSanguineo } = doador
        
        const novoDoador = new DoadorOrgaos(nome, idade, cpf, email, tipoSanguineo)
        
        return novoDoador
        
    })
    
    const orgaoDoado = listaDoadoresOrgaos[1].DoarOrgao("Rim")

    bancoKenzieOrgaos.adicionarOrgaoAoBanco(orgaoDoado)

    const donatario = new Donatario("kenzinho", 18, "5698789", "kenzinho@gmail.com", "O-")
    
    bancoKenzieOrgaos.removerOrgaoAoBanco(orgaoDoado, donatario)
    
    console.log(bancoKenzieOrgaos)
}

testarCodigo()