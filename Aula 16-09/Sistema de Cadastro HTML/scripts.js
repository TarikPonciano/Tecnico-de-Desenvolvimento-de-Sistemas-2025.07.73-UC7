function cadastrarFuncionario(e) {
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const salario = parseFloat(document.getElementById("salario").value)
    const cargo = document.getElementById("cargo").value
    const CPF = document.getElementById("CPF").value
    const idade = parseInt(document.getElementById("idade").value)
    const departamento = document.getElementById("departamento").value
    const estadoCivil = document.querySelector("input[name='estadoCivil']:checked").value

    const itemFuncionario = document.createElement("li")
    itemFuncionario.innerText = `
        Nome: ${nome}
        Salário: R$ ${salario}
        Cargo: ${cargo}
        CPF: ${CPF}
        Idade: ${idade} anos
        Departamento: ${departamento}
        Estado Civil: ${estadoCivil}
        `
    const listaFuncionarios = document.getElementById("lista-funcionarios")

    listaFuncionarios.appendChild(itemFuncionario)

    document.getElementById("nome").value = ""
    document.getElementById("salario").value = ""
    document.getElementById("cargo").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("departamento").value = ""
    document.getElementById("CPF").value = ""
    document.querySelector("input[name='estadoCivil']").checked = true


}