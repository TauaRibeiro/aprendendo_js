const names = ["Tauã", "João", "Julia", 10, false];

const nome = names[0];

console.log(nome);

names.push("Pedro")

console.log(names);

names.unshift(20);

console.log(names);

names.pop();

console.log(names);

names.shift(names);

console.log(names);

names[2] = "Gustavo";

console.log(names);

console.log(`A posição de \'Tauã\' é ${names.indexOf("Tauã")+1}`);

console.log(`O tamanho da lista é ${names.length}`);

const eUmArray = Array.isArray(names);

console.log(`É um array? -> ${eUmArray}`);