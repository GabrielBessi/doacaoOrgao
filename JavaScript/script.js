function testarCodigo(){
    const bancoKenzieOrgaos = new BancoOrgaos(
        "14.925.036/0001-90",
        "Rua Domingos Vaz de Oliveira",
        "Banco Kenzie de Orgãos"
    )

    const victor = new DoadorOrgaos("Victor Augusto", 23, "123456789", "victor@kenzie.com.br", "O-");
    const orgaoDoado = victor.DoarOrgao("Rim")

    const gabriel = new Donatario("Gabriel Bessi", 23, "987654321", "bessi@gmail.com", "O-" )
    gabriel.adicionarOrgaoListaEspera("Rim")
    gabriel.removerOrgaoListaEspera(orgaoDoado)
        
    bancoKenzieOrgaos.adicionarOrgaoAoBanco(orgaoDoado)
    //console.log(bancoKenzieOrgaos)
    console.log(gabriel)   

    

}

testarCodigo()