const pacientes = {

}


function cadastrarConsulta(e) {
    e.preventDefault()

    const nome = document.getElementById("campo-nome").value
    const cpf = document.getElementById("campo-cpf").value
    const especialidade = document.getElementById("lista-especialidade").value
    const turno = document.querySelector("input[name='radio-turno']:checked").value

    const podeCadastrar = verificarTurno(e)

    if (podeCadastrar == false) {
        return
    }

    const htmlConsultas = document.getElementById("lista-consulta")

    const htmlConsulta = document.createElement("li")
    htmlConsulta.innerText = `Nome: ${nome} | Especialidade: ${especialidade} | Turno: ${turno}`

    htmlConsultas.appendChild(htmlConsulta)

    if (pacientes[cpf]) {
        pacientes[cpf].push({
            "nomePaciente": nome, "especialidade": especialidade, "turno": turno
        })
    } else {
        pacientes[cpf] = [
            {
                "nomePaciente": nome, "especialidade": especialidade, "turno": turno
            }
        ]
    }

    verificarTurno(e)
}

function verificarTurno(e) {

    const cpf = document.getElementById("campo-cpf").value
    const turno = document.querySelector("input[name='radio-turno']:checked").value
    const especialidade = document.getElementById("lista-especialidade").value

    // Verificação Total de Consultas no mesmo Turno e Contagem de Especialidade
    let contagemConsultas = 0
    let contagemEspecialidade = 0
    for (let cpfAtual in pacientes) {
        for (let con of pacientes[cpfAtual]) {

            if (con.turno == turno) {
                contagemConsultas += 1
            }

            if (con.especialidade == especialidade) {
                contagemEspecialidade += 1
            }
        }
    }


    const avisoLimiteTurno = document.getElementById("aviso-turno-limite")

    if (contagemConsultas >= 5) {

        avisoLimiteTurno.style.display = "block"
    } else {
        avisoLimiteTurno.style.display = "none"
    }

    const avisoQtdEspecialidade = document.getElementById("aviso-qtd-especialidade")

    avisoQtdEspecialidade.innerText = `Consultas marcadas em ${especialidade}:  ${contagemEspecialidade}`

    if (especialidade) {
        avisoQtdEspecialidade.style.display = "block"
    } else {
        avisoQtdEspecialidade.style.display = "none"
    }

    if (contagemConsultas >= 5) {
        return false
    }

    // Verificação de consultas do mesmo paciente
    if (!pacientes[cpf]) {

        document.getElementById("aviso-turno-duplicado").style.display = "none"
        return true
    }

    const consultas = pacientes[cpf]

    let consulta = null


    // for (let index = 0; index < consultas.length; index++) {
    //     if (consultas[index].turno == turno){
    //         consulta = consultas[index]
    //         break
    //     }
    // }

    for (let con of consultas) {

        if (con.turno == turno) {
            consulta = con
            break
        }
    }

    const avisoTurnoDuplicado = document.getElementById("aviso-turno-duplicado")

    if (consulta) {
        avisoTurnoDuplicado.style.display = "block"
        return false
    } else {
        avisoTurnoDuplicado.style.display = "none"
        return true
    }
}