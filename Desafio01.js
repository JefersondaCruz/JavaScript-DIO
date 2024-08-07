let preço_combustivel = 6.19;
let gasto_carro_por_km = 14;
let ditancia_em_km = 860;

console.log(`o preço do combustivel informado é ${'R$' + preço_combustivel + ' Reais'}, o seu carro gasta ${gasto_carro_por_km + ' litros por km'}, e a distancia ate o seu destino é ${ditancia_em_km + 'km'}`);
let custo_total = ditancia_em_km / gasto_carro_por_km * preço_combustivel;
console.log(`Sendo assim voce vai gastar R$${ custo_total.toFixed(2)}`)
