function soma(numero1, numero2){
    return numero1 + numero2;
}


function subtrair(numero1, numero2){
    console.log(numero1-numero2);
}

function multiplicar(numero, multiplicador= 1){
    return numero * multiplicador;
}

const somaArrow = (a, b= 10) => a+b;
/*É o mesmo que o item acima
const somaArrow = (a, b= 10) => {return a+b};*/

let resultado = soma(2, 5)
console.log(resultado)

subtrair(2, 1)

resultado = multiplicar(5)
console.log(resultado)

resultado = somaArrow(5);
console.log(resultado)