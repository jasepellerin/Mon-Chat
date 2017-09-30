import express from 'express'
import path from 'path'

const app = express()

app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.redirect('/dist/html')
})

app.listen(4000)
