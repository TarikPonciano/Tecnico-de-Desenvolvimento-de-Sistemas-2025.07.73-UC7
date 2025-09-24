// Criar um formulário simples de cadastro de pessoa. Esse formulário deve conter nome, idade e altura. Ao apertar o botão de cadastrar, essas informações devem ser armazenadas no localstorage. Na página html, exiba as informações do usuário armazenadas no localStorage.

// Agora use o formulário para cadastrar uma lista de pessoas. Abaixo do formulário, exiba a lista de todas as pessoas que já foram cadastradas no localStorage.


function cadastrarPessoa(e) {
    const nome = document.getElementById("campo-nome").value
    const idade = parseInt(document.getElementById("campo-idade").value)
    const altura = parseFloat(document.getElementById("campo-altura").value)

    const pessoa = { "nome": nome, "idade": idade, "altura": altura }

    const pessoas = JSON.parse(localStorage.getItem("pessoas"))

    pessoas.push(pessoa)

    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    // localStorage.setItem("nome", nome)
    // localStorage.setItem("idade", idade)
    // localStorage.setItem("altura", altura)
}

// Adaptar a função para carregar a lista de pessoas do LocalStorage e exibir TODAS no navegador atráves do HTML.
function carregarDados() {
    const infoNome = document.getElementById("info-nome")
    const infoIdade = document.getElementById("info-idade")
    const infoAltura = document.getElementById("info-altura")

    infoNome.innerText = `Nome: ${localStorage.getItem("nome")}`
    infoIdade.innerText = `Idade: ${localStorage.getItem("idade")}`
    infoAltura.innerText = `Altura: ${localStorage.getItem("altura")}`
}

carregarDados()


// const lista = ["Banana", "Maçã", "Pêra"]

// const dicionario = {
//     "nome": "Michael",
//     "idade": 52,
//     "altura": 1.65,
//     "frutasPreferidas": lista
// }

// for (let contador = 0; contador < lista.length; contador++) {
//     alert(`${contador} - ${lista[contador]}`)
// }

// for (let fruta of lista) {
//     alert(fruta)
// }

// for (let index in dicionario) {
//     frase += `${index}: ${dicionario[index]}\n`
// }


// lista.forEach(fruta => {
//     const corpoHtml = document.querySelector("body")
//     const elementoHtml = document.createElement("h3")
//     elementoHtml.innerText = fruta

//     corpoHtml.appendChild(elementoHtml)
// })

// const listaHtml = lista.map(fruta => {
//     const elementoHtml = document.createElement("h3")
//     elementoHtml.innerText = fruta.toUpperCase()
//     return elementoHtml
// })

// listaHtml.forEach(elemento => {
//     const corpoHtml = document.querySelector("body")
//     corpoHtml.appendChild(elemento)
// })

