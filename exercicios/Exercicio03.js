let nota1 = 1;
let nota2 = 1;
let nota3 = 1;

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7){
    console.log('parabens, sua média é', media, 'Aprovado.');
} else if (media >= 5 && media<=7) {
    console.log('você está de recuperação sua média é', media,'.');
} else {
    console.log('você reprovou! sua média é', media,'.');
}