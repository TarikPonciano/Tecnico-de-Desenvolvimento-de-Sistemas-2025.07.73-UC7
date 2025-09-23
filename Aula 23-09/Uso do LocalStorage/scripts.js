// Criar um formulário simples de cadastro de pessoa. Esse formulário deve conter nome, idade e altura. Ao apertar o botão de cadastrar, essas informações devem ser armazenadas no localstorage. Na página html, exiba as informações do usuário armazenadas no localStorage.

//Agora use o formulário para cadastrar uma lista de pessoas. Abaixo do formulário, exiba a lista de todas as pessoas que já foram cadastradas no localStorage.

function cadastrarPessoa(e) {
    const nome = document.getElementById("campo-nome").value
    const idade = parseInt(document.getElementById("campo-idade").value)
    const altura = parseFloat(document.getElementById("campo-altura").value)

    localStorage.setItem("nome", nome)
    localStorage.setItem("idade", idade)
    localStorage.setItem("altura", altura)
}

function carregarDados() {
    const infoNome = document.getElementById("info-nome")
    const infoIdade = document.getElementById("info-idade")
    const infoAltura = document.getElementById("info-altura")

    infoNome.innerText = `Nome: ${localStorage.getItem("nome")}`
    infoIdade.innerText = `Idade: ${localStorage.getItem("idade")}`
    infoAltura.innerText = `Altura: ${localStorage.getItem("altura")}`
}

carregarDados()