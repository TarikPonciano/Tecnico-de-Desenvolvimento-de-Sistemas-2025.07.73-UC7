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

