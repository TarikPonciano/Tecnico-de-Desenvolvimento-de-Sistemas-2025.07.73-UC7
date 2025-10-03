import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<h1 style="color:blue">Hello World!</h1>
        <a href='/bluelock'>Fã Page de Blue Lock</a>`)
})

app.get("/bluelock", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "home.html"))
})

app.get("/cadastro", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "cadastro.html"))
})

app.post("/cadastro", (req, res) => {
    const { id, nome, cargo, salario, departamento } =
        req.body

    console.log(`
        FUNCIONÁRIO CADASTRADO:

        ID - ${id}
        NOME - ${nome}
        CARGO - ${cargo}
        SALÁRIO - R$ ${salario}
        DEPARTAMENTO - ${departamento}
        `)

    res.redirect("/cadastro")
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://127.0.0.1:${PORT}/`

    )
})