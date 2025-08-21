import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello W')
})

app.listen(3000)