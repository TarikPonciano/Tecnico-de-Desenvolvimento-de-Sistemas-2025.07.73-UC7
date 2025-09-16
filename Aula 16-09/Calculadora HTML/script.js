function calcular() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let op = document.getElementById("op").value
    let resultadoHtml = document.querySelector("h2")
    let resultado = 0

    if ((!num1) || (!num2)) {
        alert("Digite números válidos!")
        return
    }

    if (["+", "-", "*", "/"].includes(op)) {

        if (op === "+") {
            resultado = num1 + num2
        } else if (op === "-") {
            resultado = num1 - num2
        } else if (op === "*") {
            resultado = num1 * num2
        } else if (op === "/") {
            if (num2 === 0) {
                alert("Você tentou dividir por 0!")
                return
            } else {
                resultado = num1 / num2
            }
        }

    } else {
        alert("Você escolheu um operador inválido!")
        return
    }

    resultadoHtml.innerText = `Resultado: ${resultado}`
}