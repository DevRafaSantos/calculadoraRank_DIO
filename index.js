/*# Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

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

