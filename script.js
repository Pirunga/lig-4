/*
Jogo: Lig-4
Desenvolvido por:
    Cirineu Rodrigues
    Érica Laboissiere
    Filipe Natividade
    Luiz Almeida
Versão: 1.0
*/

//Variáveis de escopo global
let count = 0
let pecaAtual = "R"
let tabuleiroMatriz = [
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
];

//Inicia a cor da peça atual como a mais clara
let getDivPecaAtual = document.getElementById('pecaAtual')
getDivPecaAtual.style.backgroundColor = '#855bcc'

const horizontalWin = (getContainer) => {
    let diskCounter = 0;
    
    for (let i = 0; i < tabuleiroMatriz.length; i++) {
        for (let j = 0; j < tabuleiroMatriz[i].length - 1; j++) {
            if (tabuleiroMatriz[i][j] !== ' ' && (tabuleiroMatriz[i][j] === tabuleiroMatriz[i][j + 1])) {
                diskCounter += 1
            } else {
                diskCounter = 0
            }
            if (diskCounter === 3) {
                setTimeout(function () {
                    document.location.reload(true);
                }, 2000);
                getContainer.innerHTML = ''
                getContainer.innerText = `${pecaAtualWin(pecaAtual)} Ganhou!`
            }
        }
    }
}

const verticalWin = (getContainer) => {
    for (let i = 0; i < tabuleiroMatriz.length - 3; i++) {
        for (let j = 0; j < tabuleiroMatriz[0].length; j++) {
            if (tabuleiroMatriz[i][j] !== ' ') {
                if (tabuleiroMatriz[i + 1][j] === tabuleiroMatriz[i][j]) {

                    if (tabuleiroMatriz[i + 2][j] === tabuleiroMatriz[i][j]) {

                        if (tabuleiroMatriz[i + 3][j] === tabuleiroMatriz[i][j]) {

                            setTimeout(function () {
                                document.location.reload(true);
                            }, 2000);

                            getContainer.innerHTML = ''
                            getContainer.innerText = `${pecaAtualWin(pecaAtual)} Ganhou!`
                        }
                    }
                }
            }
        }
    }
}

const primaryDiagonalWin = (getContainer) => {
    for (let y = 3; y < tabuleiroMatriz.length; y++) {
        for (let x = 0; x < tabuleiroMatriz[0].length - 3; x++) {

            if (tabuleiroMatriz[y][x] !== ' ') {

                if (tabuleiroMatriz[y][x] === tabuleiroMatriz[y - 1][x + 1]) {

                    if (tabuleiroMatriz[y][x] === tabuleiroMatriz[y - 2][x + 2]) {

                        if (tabuleiroMatriz[y][x] === tabuleiroMatriz[y - 3][x + 3]) {
                            setTimeout(function () {
                                document.location.reload(true);
                            }, 2000);
                            getContainer.innerHTML = ''
                            getContainer.innerText = `${pecaAtualWin(pecaAtual)} Ganhou!`
                        }
                    }
                }
            }
        }
    }
}

const secondaryDiagonalWIn = (getContainer) => {
    for (let y = 0; y < tabuleiroMatriz.length - 3; y++) {
        for (let x = 0; x < tabuleiroMatriz[0].length - 3; x++) {

            if (tabuleiroMatriz[y][x] !== ' ') {

                if (tabuleiroMatriz[y][x] === tabuleiroMatriz[y + 1][x + 1]) {

                    if (tabuleiroMatriz[y][x] === tabuleiroMatriz[y + 2][x + 2]) {

                        if (tabuleiroMatriz[y][x] === tabuleiroMatriz[y + 3][x + 3]) {
                            setTimeout(function () {
                                document.location.reload(true);
                            }, 2000);
                            getContainer.innerHTML = ''
                            getContainer.innerText = `${pecaAtualWin(pecaAtual)} Ganhou!`
                        }
                    }
                }
            }
        }
    }
}

const drawVerification = () => {
    for (let i = 0; i < tabuleiroMatriz.length; i++) {
        for (let j = 0; j < tabuleiroMatriz[i].length; j++) {
            if (tabuleiroMatriz[i][j] !== ' ') {
                diskCounter++
            } else {
                diskCounter = 0
            }
        }
    }

    if (diskCounter === 42) {
        setTimeout(function () {
            document.location.reload(true);
        }, 2000);
        getContainer.innerHTML = ''
        getContainer.innerText = 'Empatou!'
    }
}

//Função que chega as possíveis condições de vitória
const win = (pecaAtual) => {
    let getContainer = document.getElementById('container')

    horizontalWin(getContainer);
    verticalWin(getContainer);
    primaryDiagonalWin(getContainer);
    secondaryDiagonalWIn(getContainer);
    drawVerification();
}

//Função que retorna a peça atual que será usada para identificar o vencedor
const pecaAtualWin = (pecaAtual) => {
    let textWin = 'Roxo'

    if (pecaAtual === 'P') {
        textWin = 'Preto'
    }
    return textWin
}

//Função que preenche a matriz
function addMatriz(column, child, disc) {
    switch (column.id) {
        case 'column0':
            tabuleiroMatriz[5 - child][0] = disc;
            break;
        case 'column1':
            tabuleiroMatriz[5 - child][1] = disc;
            break;
        case 'column2':
            tabuleiroMatriz[5 - child][2] = disc;
            break;
        case 'column3':
            tabuleiroMatriz[5 - child][3] = disc;
            break;
        case 'column4':
            tabuleiroMatriz[5 - child][4] = disc;
            break;
        case 'column5':
            tabuleiroMatriz[5 - child][5] = disc;
            break;
        case 'column6':
            tabuleiroMatriz[5 - child][6] = disc;
            break;
    }
}

const canReceiveNewDisc = (column) => {
    const maxDiscInColumn = 6;

    return column.childElementCount < maxDiscInColumn;
}

const isPurplePlayer = (count) => {
    return count % 2 === 0;
}

//Função principal do jogo, faz a criação dos discos, revezamento dos jogadores, preenchimento da matriz, chega as condições de vitória e empate
const mainFunction = (event) => {
    const disco = document.createElement('div')
    const column = event.currentTarget
    let child = column.childElementCount

    if (canReceiveNewDisc(column)) {
        if (isPurplePlayer(count)) {
            disco.className = 'discosColunas'
            disco.classList.add('discoClaro')
            column.appendChild(disco)
            addMatriz(column, child, "R")
            getDivPecaAtual.style.backgroundColor = '#01141D'
            count++
            pecaAtual = "R"
            win(pecaAtual)
        } else {
            disco.className = 'discosColunas'
            disco.classList.add('discoEscuro')
            addMatriz(column, child, "P")
            column.appendChild(disco)
            getDivPecaAtual.style.backgroundColor = '#855bcc'
            count++
            pecaAtual = "P"
            win(pecaAtual)
        }
    }

}

//eventListeners
const addListeners = () => {
    for (let i = 0; i < 7; i++) {
        document.getElementById(`column${i}`).addEventListener('click', mainFunction)
    }
}

addListeners();