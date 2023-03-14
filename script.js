//? Função de cor

function mudaCor() {
    let cor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + cor

    let align = (Math.floor(Math.random() * 3))

    switch (align) {
        case 0:
            document.body.style.textAlign = 'center'
            break
        case 1:
            document.body.style.textAlign = 'left'
            break
        case 2:
            document.body.style.textAlign = 'right'
            break
    }

}

function reset(){
    document.body.style.textAlign = 'center'
    document.body.style.backgroundColor = 'white'
}

//? Funções contador

function add() {
    let num = parseInt(document.getElementById('num').innerHTML)
    document.getElementById('num').innerHTML = num + 1
    num = parseInt(document.getElementById('num').innerHTML)

    if (num > 0) {
        document.getElementById('num').style.color = 'green'
    } else if (num < 0) {
        document.getElementById('num').style.color = 'red'
    } else if (num = 0) {
        document.getElementById('num').style.color = 'yellow'
    }
}

function sub() {
    let num = parseInt(document.getElementById('num').innerHTML)
    document.getElementById('num').innerHTML = num - 1
    num = parseInt(document.getElementById('num').innerHTML)


    if (num > 0) {
        document.getElementById('num').style.color = 'green'
    } else if (num < 0) {
        document.getElementById('num').style.color = 'red'
    } else if (num == 0) {
        document.getElementById('num').style.color = 'yellow'
    }
    console.log
}

//? funções PPT

function pedra() {
    let ia = Math.floor(Math.random() * 3)

    switch (ia) {
        case 0:
            document.getElementById('ia').innerHTML = 'papel'
            document.getElementById('player').innerHTML = 'pedra'
            document.getElementById('resultado').innerHTML = 'Você perdeu'
            break
        case 1:
            document.getElementById('ia').innerHTML = 'pedra'
            document.getElementById('player').innerHTML = 'pedra'
            document.getElementById('resultado').innerHTML = 'Empate'
            break
        case 2:
            document.getElementById('ia').innerHTML = 'Tesoura'
            document.getElementById('player').innerHTML = 'pedra'
            document.getElementById('resultado').innerHTML = 'Você venceu'
            break
    }
}

function papel() {
    let ia = Math.floor(Math.random() * 3)

    switch (ia) {
        case 0:
            document.getElementById('ia').innerHTML = 'Papel'
            document.getElementById('player').innerHTML = 'Papel'
            document.getElementById('resultado').innerHTML = 'Empate'
            break
        case 1:
            document.getElementById('ia').innerHTML = 'Pedra'
            document.getElementById('player').innerHTML = 'Papel'
            document.getElementById('resultado').innerHTML = 'Você venceu'
            break
        case 2:
            document.getElementById('ia').innerHTML = 'Tesoura'
            document.getElementById('player').innerHTML = 'Papel'
            document.getElementById('resultado').innerHTML = 'Você perdeu'
            break
    }
}

function tesoura() {
    let ia = Math.floor(Math.random() * 3)

    switch (ia) {
        case 0:
            document.getElementById('ia').innerHTML = 'Papel'
            document.getElementById('player').innerHTML = 'Tesoura'
            document.getElementById('resultado').innerHTML = 'Você venceu'
            break
        case 1:
            document.getElementById('ia').innerHTML = 'Pedra'
            document.getElementById('player').innerHTML = 'Tesoura'
            document.getElementById('resultado').innerHTML = 'Você perdeu'
            break
        case 2:
            document.getElementById('ia').innerHTML = 'Tesoura'
            document.getElementById('player').innerHTML = 'Tesoura'
            document.getElementById('resultado').innerHTML = 'Empate'
            break
    }
}

//! botões de carrosel

function sobre() {
    document.getElementById('sobre').style.display = 'block'
    document.getElementById('text').style.display = 'none'
    document.getElementById('Counter').style.display = 'none'
    document.getElementById('ppt').style.display = 'none'
}

function text() {
    document.getElementById('sobre').style.display = 'none'
    document.getElementById('text').style.display = 'block'
    document.getElementById('Counter').style.display = 'none'
    document.getElementById('ppt').style.display = 'none'
}

function counter() {
    document.getElementById('sobre').style.display = 'none'
    document.getElementById('text').style.display = 'none'
    document.getElementById('Counter').style.display = 'block'
    document.getElementById('ppt').style.display = 'none'
}

function ppt() {
    document.getElementById('sobre').style.display = 'none'
    document.getElementById('text').style.display = 'none'
    document.getElementById('Counter').style.display = 'none'
    document.getElementById('ppt').style.display = 'block'
}