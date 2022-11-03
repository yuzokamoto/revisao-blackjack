console.clear()

const isJogoAtivo = confirm("Quer iniciar uma nova rodada?")

if (isJogoAtivo) {
    console.log("Boas vindas ao jogo de blackjack!")

    // ENQUANTO AS DUAS CARTAS FOREM IGUAIS À ASES, SORTEIE NOVAMENTE

    function sorteiaCartas() {
        let primeiraCarta = comprarCarta()
        let segundaCarta = comprarCarta()

        while (
            primeiraCarta.texto.includes("A")
            && segundaCarta.texto.includes("A")
        ) {
            primeiraCarta = comprarCarta()
            segundaCarta = comprarCarta()
        }

        return [primeiraCarta, segundaCarta]
    }

    const cartasJogador = sorteiaCartas()

    const totalJogador = cartasJogador[0].valor + cartasJogador[1].valor

    const cartasComputador = sorteiaCartas()

    const totalComputador = cartasComputador[0].valor + cartasComputador[1].valor

    console.log(`Jogador: cartas - ${cartasJogador[0].texto} ${cartasJogador[1].texto} - pontuação = ${totalJogador}`)
    console.log(`Computador: cartas - ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação = ${totalComputador}`)

    if (totalJogador > totalComputador) {
        console.log("Jogador venceu!")
    } else if (totalJogador < totalComputador) {
        console.log("Computador venceu!")
    } else {
        console.log("Empate!")
    }

} else {
    console.log("Jogo acabou.")
}
