function giveGreting() {
  return "Olá, seja bem vindo"
}

function giveGoodBy() {
  console.log("Xau, volte sempre")
}

const x = giveGreting()
const y = giveGoodBy()


console.log(x)
console.log(y)
const array = [];

function soma(n1, n2) {
  console.log(n1)
  console.log(n2)

  if (n1 && n2) {
    return n1 + n2
  }
  console.log('oi')
  return "Faltou passar um dos parâmetros"
}

// NaN = Not a number, não é um número
console.log(soma(3, 5))

// -----------------

const customers = ['Ronaldo', 'Pedro', 'João'];

function greetCustomers(customers) {
  return `Sejam bem vindos, ${customers}`
}

function teste(func) {
  console.log(func(2, 1))
}
console.log(greetCustomers(customers))

teste(soma)

function subtracao(n1, n2) {
  return n1 -n2
}

const subtracao2 = (n1, n2) => n1 - n2

const funcTeste = parametro => parametro +2

console.log(subtracao(10, 5))
console.log(subtracao2(10, 5))
console.log(funcTeste(10))

const car = {
  brand: "Fiat",
  model: '500',
  color: 'White',
  weight: 1061,
  'prop com espaco': 'teste',
  portas: {
    quantidade: 4,
  }
}

const prop = 'color'

console.log(car.propriedade)
console.log(car['brand'])
console.log(car['prop com espaco'])
console.log(car.portas.quantidade)

const residents = [
  {
    name: 'Luíza',
    lastName: 'Guimarães',
    floor: 10,
    apartment: 1005,
  },
  {
    name: 'William',
    lastName: 'Albuquerque',
    floor: 5,
    apartment: 502,
  },
];

console.log(residents[0].floor)

for(let i = 0; i < residents.length; i++) {
  console.log(residents[i].name)
}

const pessoa = {
  name: 'Matheus',
}

pessoa.lastName = 'Carretta';

console.log(pessoa)

console.log(Object.entries(pessoa))
