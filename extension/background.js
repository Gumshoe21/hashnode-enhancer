chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === 'Hello') {
    console.log('Message received!')
    console.log(request.firstDivText) // now contains the text of the first div
    sendResponse({ farewell: 'Goodbye', firstDivText: request.firstDivText })
  }
  return true // keeps the message channel open until sendResponse is called
})
