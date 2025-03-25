/* 
Situação 1
665 + 8 / 2 x 9 + 7

prioridade = [[8, /, 2, x, 9]]
restate = [665, +, null, +, 7]

formula_tratada = [ 665, +, 36, +, 7 ]
------------------------------------------------------
Situação 2
8x7 + 5 + 8/2

prioridade = [[8, x, 7], [8, /, 2]]
restante = [null, +, 5, +, null]

formula_tratada = [56, +, 5, +, 4]
--------------------------------------------------
Situação 3
8 x 7

prioridade = [8, x, 7]
restante = []

formula_tratada = [8, x, 7]

Funções a serem criadas

função que irá calcular o resultado;

*/

function resultado(){
    const formula = document.getElementById("areaResultado").value;
    
    if(formula.length == 0 || eSimbolo(formula[formula.length-1] || formula[i])){
        return
    }

    let indice = 0;
    let restante = [];
    let prioridade = [];
    let bufferPrioridade = [];
    let num = "";
    let ePrioridade = false;

    for(let i = 0; i < formula.length; i++){
        if(eSimbolo(formula[i])) {
            if(formula[i] == '/' || formula[i] == 'x'){
                ePrioridade = true;
                bufferPrioridade.push(parseFloat(num));
                bufferPrioridade.push(formula[i]);
                num = "";
                continue;
            }
            
            if(ePrioridade) {
                bufferPrioridade.push(parseFloat(num));
                prioridade[indice++] = bufferPrioridade;
                bufferPrioridade = [];
                restante.push(null);
                restante.push(formula[i]);
                num = "";
                ePrioridade = false;
                continue;
            }

            restante.push(parseFloat(num));
            restante.push(formula[i]);
            num = "";
            continue
        }       
        
        num += formula[i];
    }

    if(ePrioridade){
        bufferPrioridade.push(parseFloat(num));
        prioridade[indice] = bufferPrioridade;
        restante.push(null);
    }else{
        restante.push(parseFloat(num));
    }

    indice = 0;

    let formula_final = restante.map((componente) => {
        if(componente == null) {
            return calcular(prioridade[indice++]);
        }

        return componente;
    });

    document.getElementById("areaResultado").value = (calcular(formula_final) == Infinity) ? "Não é possível fazer divisão por zero" : calcular(formula_final);
    
}

function calcular(formula){
    let resultado = formula[0];
    let simbolo;

    for(let i = 1; i < formula.length; i++) {
        if(eSimbolo(formula[i])){
            simbolo = formula[i];
            continue;
        }

        switch(simbolo){
            case '+':
                resultado += formula[i];
            break
            case '-':
                resultado -= formula[i];
            break
            case 'x':
                resultado *= formula[i];
            break
            case '/':
                resultado /= formula[i];
            break
        }

    }

    return resultado;
}


function botaoNumero(num){
    document.getElementById("areaResultado").value += num;
}

function botaoOperacao(simbolo){
    const formula = document.getElementById("areaResultado").value;

    if(formula && !eSimbolo(formula[formula.length-1])){
        document.getElementById("areaResultado").value += simbolo;
    }
}

function eSimbolo(simbolo){
    for(let i = 0; i < 4; i++){
        if(simbolo === "+-/x"[i]){
            return true
        }
    }

    return false;
}

function limpar(){
    document.getElementById("areaResultado").value = "";
}

function teste(){
    
}