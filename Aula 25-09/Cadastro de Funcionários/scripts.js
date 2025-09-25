function cadastrarFuncionario(e) {
    const id = document.getElementById("campo-id").value
    const nome = document.getElementById("campo-nome").value
    const salario = document.getElementById("campo-salario").value
    const cargo = document.getElementById("campo-cargo").value
    const departamento = document.getElementById("campo-nome").value

    const novoFuncionario = {
        "id": id,
        "nome": nome,
        "salario": salario,
        "cargo": cargo,
        "departamento": departamento
    }

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []
    funcionarios.push(novoFuncionario)

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
}

//Criar a função renderizarTabela:
// 1 - Capturar informação do localStorage(getItem)
// 2 - Utilizar forEach para percorrer cada elemento da lista do localStorage
// 3 - Dentro do forEach criar um elemento <tr></tr> e dentro desse elemento criar os elementos <td></td> para cada informação do item que deseja exibir
// 4 - Adicionar os elementos criados ao tbody da tabela de exibição

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
        corpoTabelaHtml.appendChild(linha)
    });

}

renderizarTabela()