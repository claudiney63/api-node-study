const express = require('express')
const server = express()
const filmes = require('./src/data/filmes.json')

server.get('/usuarios', (req, res) => {
    return res.json({usuarios: ['João', 'Maria', 'José', 'Ana', 'Pedro']})
})

server.get('/filmes', (req, res) => {
    return res.json({filmes: filmes})
})

server.listen(3000, () => {
    console.log('Server is running...')
})