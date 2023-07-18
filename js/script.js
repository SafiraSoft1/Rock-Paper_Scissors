document.addEventListener('DOMContentLoaded', function () {
    playAgain()
})

let pontos = document.getElementById('ponto')

function jokenpo(jogador1) {
    let section = document.getElementById('conteudo');
    function carregarResultado() {
        fetch('../html/resultado.html')
            .then(function (resposta) {
                if (resposta.ok) {
                    return resposta.text();
                } else {
                    throw new Error('Erro ao carregar HTML');
                }
            })

            .then(function (telaResultado) {
                section.innerHTML = telaResultado;
                let cpu = Math.floor(Math.random() * (3 - 1 + 1)) + 1
                if (jogador1 == 1 && cpu == 1) {
                    document.getElementById('resultado').textContent = 'Draw!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-rock.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-rock.svg'
                } else if (jogador1 == 1 && cpu == 2) {
                    pontos--
                    document.getElementById('resultado').textContent = 'You Lose!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-rock.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-paper.svg'
                } else if (jogador1 == 1 && cpu == 3) {
                    pontos++
                    document.getElementById('resultado').textContent = 'You Win!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-rock.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-scissors.svg'
                } else if (jogador1 == 2 && cpu == 1) {
                    pontos++
                    document.getElementById('resultado').textContent = 'You Win!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-paper.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-rock.svg'
                } else if (jogador1 == 2 && cpu == 3) {
                    pontos--
                    document.getElementById('resultado').textContent = 'You Lose!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-paper.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-scissors.svg'
                } else if (jogador1 == 3 && cpu == 1) {
                    pontos--
                    document.getElementById('resultado').textContent = 'You Lose!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-scissors.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-rock.svg'
                } else if (jogador1 == 3 && cpu == 2) {
                    pontos++
                    document.getElementById('resultado').textContent = 'You Win!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-scissors.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-paper.svg'
                } else if (jogador1 == 2 && cpu == 2) {
                    document.getElementById('resultado').textContent = 'Draw!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-paper.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-paper.svg'
                } else if (jogador1 == 3 && cpu == 3) {
                    document.getElementById('resultado').textContent = 'Draw!'
                    document.getElementById('papel').getElementsByTagName('img')[0].src = '../images/icon-scissors.svg'
                    document.getElementById('pedra').getElementsByTagName('img')[0].src = '../images/icon-scissors.svg'
                } else if (document.getElementById('resultado').textContent == 'Draw!'){
                    pontos = pontos + 0
                }
                document.getElementById('ponto').textContent = pontos
            })

            .catch(function (erro) {
                console.error(erro);
            });
    }
    carregarResultado();
}

function playAgain() {
    let section = document.getElementById('conteudo');
    fetch('../html/escolha.html')
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.text();
            } else {
                throw new Error('Erro ao carregar HTML');
            }
        })
        .then(function (conteudo) {
            section.innerHTML = conteudo;
        })
        .catch(function (erro) {
            console.error(erro);
        });
}