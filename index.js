const express = require('express')
const app = express()
const port = 3000

// Teste inicial na página web
app.get('/', (req, res) => { res.send('Hello World!') })

// Teste inicial no terminal
app.listen(port, () => { console.log('Ouvindo na porta: ${port}') })