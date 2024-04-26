var nome = "Matheus";

let idade = 28;

const x = false;

const sobrenome = "Carretta";

console.log(typeof nome, typeof idade, typeof x)

let num1 = 20;
const num2 = 5;

console.log("Adição: ", num1 + num2)
console.log("Subtração: ", num1 - num2)
console.log("Multiplicação: ", num1 * num2)
console.log("Divisão: ", num1 / num2)
console.log("Módulo: ", num1 % num2)
console.log("Incremento: ", num1 += 1)
console.log("Decremento: ", num1 -= num2)
console.log("Igualdade/Comparação: ", num1 == '16')
console.log("Extritamente igual: ", num1 === '16')
console.log("Desigualdade: ", num1 != '16')
console.log("Extritamente desigual: ", num1 !== '16')
console.log("Maior: ", num1 > num2)
console.log("Maior ou igual: ", num1 >= num2)
console.log("Menor: ", num1 < num2)
console.log("Menor ou igual: ", num1 <= 16)
console.log("E: ", 10 == 10 &&  1 > 2)
console.log("Ou: ", 10 == 10 ||  1 > 2)
console.log("Negação: ", !(10 == 10 ||  1 > 2))

console.log("Hello" + " " + nome + " " + "!!!!!") // concatenação
console.log(`Hello ${nome} !!!! ${num1 + num2}`) // template literals

let shoppingList = ["Coquinha", "Picanha", "Arroz", "Breja"];
console.log(shoppingList)
const item = shoppingList[2]
console.log(item)

shoppingList[3] = "Carvão"
console.log(shoppingList)
shoppingList.push("Sal")
shoppingList.shift()
console.log(shoppingList.length)
shoppingList.shift()
console.log(shoppingList.length > 0)