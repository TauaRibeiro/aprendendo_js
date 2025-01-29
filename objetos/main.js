const pessoa = {
    primeiroNome: "Tauã",
    segundoNome: "Ribeiro",
    idade: 19,
    hobbies: ["Programar", "jogar", "assistir vídeos"]
} 


// const primeiroNome = pessoa.primeiroNome;
// const segundoNome = pessoa.segundoNome;
// const idade = pessoa.idade;
// const hobbies = pessoa.hobbies;

// Destructor
const { primeiroNome: Nome1, segundoNome: Nome2, idade, hobbies} = pessoa;

console.log(Nome1);
console.log(Nome2);
console.log(idade);
console.log(hobbies[2]);

pessoa.gato = "docinho";

console.log(pessoa)