const pessoa = {
    primeiroNome: "Tauã",
    segundoNome: "Ribeiro",
    idade: 19,
    hobbies: ["Programar", "jogar", "assistir vídeos"],
    gato: {
        nomeGato: "docinho",
        idadeGato: 3
    }
} 

const TODOS = [
    {
        id: 1,
        descricao: "Estudar programacao",
        foiCompletado: false
    },
    {
        id: 2,
        descricao: "Comer",
        foiCompletado: true
    },
    {
        id: 3,
        descricao: "Dormir",
        foiCompletado: false
    }
]

// const primeiroNome = pessoa.primeiroNome;
// const segundoNome = pessoa.segundoNome;
// const idade = pessoa.idade;
// const hobbies = pessoa.hobbies;

// Destructor
const { primeiroNome: Nome1, segundoNome: Nome2, idade, hobbies, gato: {nomeGato}} = pessoa;

console.log(Nome1);
console.log(Nome2);
console.log(idade);
console.log(hobbies[2]);

//pessoa.gato = "docinho";

console.log(pessoa.gato.idadeGato);
console.log(nomeGato);

const {id, descricao, foiCompletado} = TODOS[2];

console.log(descricao);