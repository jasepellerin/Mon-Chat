const MongoClient = require('mongodb').MongoClient
const mongoUri = require('./secrets.json').mongoUri

// Helper for DB helperFunctions
class DBController {
  /* Wrapper for all db helperFunctions which connects,
   * runs the given dbFunction, and closes connection
   */
  connectAndPerformFunction(dbFunction) {
    MongoClient.connect(mongoUri, (err, db) => {
      // Call db function on this db
      dbFunction(db)
      if (err) {
        throw err
      }
      db.close()
    })
  }

  // Add document to collection
  addDocument(collection, document) {
    this.connectAndPerformFunction((db) => {
      db.collection(collection).insertOne(document)
    })
  }

  // Add an element to an array within a document
  addElementToArray(collection, query, array, element) {
    let arraySearch = {}
    arraySearch[array] = element
    this.connectAndPerformFunction((db) => {
      db.collection(collection)
        .updateOne(query, { $push: arraySearch })
    })
  }

  // Update given document in collection
  updateDocument(collection, document) {
    this.connectAndPerformFunction((db) => {
      const query = { _id: document._id }
      db.collection(collection).updateOne(query, document)
    })
  }

  /* Return promise which resolves to array containing
   * documents in given collection which match query
   */
  getMatchingDocumentsInCollection(collection, query) {
    let docs = new Promise((resolve, reject) => {
      this.connectAndPerformFunction((db) => {
        docs = db.collection(collection).find(query).toArray((err, result) => {
          if (err) {
            reject(err)
            throw err
          }
          resolve(result)
        })
      })
    })
    return docs
  }

  /* Helper function to return promise which resolves to
   * array containing all documents in given collection
   */
  getAllDocumentsInCollection(collection) {
    return this.getMatchingDocumentsInCollection(collection, {})
  }
}

module.exports = DBController
