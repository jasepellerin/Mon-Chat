import express from 'express'
import bodyParser from 'body-parser'
import DBController from './DBController'

// Constants
const dbController = new DBController()
const chatCollection = 'chats'
const api = express.Router()

// Allow parsing json
api.use(bodyParser.json())

// Used for creating chat rooms
api.post('/chat/:chatID', (req, res) => {
  const chat = {
    _id: parseInt(req.params.chatID),
    creationDate: Date.now(),
    messages: []
  }
  dbController.addDocument(chatCollection, chat)
  res.json(chat)
})

// Used to add messages to a given chatroom
api.post('/chat/:chatID/messages', (req, res) => {
  const chatID = req.params.chatID
  const query = { _id: parseInt(chatID) }
  const message = req.body.message

  // Add document to database
  dbController.addElementToArray(chatCollection, query, 'messages', message)
})

// Used to get chat room messages
api.get('/chat/:chatID', (req, res) => {
  const chatID = parseInt(req.params.chatID)
  dbController.getMatchingDocumentsInCollection(chatCollection, { _id: chatID })
    .then(chat => {
      // Return first match if it exists
      if (chat.length > 0) {
        res.json(chat[0])
      } else {
        res.statusMessage = 'Chat room not found'
        res.status(404).send('Chat room not found')
      }
    })
})

export default api
