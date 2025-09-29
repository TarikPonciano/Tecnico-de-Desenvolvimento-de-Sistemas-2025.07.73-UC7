function cadastrarTarefa(e) {
    const id = document.getElementById("campo-id").value
    const nome = document.getElementById("campo-nome").value
    const descricao = document.getElementById("campo-descricao").value
    const data = document.getElementById("campo-data").value
    const situacao = document.getElementById("campo-situacao").value

    //VALIDAÇÕES

    //ORGANIZAR
    const novaTarefa = {
        "id": id,
        "nome": nome,
        "descricao": descricao,
        "data": data,
        "situacao": situacao,
    }

    //OBTER A LISTA DE TAREFAS ATUAL

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    //ADICIONAR NOVA TAREFA NA LISTA
    tarefas.push(novaTarefa)

    //SALVAR INFORMAÇÃO

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function renderizarTabela() {

    const tarefas = JSON.parse(localStorage.getItem("tarefas"))

    const corpoTabelaHtml = document.querySelector("#lista-tarefas tbody")

    tarefas.forEach(tarefa => {

        const linha = document.createElement("tr")
        linha.innerHTML = `
        <td>${tarefa.id}</td>
        <td>${tarefa.nome}</td>
        <td>${tarefa.descricao}</td>
        <td>${tarefa.data}</td>
        <td>${tarefa.situacao}</td>
        `
        const campoAcoes = document.createElement("td")

        const botaoEditar = document.createElement("button")
        botaoEditar.innerText = "Editar"

        const botaoRemover = document.createElement("button")
        botaoRemover.innerText = "Remover"

        botaoRemover.addEventListener("click", () => {
            const resposta = confirm("Tem certeza que deseja remover o usuário?")

            if (!resposta) {
                return
            }

            const tarefasAtual = JSON.parse(localStorage.getItem("tarefas")) || []

            const tarefasFiltradas = tarefasAtual.filter((t) => t.id != tarefa.id)

            localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas))

            window.location.href = ""

        })

        campoAcoes.appendChild(botaoEditar)
        campoAcoes.appendChild(botaoRemover)

        linha.appendChild(campoAcoes)

        corpoTabelaHtml.appendChild(linha)

    });


}

renderizarTabela()