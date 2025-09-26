function atualizarFuncionario(e) {
    
    const id = document.getElementById("campo-id").value
    const nome = document.getElementById("campo-nome").value
    const salario = document.getElementById("campo-salario").value
    const cargo = document.getElementById("campo-cargo").value
    const departamento = document.getElementById("campo-departamento").value

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios"))

    const funcionarioEscolhido = funcionarios.find((f) => f.id == id)

    funcionarioEscolhido.nome = nome
    funcionarioEscolhido.salario = salario
    funcionarioEscolhido.cargo = cargo
    funcionarioEscolhido.departamento = departamento

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))

    window.location.href = "index.html"

}


function carregarPagina() {

    const campoNome = document.getElementById("campo-nome")
    const campoId = document.getElementById("campo-id")
    const campoSalario = document.getElementById("campo-salario")
    const campoCargo = document.getElementById("campo-cargo")
    const campoDepartamento = document.getElementById("campo-departamento")

    const params = new URLSearchParams(window.location.search)
    const info = params.get("id")

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios"))

    const funcionarioEscolhido = funcionarios.find((f) => f.id == info)

    campoId.value = funcionarioEscolhido.id
    campoNome.value = funcionarioEscolhido.nome
    campoSalario.value = funcionarioEscolhido.salario
    campoCargo.value = funcionarioEscolhido.cargo
    campoDepartamento.value = funcionarioEscolhido.departamento

}

carregarPagina()