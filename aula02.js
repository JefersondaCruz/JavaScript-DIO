

const camisetaeAzul = true;
const camisetaeazul = false;




const numero = 11;
const NumeroPar = (numero % 2) === 0; /* = atribuição, == ou === igualdade*/ 

if (numero == 0 ){
    console.log('O numero é invalido')
} else if (NumeroPar){
    console.log('par')
}   else{
    console.log('Impar')
}

/* if (!NumeroPar){
    console.log('Impar')  /* !negação do if */

