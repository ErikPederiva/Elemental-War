let elementoJogador = document.querySelector(".elemento-jogador")
let elementoBot = document.querySelector(".elemento-bot")
let anuncioResultado = document.querySelector(".anuncio-resultado")

let pontuaçaoJogador = document.querySelector(".pontuaçao-jogador")
let pontuaçaoBot = document.querySelector(".pontuaçao-bot")
let contadorJogador = 0
let contadorBot = 0

let botaoFogo = document.querySelector(".botao-fogo")
let botaoAgua = document.querySelector(".botao-agua")
let botaoPlanta = document.querySelector(".botao-planta")

let jogadaHumana = (escolhaHumana) => {

    botaoFogo.disabled = true
    botaoAgua.disabled = true
    botaoPlanta.disabled = true

    if (escolhaHumana == 'fogo') {
        elementoJogador.src = "./assets/fogo.png"
    }
    else if (escolhaHumana == 'agua') {
        elementoJogador.src = "./assets/agua.png"
    }
    else {
        elementoJogador.src = "./assets/planta.png"
    }

    console.log(`Sua escolha: ${escolhaHumana}`)

    resultadoJogada(escolhaHumana, jogadaBot())

    setTimeout(proximoRound, 2000)
}

let jogadaBot = () => {

    let escolhas = ['fogo', 'agua', 'planta']
    let sorteio = Math.floor(Math.random() * 3)

    if (escolhas[sorteio] == 'fogo') {
        elementoBot.src = "./assets/fogo.png"
    }
    else if (escolhas[sorteio] == 'agua') {
        elementoBot.src = "./assets/agua.png"
    }
    else {
        elementoBot.src = "./assets/planta.png"
    }

    return escolhas[sorteio]
}

let resultadoJogada = (humano, bot) => {

    console.log(`Escolha do adversário: ${bot}`)

    if (humano == bot) {
        anuncioResultado.innerHTML = "Deu Empate"
    }
    else if (humano == 'fogo' && bot == 'planta' || humano == 'agua' && bot == 'fogo' || humano == 'planta' && bot == 'agua') {
        anuncioResultado.innerHTML = "Você Ganhou"

        contadorJogador++
        pontuaçaoJogador.innerHTML = contadorJogador
    }
    else {
        anuncioResultado.innerHTML = "Você Perdeu"
        contadorBot++
        pontuaçaoBot.innerHTML = contadorBot
    }

}

let proximoRound = () => {
    anuncioResultado.innerHTML = ""
    elementoBot.src = ""
    elementoJogador.src = ""

    botaoFogo.disabled = false
    botaoAgua.disabled = false
    botaoPlanta.disabled = false
}

let reset = () => {
    pontuaçaoJogador.innerHTML = 0
    pontuaçaoBot.innerHTML = 0
    contadorBot = 0
    contadorJogador = 0
}