function apresentar() {
    let nome = prompt("Digite o seu nome: ")

    alert(`Olá, meu nome é ${nome}!`)

    let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))

    let idade = 2025 - anoNascimento

    alert(`Eu tenho ${idade} anos de idade.`)

    if (idade >= 18) {
        alert("Acesso Liberado!")
    } else {
        alert("Acesso Negado!")
    }
}
// let operador = "+"


// if (operador == "+"){
//     print("Resultado da soma")
// }else if (operador == "-") {
//     print("Resultado da subtração")
// }

// Crie um arquivo script.js que implementa uma calculadora básica:

// - Pedir ao usuário as informações número 1, número 2 e operador(+,-,*,/)
// - Imprima na tela o resultado da operação adequada
function calculadoraSimples() {
    let numero1 = 0
    let numero2 = 0
    let operador = ""
    let resultado = 0


    numero1 = Number(prompt("Digite um número: "))

    if (!numero1) {
        alert("Você digitou um número inválido.")
        return
    }

    operador = prompt("Digite o operador desejado (+,-,*,/):")

    if (['+', '-', '*', '/'].includes(operador)) {

        numero2 = Number(prompt("Digite um número: "))

        if (!numero2) {
            alert("Número digitado inválido!")
            return
        }


        if (operador === "+") {
            resultado = numero1 + numero2
        } else if (operador === "-") {
            resultado = numero1 - numero2
        } else if (operador === "*") {
            resultado = numero1 * numero2
        } else if (operador === "/") {
            if (numero2 !== 0) {
                resultado = numero1 / numero2
            }
            else {
                alert("Tentativa de Divisão por 0")
                return
            }
        } else {
            alert("Operador inválido!")
        }

    } else {
        alert("Você digitou um operador inválido!")
        return
    }

    alert(`${numero1} ${operador} ${numero2} = ${resultado}`)

}
