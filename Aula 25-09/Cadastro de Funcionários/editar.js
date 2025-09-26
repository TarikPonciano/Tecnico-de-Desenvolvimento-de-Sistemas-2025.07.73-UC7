function carregarPagina() {

    const campoNome = document.getElementById("campo-nome")
    const campoId = document.getElementById("campo-id")
    const campoCargo = document.getElementById("campo-cargo")

    const params = new URLSearchParams(window.location.search)
    const info = params.get("id")

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios"))

    const funcionarioEscolhido = funcionarios.find((f) => f.id == info)

    campoId.value = funcionarioEscolhido.id
    campoNome.value = funcionarioEscolhido.nome
    campoCargo.value = funcionarioEscolhido.cargo

}

carregarPagina()