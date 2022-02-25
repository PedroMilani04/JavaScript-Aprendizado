function parimpar(n) {
    if (n%2==0) {
        return '- Par'
    } else {
        return '- Ímpar'
    }
}

console.log(`-----------------------------------------`)
// console.log(parimpar(20)) (Pode ser feito assim)
let resultado = parimpar(20)
console.log(resultado)

function soma(n1=0, n2=0) { // Se o n1 ou n2 não forem passados, serão contados como 0.
    return `- Soma de ${n1} e ${n2} é igual a ${n1 + n2}`
}
console.log(soma(1, 9))

console.log('Recursividade:')

function fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(n=5))
console.log(`-----------------------------------------`)