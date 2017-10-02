const testChatID = (chatID) => {
  const chatReg = new RegExp('^[0-9]{5,16}$')
  const test = chatID.match(chatReg)
  return (test && test[0] === chatID)
}

export default testChatID
