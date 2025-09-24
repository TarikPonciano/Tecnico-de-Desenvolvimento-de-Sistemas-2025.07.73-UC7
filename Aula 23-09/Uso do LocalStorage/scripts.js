// Criar um formulário simples de cadastro de pessoa. Esse formulário deve conter nome, idade e altura. Ao apertar o botão de cadastrar, essas informações devem ser armazenadas no localstorage. Na página html, exiba as informações do usuário armazenadas no localStorage.

// Agora use o formulário para cadastrar uma lista de pessoas. Abaixo do formulário, exiba a lista de todas as pessoas que já foram cadastradas no localStorage.


function cadastrarPessoa(e) {
    const nome = document.getElementById("campo-nome").value
    const idade = parseInt(document.getElementById("campo-idade").value)
    const altura = parseFloat(document.getElementById("campo-altura").value)

    const pessoa = { "nome": nome, "idade": idade, "altura": altura }

    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || []

    pessoas.push(pessoa)

    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    // localStorage.setItem("nome", nome)
    // localStorage.setItem("idade", idade)
    // localStorage.setItem("altura", altura)
}

// Adaptar a função para carregar a lista de pessoas do LocalStorage e exibir TODAS no navegador atráves do HTML.
function carregarDados() {
    // const infoNome = document.getElementById("info-nome")
    // const infoIdade = document.getElementById("info-idade")
    // const infoAltura = document.getElementById("info-altura")

    // infoNome.innerText = `Nome: ${localStorage.getItem("nome")}`
    // infoIdade.innerText = `Idade: ${localStorage.getItem("idade")}`
    // infoAltura.innerText = `Altura: ${localStorage.getItem("altura")}`
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || []
    const corpoTabelaHtml = document.querySelector("#tabela-pessoas tbody")

    pessoas.forEach(pessoa => {
        const botao = document.createElement("button")
        botao.addEventListener("click", () => {
            if (pessoa.idade >= 18) {
                alert("Essa pessoa é maior de idade!")
            } else {
                alert("Essa pessoa é menor de idade!")
            }
        })
        botao.innerText = "Verificar Idade"

        const linha = document.createElement("tr")
        linha.innerHTML = `
        <td>${pessoa.nome}</td>
        <td>${pessoa.idade}</td>
        <td>${pessoa.altura}</td>
        `

        linha.appendChild(document.createElement("td").appendChild(botao))

        corpoTabelaHtml.appendChild(linha)

    });


}

carregarDados()


// Propor um cenário de cadastro de alguma coisa(Livro, Pessoa, Funcionário). O formulário de cadastro deve possuir pelo menos 5 campos distintos. Crie um sistema que cadastrar esses itens no LocalStorage e depois exiba esses itens em uma tabela contendo todas as informações de cada item. Além disso, crie um botão para cada item que permite visualizar suas informações em um alert. Crie um botão de remover para cada item que remove aquele item do LocalStorage. Implementar alguma categoria de filtragem (Ex: cargo de funcionário, departamento).

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

