const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const robotron = document.getElementById('robotron')
const arrCores = [{
        src: 'img/robotron_amarelo.png',
        cor: 'amarelo'
    },
    {
        src: 'img/robotron_azul.png',
        cor: 'azul'
    },
    {
        src: 'img/robotron_preto.png',
        cor: 'amarelo'
    },
    {
        src: 'img/robotron_rosa.png',
        cor: 'rosa'
    },
    {
        src: 'img/robotron_vermelho.png',
        cor: 'vermelho'
    },
]

function rotate(arr) {
    arr.push(arr.shift())
}
robotron.addEventListener('click', () => {
    rotate(arrCores)
    robotron.src = arrCores[0].src
})

function trocarCor() {

}
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    if (operacao === "-") {
        peca.value = minusOne(parseInt(peca.value))
    } else if (operacao === '+') {
        peca.value = addOne(parseInt(peca.value))
    }
}

function addOne(value) {
    return value + 1
}

function minusOne(value) {
    if (value > 1) {
        return value - 1
    }
    return "00"
}

function atualizaEstatisticas(peca) {
    console.log(pecas[peca])

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}