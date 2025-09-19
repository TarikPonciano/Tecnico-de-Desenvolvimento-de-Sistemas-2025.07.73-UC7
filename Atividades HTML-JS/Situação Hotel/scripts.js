const precos = {
    "Simples": 100.00,
    "Duplo": 150.00,
    "Suite": 200.00
}

const hospedes = []

const hoje = new Date()
const hojeFormatado = hoje.toISOString().split("T")[0]
alert(hojeFormatado)

document.getElementById("campo-entrada").setAttribute("min", hojeFormatado)
document.getElementById("campo-saida").setAttribute("min", hojeFormatado)

document.getElementById("campo-entrada").addEventListener("change", () => {

    const dataInicial = document.getElementById("campo-entrada").value

    document.getElementById("campo-saida").setAttribute("min", dataInicial)
})

function cadastrarReserva(e) {
    e.preventDefault()

    const campoNome = document.getElementById("campo-nome")
    const campoTipoQuarto = document.getElementById("lista-tipo")
    const campoCafe = document.querySelector("input[name='radio-cafe']:checked")

    if (hospedes.includes(campoNome.value)) {
        alert("O hospede já possui reserva ativa!")
        return
    }

    const listaReservas = document.getElementById("lista-reserva")

    const reserva = document.createElement("li")

    if (!atualizarValor(e)) {
        alert("Datas inseridas são inválidas. Corrija o intervalo.")
        return
    }

    const precoTotal = atualizarValor(e).precoTotal

    reserva.innerText = `Nome: ${campoNome.value} || Tipo do Quarto: ${campoTipoQuarto.value} || Café da Manhã: ${campoCafe.value} || Total da Estadia: ${precoTotal}`

    listaReservas.appendChild(reserva)
    hospedes.push(campoNome.value)

}

function atualizarValor(e) {
    // const tipoSelecionado = e.target


    const tipoSelecionado = document.getElementById('lista-tipo')
    const dataEntrada = document.getElementById('campo-entrada').value
    const dataSaida = document.getElementById('campo-saida').value


    // const preco = tipoSelecionado.options[tipoSelecionado.selectedIndex].getAttribute("data-price")

    // const preco = precos[tipoSelecionado.value]
    if (!tipoSelecionado.value) {
        return
    }
    const preco = precos[tipoSelecionado.value].toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    document.getElementById("valor-quarto").innerText = `Valor do Quarto: ${preco}`

    if (!(dataEntrada && dataSaida)) {
        return
    }

    const dataEntradaDate = new Date(dataEntrada)

    const dataSaidaDate = new Date(dataSaida)

    if (dataEntradaDate > dataSaidaDate) {
        return
    }

    const dias = Math.floor((dataSaidaDate - dataEntradaDate) / 1000 / 60 / 60 / 24)

    // const precoTotal = precos[tipoSelecionado.value] * dias
    const precoTotal = (precos[tipoSelecionado.value] * dias).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    document.getElementById("valor-total").innerText = `Valor Total da Estadia: ${precoTotal}`

    return { preco, precoTotal }

}