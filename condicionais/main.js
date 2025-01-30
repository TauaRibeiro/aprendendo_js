const soma = 1 + 1;
const soma2 = 2 + 2;

if(soma == '2'){
    console.log("Soma é igual a 2");
}else if(soma == '3'){
    console.log("Soma é igual a 3");
}else{
    console.log("Não é igual a 2 e nem 3");
}

if(soma === '2'){
    console.log("Soma é igual a 2");
}else if(soma === '3'){
    console.log("Soma é igual a 3");
}else{
    console.log("Não é igual a 2 e nem 3");
}

/*
console.log(numero);
== -> Compara o valor, ignorando o tipo do valor
=== -> Compara o valor levando em contato o tipo do valor
*/

if(soma2 === 4 && soma === 6){
    console.log("Soma2 é igual a 4 e soma é igual a 6");
}

if(soma2 === 4 || soma === 6){
    console.log("Soma2 é igual a 4 ou soma é igual a 6");
}

let numero = (soma === 2) ? 2:4;

const carro = "Land Hover"

switch(carro){
    case "Mercedes":
        console.log("É um mercedes");
        break;
    case "Ferrari":
        console.log("É uma ferrari");
        break;
    case "Tesla":
        console.log("É um tesla");
        break;
    default:
        console.log("Não sei que carro é esse...");
        break;
}