console.clear()

function blackjack() {
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
    
        let totalJogador = cartasJogador[0].valor + cartasJogador[1].valor
    
        const cartasComputador = sorteiaCartas()
    
        let totalComputador = cartasComputador[0].valor + cartasComputador[1].valor
    
        // && só é verdadeiro, quando todos forem verdadeiros
        // || só é falso, quando todos forem falsos
    
        const cartasJogadorStr = cartasJogador.map((carta) => {
            return carta.texto
        })

        const cartasComputadorStr = cartasComputador.map((carta) => {
            return carta.texto
        })
    
        // Comprar cartas a mais (jogador)
        while (
            totalJogador < 21
            && confirm(`Suas cartas são: ${cartasJogadorStr.join(" ")}. A carta revelada do computador é ${cartasComputador[0].texto}.
    Você quer comprar mais uma carta?`)
        ) {
            const cartaComprada = comprarCarta()
            cartasJogador.push(cartaComprada)
            cartasJogadorStr.push(cartaComprada.texto)
            totalJogador += cartaComprada.valor

            if (totalJogador > 21) {
                console.log("Você estorou!")
                console.log(`Jogador: cartas - ${cartasJogadorStr.join(" ")} - pontuação = ${totalJogador}`)
                console.log(`Computador: cartas - ${cartasComputadorStr.join(" ")} - pontuação = ${totalComputador}`)
                console.log("Computador venceu!")
                return // encerra a execução da função blackjack
            }
        }
    
        // Comprar cartas a mais (computador)
        while (
            totalComputador < totalJogador
        ) {
            const cartaComprada = comprarCarta()
            cartasComputador.push(cartaComprada)
            cartasComputadorStr.push(cartaComprada.texto)
            totalComputador += cartaComprada.valor

            if (totalComputador == 21) {
                break // encerra o laço while
            }

            if (totalComputador > 21) {
                console.log("Computador estorou!")
                console.log(`Jogador: cartas - ${cartasJogadorStr.join(" ")} - pontuação = ${totalJogador}`)
                console.log(`Computador: cartas - ${cartasComputadorStr.join(" ")} - pontuação = ${totalComputador}`)
                console.log("Jogador venceu!")
                return // encerra a execução da função blackjack
            }
        }
    
        console.log(`Jogador: cartas - ${cartasJogadorStr.join(" ")} - pontuação = ${totalJogador}`)
        console.log(`Computador: cartas - ${cartasComputadorStr.join(" ")} - pontuação = ${totalComputador}`)
    
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
}

blackjack()