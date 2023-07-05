let pageMetadata = null

// Save the metadata when it's received from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'setPageMetadata':
      // set the metadata received from contentScripts to a variable.
      pageMetadata = request.metadata
      break
    case 'getPageMetadata':
      sendResponse({ metadata: pageMetadata })
  }
})
