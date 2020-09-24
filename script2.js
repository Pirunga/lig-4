let tabuleiroMatriz = [
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
];

let count = 0
const mainFunction = (event) => {
    let column = event.currentTarget
    let child = column.childElementCount
    if (child < 6) {
        if (count % 2 === 0) {
            let disco = document.createElement('div')
            disco.className = 'discosColunas'
            disco.classList.add('discoClaro')
            column.appendChild(disco)
            addMatriz(column, child, "R")
            console.log(tabuleiroMatriz)
            count++
        } else {
            let disco = document.createElement('div')
            disco.className = 'discosColunas'
            disco.classList.add('discoEscuro')
            addMatriz(column, child, "P")
            console.log(tabuleiroMatriz)
            column.appendChild(disco)
            count++
        }
    }
}

function addMatriz (column, child, disc) {
    // for (let y = 0; y < column.length; y++) {
    //     if (column.id === `column${y}`) {
    //         tabuleiroMatriz[5 - column.childElementCount][y] = disc;
    //         console.log(tabuleiroMatriz[5 - column.childElementCount][y]);
    //     }
    // }
    console.log(column.id)

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
        default:
            break;
    }
}

//eventListeners
document.getElementById('column0').addEventListener('click', mainFunction)
document.getElementById('column1').addEventListener('click', mainFunction)
document.getElementById('column2').addEventListener('click', mainFunction)
document.getElementById('column3').addEventListener('click', mainFunction)
document.getElementById('column4').addEventListener('click', mainFunction)
document.getElementById('column5').addEventListener('click', mainFunction)
document.getElementById('column6').addEventListener('click', mainFunction)