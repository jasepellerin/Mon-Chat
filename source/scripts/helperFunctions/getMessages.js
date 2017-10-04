const getMessages = (chatID) => {
  return new Promise((resolve, reject) => {
    fetch('/api/chat/' + chatID)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          reject(res)
        }
      }).then(res => {
        resolve(res.messages)
      }).catch(err => {
        reject(err)
      })
  })
}

export default getMessages
