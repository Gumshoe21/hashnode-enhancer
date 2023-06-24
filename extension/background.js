let pageMetadata = null

// Save the metadata when it's received from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setPageMetadata') {
    pageMetadata = request.metadata
  }
})

// Send the metadata when it's requested from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageMetadata') {
    sendResponse({ metadata: pageMetadata })
  }
})
