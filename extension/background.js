chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === 'Hello') {
    console.log('Message received!')
    sendResponse({ farewell: 'Goodbye' })
  }
  return true // keeps the message channel open until sendResponse is called
})
