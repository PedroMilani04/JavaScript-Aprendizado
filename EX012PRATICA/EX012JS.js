function carregar() {
    var mensagem = window.document.getElementById('msg')
    var a = window.document.getElementById('mens')
    var body = window.document.getElementById('corpo')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var ano = data.getFullYear()
    mensagem.innerHTML = `Agora são <b> ${horas}:${minutos}</b> de <b>${ano}</b>`
    if (horas >= 5 && horas < 12) {
        img.src = 'manha.png'
        a.innerHTML = `Bom dia!`
        body.style.backgroundColor = '#4DB4E9'
    } else if(horas >= 12 && horas <= 18) {
        img.src = 'tarde.png'
        a.innerHTML = `Boa tarde!`
        body.style.backgroundColor = '#FEB048'
    } else {
        img.src = 'noite.png'
        a.innerHTML = `Boa noite!`
        body.style.backgroundColor = '#4B356E'
    }

}