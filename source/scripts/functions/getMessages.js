const getMessages = (chatID) => {
  return new Promise((resolve, reject) => {
    fetch('/api/chat/' + chatID)
      .then(res => res.json()).then(res => {
        resolve(res.messages)
      }).catch(err => {
        reject(err)
      })
  })
}

export default getMessages
