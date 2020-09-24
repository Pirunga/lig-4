function criarDisco() {
    let cont = 0;
    for (let i = 0; i < 7; i++) {
        let column = document.getElementById(`column${i}`);
        for (let y = 0; y < 6; y++) {
            let disco = document.createElement('div');
            disco.className = 'discosColunas'
            let id = document.createAttribute('id')
            cont++;
            id.value = 'div-' + (cont)
            disco.setAttributeNode(id)
            // disco.style.display = 'none'
            column.appendChild(disco);
            console.log(disco)
        }
    }
}
criarDisco();

//Função principal que contém tudo que o jogo precisa para funcionar
const mainFunction = function (event) {
    //O código vai aqui!

    //Criar discos dinamicamente (nas colunas e em peça atual, por ora não se preocupe em alterar a ordem dos jogadores, mas crie os discos nas duas cores (Filipe)
    //Criar condição que permita que não sejam inseridos mais discos do que a coluna permite (Filipe)
    //Realizar o revezamento das peças (Erica)
    //Registrar a cor dos discos e posição em uma matriz que representa o tabuleiro (Erica)
    //Condições de vitória e empate:
    // * Horizontal: Cirineu
    // * Vertical: Erica
    // * Diagonal: Luiz
    //Criar um botão de start no início da partida e de restart no final (Luiz)
}

//eventListeners
document.getElementById('column0').addEventListener('click', mainFunction0)
document.getElementById('column1').addEventListener('click', mainFunction1)
document.getElementById('column2').addEventListener('click', mainFunction2)
document.getElementById('column3').addEventListener('click', mainFunction3)
document.getElementById('column4').addEventListener('click', mainFunction4)
document.getElementById('column5').addEventListener('click', mainFunction5)
document.getElementById('column6').addEventListener('click', mainFunction6)


//Função principal que contém tudo que o jogo precisa para funcionar
let contador = 1
let cont = 6   
function mainFunction0() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont)) 
        divblack.style.background = "black"
        cont = cont -1
        contador = contador + 1
    }       
    else{    
        let divpurple = window.document.getElementById('div-' + (cont)) 
        divpurple.style.background = "purple"
        cont = cont -1
        contador = contador + 1
        }
    }    
    
let cont1 = 12
function mainFunction1() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont1)) 
        divblack.style.background = "black"
        cont1 = cont1 -1
        contador = contador + 1
    }       
    else{    
        let divpurple = window.document.getElementById('div-' + (cont1)) 
        divpurple.style.background = "purple"
        cont1 = cont1 -1
        contador = contador + 1
        }
    }    
        
let cont2 = 18
function mainFunction2() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont2)) 
        divblack.style.background = "black"
        cont2 = cont2 -1
        contador = contador + 1
    }       
    else{    
            let divpurple = window.document.getElementById('div-' + (cont2)) 
            divpurple.style.background = "purple"
            cont2 = cont2 -1
            contador = contador + 1
        }
    }    
let cont3 = 24
function mainFunction3() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont3)) 
        divblack.style.background = "black"
        cont3 = cont3 -1
        contador = contador + 1
    }       
    else{    
        let divpurple = window.document.getElementById('div-' + (cont3)) 
        divpurple.style.background = "purple"
        cont3 = cont3 -1
        contador = contador + 1
        }
}    

let cont4 = 30
function mainFunction4() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont4)) 
        divblack.style.background = "black"
        cont4 = cont4 -1
        contador = contador + 1
    }       
    else{    
        let divpurple = window.document.getElementById('div-' + (cont4)) 
        divpurple.style.background = "purple"
        cont4 = cont4 -1
        contador = contador + 1
        }
}    
         
let cont5 = 36
function mainFunction5() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont5)) 
        divblack.style.background = "black"
        cont5 = cont5 -1
        contador = contador + 1
    }       
    else{    
        let divpurple = window.document.getElementById('div-' + (cont5)) 
        divpurple.style.background = "purple"
        cont5 = cont5 -1
        contador = contador + 1
        }
}        
    
let cont6 = 42
function mainFunction6() {
    if (contador % 2 == 1){
        let divblack = window.document.getElementById('div-' + (cont6)) 
        divblack.style.background = "black"
        cont6 = cont6 -1
        contador = contador + 1
    }       
    else{    
        let divpurple = window.document.getElementById('div-' + (cont6)) 
        divpurple.style.background = "purple"
        cont6 = cont6 -1
        contador = contador + 1
        }
}        
