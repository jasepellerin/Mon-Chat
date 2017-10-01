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

// Used to update messages in a given chatroom
app.patch('/chat/:chatID', (req, res) => {
  const chat = {
    _id: req.params.chatID,
    messages: req.body.messages
  }
  // Add document to database
  dbController.updateDocument(chatCollection, chat)
  res.json(chat)
})

// Used to get chat messages
app.get('/chat/:chatID', (req, res) => {
  const chatID = req.params.chatID
  let messages
  try {
    messages = dbController
      .getMatchingDocumentsInCollection(chatCollection, { _id: chatID })
    res.json(messages)
  } catch (error) {
    // Chat room doesn't exist
  }
})

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4000)
