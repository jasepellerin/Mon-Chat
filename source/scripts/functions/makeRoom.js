const makeRoom = (chatID) => {
  fetch('/api/chat/' + chatID, {
    method: 'POST'
  })
}

export default makeRoom
