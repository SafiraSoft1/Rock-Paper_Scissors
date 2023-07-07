let pontos = parseFloat(document.getElementById('ponto'))

function jokenpo(jogador1){
    let cpu = Math.floor(Math.random() * (3 - 1 + 1)) + 1

    if(jogador1 == cpu){
        /* document.getElementById('resultado') = 'Draw!' */
    } else if (jogador1 == 1 && cpu == 2){
        pontos --
        /* document.getElementById('resultado') = 'You Lose!' */
    }else if (jogador1 == 1 && cpu == 3){
        pontos ++
        /* document.getElementById('resultado') = 'You Win!' */
    }else if (jogador1 == 2 && cpu == 1){
        pontos++
        /* document.getElementById('resultado') = 'You Win!' */
    }else if (jogador1 == 2 && cpu == 3){
        pontos--
        /* document.getElementById('resultado') = 'You Lose!' */
    }else if (jogador1 == 3 && cpu == 1){
        pontos--
        /* document.getElementById('resultado') = 'You Lose!' */
    }else if (jogador1 == 3 && cpu == 2){
        pontos++
        /* document.getElementById('resultado') = 'You Win!' */
    }
    document.getElementById('ponto').textContent = pontos
}