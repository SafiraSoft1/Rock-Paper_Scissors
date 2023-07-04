let pedra = 1
let papel = 2
let tesoura = 3
function jokempo(jogador1, cpu){
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
console.log(jokempo(3,2));