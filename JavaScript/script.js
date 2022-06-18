function testarCodigo(){
    const bancoKenzieOrgaos = new BancoOrgaos(
        "14.925.036/0001-90",
        "Rua Domingos Vaz de Oliveira",
        "Banco Kenzie de Orgãos"
    )
    bancoKenzieOrgaos.adicionarOrgaoAoBanco("rim")
    bancoKenzieOrgaos.adicionarOrgaoAoBanco("sangue")

    bancoKenzieOrgaos.removerOrgaoAoBanco("rim")
    bancoKenzieOrgaos.removerOrgaoAoBanco("sangue")

    console.log(bancoKenzieOrgaos)

}

testarCodigo()