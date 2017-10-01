import express from 'express'
import template from '../source/templates'
import DBController from './DBController'
import bodyParser from 'body-parser'

const app = express()
const dbController = new DBController()
const chatCollection = 'chats'

// Serve static files
app.use('/static', express.static('dist'))
// Allow parsing json
app.use(bodyParser.json())

// Index
app.get('/', (req, res) => {
  res.send(template({ title: 'Mon Chat' }))
})

// Used for creating chat rooms
app.post('/chat/:chatID', (req, res) => {
  const chat = {
    _id: req.params.chatID,
    creationDate: Date.now(),
    messages: []
  }
  dbController.addDocument(chatCollection, chat)
  res.json(chat)
})

// Used to add messages to a given chatroom
app.post('/chat/:chatID/messages', (req, res) => {
  const chatID = req.params.chatID
  const query = { _id: parseInt(chatID) }
  const message = req.body.message

  // Add document to database
  dbController.addElementToArray(chatCollection, query, 'messages', message)
})

// Used to get chat room messages
app.get('/chat/:chatID', (req, res) => {
  const chatID = parseInt(req.params.chatID)
  dbController.getMatchingDocumentsInCollection(chatCollection, { _id: chatID })
    .then(chat => {
      // Return first match
      res.json(chat[0])
    })
})

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4000)
