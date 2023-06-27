let pageMetadata = null

// Save the metadata when it's received from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'setPageMetaData':
      // set the metadata received from contentScripts to a variable.
      pageMetadata = request.metadata
      break
    case 'getPageMetaData':
      sendResponse({ metadata: pageMetadata })
  }
})
