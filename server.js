const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/demo/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'demo', req.params.file))
})

app.listen(PORT, () => {
  console.log(`Créopus running on http://localhost:${PORT}`)
})
