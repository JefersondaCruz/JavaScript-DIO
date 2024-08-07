/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço de combustivel;
    2 - Gasto médio de combustivel do carro por KM;
    3 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const DistanciaEmKm = 100;

const LitrosConsumidos = DistanciaEmKm / kmPorLitros;
const valorGasto = LitrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

