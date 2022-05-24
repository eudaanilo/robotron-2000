var bracos = document.getElementById('bracos');

var botaoAumentaBracos = document.getElementById('aumenta-bracos');
botaoAumentaBracos.addEventListener('click', function () {
    if (parseInt(bracos.value) < 10) {
        if (bracos.value == 9) {
            bracos.value = ++bracos.value
        } else {
            bracos.value = `0${++bracos.value}`
        }
    }
})

var botaoDiminuiBracos = document.getElementById('diminui-bracos')
botaoDiminuiBracos.addEventListener('click', function () {
    if (parseInt(bracos.value) > 0) {
        bracos.value = `0${--bracos.value}`
    }
})

var botaoAumentaBlindagem = document.getElementById('aumenta-blindagem');
botaoAumentaBlindagem.addEventListener('click', function () {
    if (parseInt(blindagem.value) < 10) {
        if (blindagem.value == 9) {
            blindagem.value = ++blindagem.value
        } else {
            blindagem.value = `0${++blindagem.value}`
        }
    }
})

var botaoDiminuiBlindagem = document.getElementById('diminui-blindagem')
botaoDiminuiBlindagem.addEventListener('click', function () {
    if (parseInt(blindagem.value) > 0) {
        blindagem.value = `0${--blindagem.value}`
    }
})
