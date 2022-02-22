function conta() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let espaco = document.getElementById('espaco')
    let b = document.getElementById('b')
    if (espaco.value == 0) {
        window.alert('Insira um espaço válido.')
    } else if(inicio.value == '') {
        b.innerHTML = `Insira um inicio válido`
    } else if (fim.value == '') {
        b.innerHTML = `Insira um final válido.`
    } else if (inicio.value == fim.value) {
        b.innerHTML = `ta tirano ne`
    } else {
        b.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let e = Number(espaco.value)

        for (let c = i; c <= f; c += e) {
            b.innerHTML += `${c} \u{1F449} `
        }
        b.innerHTML += ` \u{1F3C1}`
    }
}