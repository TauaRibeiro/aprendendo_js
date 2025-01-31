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
    const mensagem = document.querySelector("#mensagem");

    if(valorNome === "" || valorEmail === ""){
        mensagem.textContent = "Por favor digite todos os dados necessários!";
        mensagem.classList = "erro";

        setTimeout(() =>{
            mensagem.textContent = "";
            mensagem.classList = "";
        }, 3000)

    }else{
        let valoresItens = listaItens.children;

        inputNome.value = "";
        inputEmail.value = "";

        if(valoresItens.length < 3){
            const item = document.createElement("li");
            item.classList = "box item";
            item.innerHTML= `<p>NOME: ${valorNome}</p><p>EMAIL: ${valorEmail}<p>`;

            listaItens.appendChild(item);
            return;
        }
        
        if(contagem === 3){
            contagem = 0;
        }

        valoresItens[contagem++].innerHTML = `<p>NOME: ${valorNome}</p><p>EMAIL: ${valorEmail}<p>`;
    }
});

inputNome.addEventListener("change", function (evento){
    console.log("Alterou o campo nome");
});

let valoresItens = listaItens.children;
