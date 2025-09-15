let nome = prompt("Digite o seu nome: ")

alert(`Olá, meu nome é ${nome}!`)

let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))

let idade = 2025 - anoNascimento

alert(`Eu tenho ${idade} anos de idade.`)

if (idade >= 18){
    alert("Acesso Liberado!")   
}else{
    alert("Acesso Negado!")
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