const pacientes = {

}

function cadastrarConsulta(e) {
    e.preventDefault()

    const nome = document.getElementById("campo-nome").value
    const cpf = document.getElementById("campo-cpf").value
    const especialidade = document.getElementById("lista-especialidade").value
    const turno = document.querySelector("input[name='radio-turno']:checked").value

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
}

function verificarTurno(e) {
    const cpf = document.getElementById("campo-cpf").value
    const turno = document.querySelector("input[name='radio-turno']:checked").value

    let contagemConsultas = 0

    for (let cpf in pacientes) {
        for (let con of pacientes[cpf]) {
            if (con.turno == turno) {
                contagemConsultas += 1
            }
        }
    }

    const avisoLimiteTurno = document.getElementById("aviso-turno-limite")

    if (contagemConsultas >= 5) {

        avisoLimiteTurno.style.display = "block"
    } else {
        avisoLimiteTurno.style.display = "none"
    }


    if (!pacientes[cpf]) {
        return
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
    } else {
        avisoTurnoDuplicado.style.display = "none"
    }
}