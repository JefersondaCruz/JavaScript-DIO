const PrecoEtanol = 4.08;
const PrecoGasolina = 7.26;
const distanciaEmKM = 200;
const KmPorLitros = 10;
let isGasolina = false;
let isEtanol = true;

    if(isGasolina === true){
        const LitrosConsumidos = distanciaEmKM / KmPorLitros
        const valorGasto = LitrosConsumidos * PrecoGasolina
        console.log(valorGasto.toFixed(2))
    } else {
        const LitrosConsumidos = distanciaEmKM / KmPorLitros
        const valorGasto = LitrosConsumidos * PrecoEtanol
        console.log(valorGasto.toFixed(2))
    }
