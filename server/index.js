import express from 'express'
import template from '../source/templates'
import api from './api'

// Constants
const app = express()

// Serve static files
app.use('/static', express.static('dist'))

// Index
app.get('/', (req, res) => {
  res.send(template({ title: 'Mon Chat' }))
})

// API
app.use('/api', api)

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(8081)
