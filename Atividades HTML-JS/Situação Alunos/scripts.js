let numeroDeAlunos = 0


function cadastrarAluno(e) {
    e.preventDefault() //Impedir reload

    const nome = document.getElementById("campo-nome").value
    const email = document.getElementById("campo-email").value
    const curso = document.getElementById("lista-curso").value
    const modalidade = document.querySelector("input[name='radio-modalidade']:checked").value



    if (!nome) {
        alert("Campo nome não pode ficar vazio!")
        return
    }

    if (!(email.includes('@') && email.includes('.'))) {
        alert("Campo email deve conter @ e .")
        return
    }

    if (!modalidade) {
        alert("Campo modalidade não foi preenchido!")
        return
    }

    const listaAlunos = document.getElementById("lista-alunos")

    const aluno = document.createElement("li")

    aluno.innerText = `Nome: ${nome} | Email: ${email} | Curso: ${curso} | Modalidade: ${modalidade}`

    // Estilizar os alunos da modalidade EAD (fundo de cor diferente)
    if (modalidade == "EAD") {
        aluno.style.backgroundColor = "red"
    }

    //Maneira Alternativa
    // aluno.classList.add(`modalidade-${modalidade.toLowerCase()}`)


    listaAlunos.appendChild(aluno)

    numeroDeAlunos += 1

    // Resetar o Formulário

    const form = document.querySelector("form")
    form.reset()

    // Contabilizar quantos alunos foram cadastrados

    document.getElementById("contador-alunos").innerText = `Total de Alunos: ${numeroDeAlunos}`




}