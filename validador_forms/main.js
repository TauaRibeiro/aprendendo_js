function validarEmail(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    return padrao.test(email);
}

const botao = document.getElementById('btnEnviar');

botao.addEventListener('click', (evento) => {
    const email = document.form1.email.value;
    const nome = document.form1.nome.value;
    const mensagem = document.form1.mensagem.value;
    const campos_erro = document.getElementsByClassName("erro");
    const mensagens_erro = ["", "", ""];
    let erro = false;

    if(nome.length < 3){
        mensagens_erro[0] = "Nome inválido";
        erro = true;
    }
    
    if(!validarEmail(email)){
        mensagens_erro[1] = "Endereço de email inválido";
        erro = true;
    }
    
    if(mensagem.length < 10){
        mensagens_erro[2] = "A mensagem deve ter no mínimo 10 caracteres";
        erro = true;
    }

    for(let i = 0; i < 3; i++){
        campos_erro[i].textContent = mensagens_erro[i]; 
    }
    
    if(erro) {
        evento.preventDefault();
    }
    

});
