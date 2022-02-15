function confirmar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascano = window.document.getElementById('numano')
    var res = window.document.getElementById('res')
    if (nascano.value.length == 0 || nascano.value > ano || nascano.value < 1890) {
        window.alert('ERRO! Informe dados válidos.')
    } else {
        var sexo = document.getElementsByName('radiosex')
        var idade = ano - Number(nascano.value)
        var gen = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
                gen = 'Homem'
                if (idade > 0 && idade <= 12) {
                    img.setAttribute('src', 'menino.png')
                } else if (idade > 12 && idade <= 18) {
                    img.setAttribute('src', 'jovemM.png')
                } else if (idade > 18 && idade < 60) {
                    img.setAttribute('src', 'homem.png')
                } else {
                    img.setAttribute('src', 'idoso.png')
                }
            } else if (sexo[1].checked) {
                gen = 'Mulher'
                if (idade > 0 && idade <= 12) {
                    img.setAttribute('src', 'menina.png')
                } else if (idade > 12 && idade <= 18) {
                    img.setAttribute('src', 'jovemF.png')
                } else if (idade > 18 && idade < 60) {
                    img.setAttribute('src', 'mulher.png')
                } else {
                    img.setAttribute('src', 'idosa.png')
                }
            }
            res.innerHTML = `De acordo com os dados, você é um(a) <b>${gen} de ${idade} anos</b>`   
            res.appendChild(img)
        }
    }
