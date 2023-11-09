const express = require("express")
const path = require("path")

const app = express()

const caminhoBase= path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.send(`${caminhoBase}/index.html`)
    console.log(caminhoBase)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})