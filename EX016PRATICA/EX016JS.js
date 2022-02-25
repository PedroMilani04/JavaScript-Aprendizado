function calcular() {
    let n = window.document.getElementById('n')
        if (n.value.length == 0) {
            window.alert('Digite um número valido!')
        } else {
            n1 = Number(n.value)
             document.getElementById('val1').innerHTML = `1 x ${n1} = <strong>${n1*1}</strong>`
             document.getElementById('val2').innerHTML = `2 x ${n1} = ${n1*2}`
             document.getElementById('val3').innerHTML = `3 x ${n1} = ${n1*3}`
             document.getElementById('val4').innerHTML = `4 x ${n1} = ${n1*4}`
             document.getElementById('val5').innerHTML = `5 x ${n1} = ${n1*5}`
             document.getElementById('val6').innerHTML = `6 x ${n1} = ${n1*6}`
             document.getElementById('val7').innerHTML = `7 x ${n1} = ${n1*7}`
             document.getElementById('val8').innerHTML = `8 x ${n1} = ${n1*8}`
             document.getElementById('val9').innerHTML = `9 x ${n1} = ${n1*9}`
             document.getElementById('val10').innerHTML = `10 x ${n1} = ${n1*10}`
        }
}
