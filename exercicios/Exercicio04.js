const peso = 98.00
const altura = 1.60
const imc = peso /(altura*altura)
console.log(imc)
Math.pow(altura,2) /* biblioteca para somar, no lugar de repetir a altura*/

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc > 25 && imc <= 30){
    console.log('Acima do peso');
} else if (imc > 30 && imc <= 40 ){
    console.log('Obeso');
} else {
    console.log('Obesidade Grave')
}
