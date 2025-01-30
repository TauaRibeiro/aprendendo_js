const botaoEnvio = document.querySelector("#botao-enviar");
const formulario = document.querySelector("#formulario-principal")
const inputNome = document.querySelector("#input-nome");
const inputEmail = document.querySelector("#input-email");
const listaItens = document.querySelector(".itens");
let contagem = 0;

botaoEnvio.addEventListener('click', function(evento){
    evento.preventDefault();
    
    const valorNome = inputNome.value;
    const valorEmail = inputEmail.value;

    if(valorNome === "" || valorEmail === ""){
        alert("Por favor digite todos os dados necessários!");
    }else{
        if(contagem === 3){
            contagem = 0;
        }
        let valoresItens = listaItens.children;

        valoresItens[contagem++].textContent = `NOME: ${valorNome} EMAIL: ${valorEmail}`;
    }
});

inputNome.addEventListener("change", function (evento){
    console.log("Alterou");
});