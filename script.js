function criarDisco() {
    for (let i = 0; i < 7; i++) {
        let column = document.getElementById(`column${i}`);
        for (let y = 0; y < 6; y++) {
            let disco = document.createElement('div');
            disco.className = 'discosColunas'
            // disco.style.display = 'none'
            column.appendChild(disco);
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
document.getElementById('column0').addEventListener('click', mainFunction)
document.getElementById('column1').addEventListener('click', mainFunction)
document.getElementById('column2').addEventListener('click', mainFunction)
document.getElementById('column3').addEventListener('click', mainFunction)
document.getElementById('column4').addEventListener('click', mainFunction)
document.getElementById('column5').addEventListener('click', mainFunction)
document.getElementById('column6').addEventListener('click', mainFunction)