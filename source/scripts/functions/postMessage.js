const postMessage = (chatID, message) => {
  fetch('/chat/' + chatID + '/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: message })
  })
}

export default postMessage
