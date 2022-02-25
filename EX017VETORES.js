let num = ['a', 'b', 'c']
console.log(`Valor do Array: ${num[0]}`) //[valor] para mostrar o valor requerido

num[3] = 'd' // O elemento 3 não existe, então seria criado para acrescentar o valor 3, ficando: num[a, b, c, d]
console.log(`Valor do Array: ${num[3]}`)

num.push('e') /* Ao contrario do anterior, o .push cria automaticamente o proximo elemento e atribui o valor a ele, ficando: 
              num[a, b, c, d, e] */  
              console.log(`Valor do Array: ${num[4]}`)

num.length // Mostra o comprimento do Vetor, sendo nesse 5, pois num[a, b, c, d, e] tem os elementos num[0, 1, 2, 3, 4]
console.log(`O comprimento do vetor é: ${num.length} `)

num.sort() // Ordena os valores em ordem CRESCENTE
console.log(`Num em ordem crescente é: ${num.sort()}`)

/* 
for(let pos=0; pos<num.length; pos++) {
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`)
} 
*/

for(let pos in num) { // Para cada posição (pos) em NUM, mostrar num[pos]
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`)
}

num.indexOf('c') // Mostra a posição do valor determinado
console.log(`Index de 'e' = ${num.indexOf('c')}`)