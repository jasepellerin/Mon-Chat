import express from 'express'
import bodyParser from 'body-parser'
import DBController from './DBController'
import testChatID from '../source/scripts/functions/testChatID'

// Constants
const dbController = new DBController()
const chatCollection = 'chats'
const api = express.Router()

// Allow parsing json
api.use(bodyParser.json())

// Respond 404 with a given status message
function respond404Message(res, msg) {
  res.statusMessage = msg
  res.status(404).send(msg)
}

// Test the chatID. If valid, use callback. Otherwise, respond 404
function checkChatID(chatID, callback, res) {
  if (testChatID(chatID)) {
    callback()
  } else respond404Message(res, 'Invalid Chat ID')
}

// Used for creating chat rooms
api.post('/chat/:chatID', (req, res) => {
  const chatID = req.params.chatID
  const callback = () => {
    const chat = {
      _id: parseInt(chatID),
      creationDate: Date.now(),
      messages: []
    }
    dbController.addDocument(chatCollection, chat)
    res.json(chat)
  }
  checkChatID(chatID, callback, res)
})

// Used to add messages to a given chatroom
api.post('/chat/:chatID/messages', (req, res) => {
  const chatID = req.params.chatID
  const callback = () => {
    const query = { _id: parseInt(chatID) }
    const message = req.body.message

    // Add document to database
    dbController.addElementToArray(chatCollection, query, 'messages', message)
  }
  checkChatID(chatID, callback, res)
})

// Used to get chat room messages
api.get('/chat/:chatID', (req, res) => {
  const chatID = req.params.chatID
  const callback = () => {
    dbController
      .getMatchingDocumentsInCollection(chatCollection, { _id: parseInt(chatID) })
      .then(chat => {
        // Return first match if it exists
        if (chat.length > 0) {
          res.json(chat[0])
        } else {
          respond404Message(res, 'Chat room not found')
        }
      })
  }
  checkChatID(chatID, callback, res)
})

export default api
