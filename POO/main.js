class Pessoa {
    constructor(primeiroNome, segundoNome, idade){
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.idade = idade;
    }

    getNomeCompleto(){
        return `${this.primeiroNome} ${this.segundoNome}`
    }

    static andar(){
        console.log("Andando...");
    }
}

const novaPessoa = new Pessoa("Tauã", "Ribeiro", 19);

console.log(novaPessoa);

console.log(novaPessoa.getNomeCompleto());

Pessoa.andar();

class Animal{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`${this.nome} fez um barulho`);
    }
}

class Gato extends Animal{
    constructor(nome){
        super(nome);
    }

    falar(){
        console.log("Eu odeio segunda-feiras");
    }
}

const novoAnimal = new Animal("Docinho");
const novoGato = new Gato("Garfield");

novoAnimal.falar();
novoGato.falar();