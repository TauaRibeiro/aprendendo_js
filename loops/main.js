// FOR, FOR-OF, FOR-EACH
for(let index= 0; index < 5; index++){
    console.log(index);
}

const carros = ["Ferrari", "Mercedes", "Tesla"];

// for(let i=0; i < carros.length; i++){
//     console.log(carros[i]);
// }

// for(let carro of carros){
//     console.log(carro);
// }

carros.forEach(function(carro, index){
    console.log(`${carro} -> ${index}`);
});

// WHILE

let index= 5;

while(index > 0){
    console.log(`${index--} é maior que 0!`)
}

//FOR-IN (não é muito perfomático)

const pessoa = {
    nome: "Tauã",
    idade: 19
}

for(propriedade in pessoa){
    console.log(pessoa[propriedade]);
}

//DO-WHILE
let i = 0
do{
    console.log(++i);    
}while(i < 5);