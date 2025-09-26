function carregarPagina() {
    const mensagem = document.getElementById("teste")

    const params = new URLSearchParams(window.location.search)
    const info = params.get("id")

    mensagem.innerText = info

}

carregarPagina()