const express = require('express')
const template = require('../source/templates')
const api = require('./api')
const path = require('path')

// Constants
const app = express()
const server = require('http').Server(app)
const io = require('socket.io').listen(server)

io.on('connection', function (socket) {
  socket.on('Message', function (msg) {
    io.emit('Message', msg)
  })
})

// Serve static files
app.use('/static', express.static(path.join(__dirname, '../dist/')))

// Index
app.get('/', (req, res) => {
  res.send(template({ title: 'Mon Chat' }))
})

// Favicon
app.get('/favicon.ico', (req, res) => {
  res.redirect('/static/favicon.ico')
})

// API
app.use('/api', api)

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

server.listen(4000)
