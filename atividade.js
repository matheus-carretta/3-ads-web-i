// Não altere o nome das funções e nem dos parâmetros

// 1- Utilize if...else para escrever uma função que recebe três números  e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
function hasOddNumber(x, y, z) {}

// Utilize o objeto a baixo nas atividades 2, 3 e 4.
const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

// 2 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

// 3- Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
// “Julia tem {quantidade} livros favoritos.”
// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:
// “Julia tem 1 livro favorito.”

// 4 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
// {
//   title: 'Harry Potter e o Prisioneiro de Azkaban',
//   author: 'JK Rowling',
//   publisher: 'Rocco',
// }

// 5 - Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
// const basket =  ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'];
// deverá retornar:
// { 
//   Melancia: 3,
//   Abacate: 1,
//   Uva: 1 
// }


// 6 - Utilize if...else para escrever uma função que recebe três parâmetros com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.
function isTriangle(a, b, c) {}

// 7 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie implemente a função que imprima na tela o fatorial do número passado como parâmetro

function factorial(x) {}
