
function validarFormulario () {

    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textoo").value;
    var nome = document.getElementById("nome").value;
    var cidade = document.getElementById("city").value;

    document.getElementById("respostanome").innerHTML ="SEU NOME:" +" "+ nome;
    document.getElementById("respostacidade").innerHTML ="SEU CIDADE:" +" "+ cidade;
    document.getElementById("resposta").innerHTML = "SEU EMAIL:" + " " + email;
    document.getElementById("respostaTwo").innerHTML ="SUA MENSAGEM:" +" "+ textarea;
   
}   

function validarFor () {
    var resp = true, mensagem = ""
    if(nome.value == ""){
        mensagem += "\n O campo Nome está vazio!"
        resp = false;
    }
    if(email.value == ""){
        mensagem += "\n O E-mail está vazio!"
        resp = false;
    }
    
    else {
        mensagem += "\nMensagem enviada por email"
        window.location.href="contatos.html"
    }
    alert(mensagem)
    return resp
};