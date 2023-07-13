document.addEventListener('DOMContentLoaded', function() {
    let section = document.getElementById('conteudo');

    function carregarConteudo() {
        fetch('../html/escolha.html')
            .then(function(resposta) {
                if (resposta.ok) {
                    return resposta.text();
                } else {
                    throw new Error('Erro ao carregar HTML');
                }
            })
            .then(function(conteudo) {
                section.innerHTML = conteudo;
            })
            .catch(function(erro) {
                console.error(erro);
            });
    }
    carregarConteudo();
})










let pontos = document.getElementById('ponto')

function jokenpo(jogador1){
    let cpu = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    let resultado = document.getElementById('resultado')
    if(jogador1 == cpu){
        /* resultado.textContent = 'Draw!' */
    } else if (jogador1 == 1 && cpu == 2){
        pontos --
        /* resultado.textContent = 'You Lose!' */
    }else if (jogador1 == 1 && cpu == 3){
        pontos ++
        /* resultado.textContent = 'You Win!' */
    }else if (jogador1 == 2 && cpu == 1){
        pontos++
        /* resultado.textContent = 'You Win!' */
    }else if (jogador1 == 2 && cpu == 3){
        pontos--
        /* resultado.textContent = 'You Lose!' */
    }else if (jogador1 == 3 && cpu == 1){
        pontos--
        /* resultado.textContent = 'You Lose!' */
    }else if (jogador1 == 3 && cpu == 2){
        pontos++
        /* resultado.textContent = 'You Win!' */
    }
    document.getElementById('ponto').textContent = pontos
    if(document.getElementById('ponto').textContent < 0){
        document.getElementById('ponto').textContent = 0
    }
}