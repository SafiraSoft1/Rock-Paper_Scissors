function jokenpo(jogador1){
    let cpu = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if(jogador1 == cpu){
        return 'Draw!'
    } else if (jogador1 == 1 && cpu == 2){
        return 'You Lose!'
    }else if (jogador1 == 1 && cpu == 3){
        return 'You Win!'
    }else if (jogador1 == 2 && cpu == 1){
        return 'You Win!'
    }else if (jogador1 == 2 && cpu == 3){
        return 'You Lose!'
    }else if (jogador1 == 3 && cpu == 1){
        return 'You Lose!'
    }else if (jogador1 == 3 && cpu == 2){
        return 'You Win!'
    }
}