const express = require("express")

application.get('/', (requisica, resposta) => {
    resposta.send("Estou funcionando com o express")
})