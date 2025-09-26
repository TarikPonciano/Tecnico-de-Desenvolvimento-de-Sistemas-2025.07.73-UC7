function cadastrarFuncionario(e) {
    const id = document.getElementById("campo-id").value
    const nome = document.getElementById("campo-nome").value
    const salario = document.getElementById("campo-salario").value
    const cargo = document.getElementById("campo-cargo").value
    const departamento = document.getElementById("campo-departamento").value

    const novoFuncionario = {
        "id": id,
        "nome": nome,
        "salario": salario,
        "cargo": cargo,
        "departamento": departamento
    }

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []

    const funcionarioJaExiste = funcionarios.find((f) => f.id == novoFuncionario.id)

    if (funcionarioJaExiste) {
        alert("Já existe funcionário com esse id!")
        return
    }

    funcionarios.push(novoFuncionario)

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
}

//Criar a função renderizarTabela:
// 1 - Capturar informação do localStorage(getItem)
// 2 - Utilizar forEach para percorrer cada elemento da lista do localStorage
// 3 - Dentro do forEach criar um elemento <tr></tr> e dentro desse elemento criar os elementos <td></td> para cada informação do item que deseja exibir
// 4 - Adicionar os elementos criados ao tbody da tabela de exibição

// Criar a funcionalidade editar:
// No campo Ação, todos os itens devem conter um botão (<a></a>) de Editar
// Ao clicar em Editar, o usuário deve ser redirecionado a uma nova tela, com um formulário preenchido pelas informações do item escolhido 
// Ao final do formulário deve conter um botão "Salvar Alterações" e as mundanças feitas no item devem ser armazenadas no localStorage
// As mudanças devem refletir na tabela da página original


function renderizarTabela() {

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []
    const corpoTabelaHtml = document.querySelector("#tabela-funcionarios tbody")

    funcionarios.forEach(funcionario => {
        const linha = document.createElement("tr")
        linha.innerHTML = `
        <td>${funcionario.id}</td>
        <td>${funcionario.nome}</td>
        <td>${Number(funcionario.salario).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
        <td>${funcionario.cargo}</td>
        <td>${funcionario.departamento}</td>
        `

        const campoAcoes = document.createElement("td")
        campoAcoes.classList.add("acoes")

        const botaoEditar = document.createElement("a")
        botaoEditar.innerText = "EDITAR"
        botaoEditar.href = `editar.html?id=${funcionario.id}`
        botaoEditar.target = "_blank"

        const botaoRemover = document.createElement("button")
        botaoRemover.type = "button"
        botaoRemover.innerText = "REMOVER"

        botaoRemover.addEventListener("click", () => {
            const listaFuncionariosAtual = JSON.parse(localStorage.getItem("funcionarios")) || []

            const listaFuncionariosFiltrada = listaFuncionariosAtual.filter((f) => f.id != funcionario.id)


            localStorage.setItem("funcionarios", JSON.stringify(listaFuncionariosFiltrada))
            window.location.reload()
        })
        campoAcoes.appendChild(botaoEditar)
        campoAcoes.appendChild(botaoRemover)
        linha.appendChild(campoAcoes)


        corpoTabelaHtml.appendChild(linha)
    });

}

renderizarTabela()
