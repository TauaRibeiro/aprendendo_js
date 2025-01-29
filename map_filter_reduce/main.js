const numeros = [1,2,3,4,5];

const numerosVezes2 = numeros.map(function(numero){return numero*2;});

console.log(numerosVezes2);

const idades = [8, 13, 27, 30, 22, 40];

const idadesPares = idades.filter(function(idade){return idade%2 === 0;});

console.log(idadesPares);

//reduce(função(item, acumulador){...}, valor inicial do acumulador)
const somaIdades = idades.reduce(function(idade, acumulador){return acumulador + idade}, 0);

console.log(somaIdades);
