import express from 'express'
import template from '../source/templates'

const app = express()

app.use('/static', express.static('dist'))

app.get('/', (req, res) => {
  res.send(template({ title: 'Mon Chat' }))
})

app.listen(4000)
