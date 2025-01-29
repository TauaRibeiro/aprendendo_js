// STRINGS
const primeiroNome = "Tauã";
const segundoNome = "Ribeiro";

const nomes = "Tauã, João, Júlia";

console.log("O meu nome é " + primeiroNome + ' ' + segundoNome);
//Template strings
console.log(`O meu nome é ${primeiroNome.toUpperCase()} ${segundoNome.toLowerCase()}`);

console.log(nomes.split(','));

// NUMBER
const num = 5;

console.log(num)
console.log(num.toString())

console.log(typeof num.toString());
console.log(typeof num)

// BOOLENAOS

console.log(2 === 2)
console.log(2 === 3)

// Null & undefined

const x = null //A variável é vazia

const y = undefined //A variável não é definida