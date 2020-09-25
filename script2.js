//Variáveis de escopo global
let count = 0
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

//Função que chega as possíveis condições de vitória
function win() {
    let getContainer = document.getElementById('container')
    let diskCounter = 0
    //Verifica a vitória na horizontal
    for (let i = 0; i < tabuleiroMatriz.length; i++) {
        for (let j = 0; j < tabuleiroMatriz[i].length - 1; j++) {
            if (tabuleiroMatriz[i][j] !== ' ' && (tabuleiroMatriz[i][j] === tabuleiroMatriz[i][j + 1])) {
                diskCounter += 1
            } else {
                diskCounter = 0
            }
            if (diskCounter === 3) {
                console.log('acabou')
                getContainer.innerHTML = ''
                getContainer.innerText = 'Ganhou!'
            }
        }
    }

    //Verifica a vitória na vertical
    for (let i = 0; i < tabuleiroMatriz[0].length; i++) {
        for (let j = 0; j < tabuleiroMatriz.length - 1; j++) {
            if (tabuleiroMatriz[j][i] !== ' ' && (tabuleiroMatriz[j][i] === tabuleiroMatriz[j + 1][i])) {
                diskCounter += 1
            } else {
                diskCounter = 0
            }
            if (diskCounter === 3) {
                console.log('acabou')
                getContainer.innerHTML = ''
                getContainer.innerText = 'Ganhou!'
            }
        }
    }

    //Verifica a vitória na diagonal 
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

//Função principal do jogo, faz a criação dos discos, revezamento dos jogadores, preenchimento da matriz, chega as condições de vitória e empate
const mainFunction = (event) => {
    const disco = document.createElement('div')
    const column = event.currentTarget
    let child = column.childElementCount
    if (child < 6) {
        if (count % 2 === 0) {
            disco.className = 'discosColunas'
            disco.classList.add('discoClaro')
            column.appendChild(disco)
            addMatriz(column, child, "R")
            getDivPecaAtual.style.backgroundColor = '#01141D'
            count++
        } else {
            disco.className = 'discosColunas'
            disco.classList.add('discoEscuro')
            addMatriz(column, child, "P")
            column.appendChild(disco)
            getDivPecaAtual.style.backgroundColor = '#855bcc'
            count++
        }
    }
    win()
}

//eventListeners
document.getElementById('column0').addEventListener('click', mainFunction)
document.getElementById('column1').addEventListener('click', mainFunction)
document.getElementById('column2').addEventListener('click', mainFunction)
document.getElementById('column3').addEventListener('click', mainFunction)
document.getElementById('column4').addEventListener('click', mainFunction)
document.getElementById('column5').addEventListener('click', mainFunction)
document.getElementById('column6').addEventListener('click', mainFunction)