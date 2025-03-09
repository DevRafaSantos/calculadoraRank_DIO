let resultado = saldo(100, 5)
var nivel

function saldo(numA, numB){
    let calculo = numA - numB
    if (calculo <=10){
        nivel = "Ferro"
    } else if (calculo >=11 && calculo <=20){
        nivel = "Bronze"
    } else if (calculo >=21 && calculo <=50){
        nivel = "Prata"
    } else if (calculo >=51 && calculo <=80){
        nivel = "Ouro"
    } else if (calculo >=81 && calculo <=90){
        nivel = "Diamante"
    } else if (calculo >= 91 && calculo <=100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return calculo
}

console.log("O Herói tem um saldo de " + resultado + " vitórias, e está no nível " + nivel + "!")

