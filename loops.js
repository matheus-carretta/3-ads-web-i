const laps = 10;

for (let index = 0; index <= laps; index++) {
  console.log(`Quantidade de voltas realizadas: ${index}`)  
}

console.log("A corrida acabou")

const numbers = [2, 3, 4, 5, 10, 11, 7, 8];
//////////////// 0, 1, 2  3  4   5   6  7

let soma = 0;

for (let i = 0; i < numbers.length; i++){
  soma += numbers[i];
  console.log(soma)
}

const groceryList = ['Arroz', 'Feijão', 'Sal', 'Açucar'];

for (let i = 0; i < groceryList.length; i++){
  console.log(groceryList[i])
}

const numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("ATIVIDADE ---------")
let soma2 = 0
let maiorNumero = 0
let contadorNImpar = 0;
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i])
  soma2 += numbers2[i]
  if (numbers2[i] > maiorNumero) {
    maiorNumero = numbers2[i];
  }

  if (numbers2[i] % 2 === 1) {
    contadorNImpar++
  }
}

if (soma2 / numbers2.length > 20) {
  console.log("Maior que 20")
} else {
  console.log("Menor ou igual a 20")
}

console.log(maiorNumero)

if (contadorNImpar > 0) {
  console.log("Quantidade de numeros impares: ", contadorNImpar)
} else {
  console.log("Não tem")
}