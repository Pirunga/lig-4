let count = 0
const mainFunction = function (event) {
    let column = event.currentTarget
    let child = column.childElementCount
    if (child < 6) {
        if (count % 2 === 0) {
            let disco = document.createElement('div')
            disco.className = 'discosColunas'
            disco.classList.add('discoClaro')
            column.appendChild(disco)
            count += 1
        } else {
            let disco = document.createElement('div')
            disco.className = 'discosColunas'
            disco.classList.add('discoEscuro')
            column.appendChild(disco)
            count += 1
        }
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