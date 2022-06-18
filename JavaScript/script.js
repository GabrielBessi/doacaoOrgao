function testarCodigo(){
    const bancoKenzieOrgaos = new BancoOrgaos(
        "14.925.036/0001-90",
        "Rua Domingos Vaz de Oliveira",
        "Banco Kenzie de Orgãos"
    )

    const rim     = new Orgao ("Rim", "AB", "Kenzinho")
    const coracao = new Orgao ("Coração", "O+", "Gabriel")

    bancoKenzieOrgaos.adicionarOrgaoAoBanco(rim)
    bancoKenzieOrgaos.adicionarOrgaoAoBanco(coracao)

    bancoKenzieOrgaos.removerOrgaoAoBanco("rim")

    console.log(bancoKenzieOrgaos)

}

testarCodigo()