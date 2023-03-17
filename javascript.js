var bracos = document.getElementById("bracos");
var blindagem = document.getElementById("blindagem");
var nucleos = document.getElementById("nucleos");
var pernas = document.getElementById("pernas");

var botaoAumentaBracos = document.getElementById("aumenta-bracos");
botaoAumentaBracos.addEventListener('click', function () {
    if (parseInt(bracos.value) < 10) {
        if (bracos.value == 9) {
            bracos.value = ++bracos.value
        } else {
            bracos.value = `0${++bracos.value}`
        }
    }
})

var botaoDiminuiBracos = document.getElementById("diminui-bracos")
botaoDiminuiBracos.addEventListener('click', function () {
    if (parseInt(bracos.value) > 0) {
        bracos.value = `0${--bracos.value}`
    }
})

var botaoAumentaBlindagem = document.getElementById("aumenta-blindagem");
botaoAumentaBlindagem.addEventListener('click', function () {
    if (parseInt(blindagem.value) < 10) {
        if (blindagem.value == 9) {
            blindagem.value = ++blindagem.value
        } else {
            blindagem.value = `0${++blindagem.value}`
        }
    }
})

var botaoDiminuiBlindagem = document.getElementById("diminui-blindagem")
botaoDiminuiBlindagem.addEventListener('click', function () {
    if (parseInt(blindagem.value) > 0) {
        blindagem.value = `0${--blindagem.value}`
    }
})

var botaoAumentaNucleos = document.getElementById("aumenta-nucleos");
botaoAumentaNucleos.addEventListener('click', function () {
    if (parseInt(blindagem.value) < 10) {
        if (nucleos.value == 9) {
            nucleos.value = ++nucleos.value
        } else {
            nucleos.value = `0${++nucleos.value}`
        }
    }
})
var botaoDiminuiNucleos = document.getElementById("diminui-nucleos")
botaoDiminuiNucleos.addEventListener('click', function () {
    if (parseInt(nucleos.value) > 0) {
        nucleos.value = `0${--nucleos.value}`
    }
})

var botaoAumentaPernas = document.getElementById("aumenta-pernas");
botaoAumentaPernas.addEventListener('click', function () {
    if (parseInt(pernas.value) < 10) {
        if (pernas.value == 9) {
            pernas.value = ++pernas.value
        } else {
            pernas.value = `0${++pernas.value}`
        }
    }
})
var botaoDiminuiPernas = document.getElementById("diminui-pernas")
botaoDiminuiPernas.addEventListener('click', function () {
    if (parseInt(pernas.value) > 0) {
        pernas.value = `0${--pernas.value}`
    }
})

        
var listRobo = ["img/robotron-azul.png", "img/robotron-vermelho.png", "img/robotron-branco.png", "img/robotron-preto.png", "img/robotron-rosa.png", "img/robotron-amarelo.png"];

var cont = 0;

function trocaImgIr(){
    cont = cont+1;            

    if(cont>=5){
        cont = 5;
    }

    document.getElementById("imgRobo").src= listRobo[cont];  
}

function trocaImgVolta(){
    cont = cont-1;            

    if(cont < 1){
        cont = 0;
    }

    document.getElementById("imgRobo").src= listRobo[cont];  
}