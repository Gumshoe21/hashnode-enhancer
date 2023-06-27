// Extract metadata when page loads
window.addEventListener('load', (event) => {
  let metadata = null

  // Get all scripts in HTML
  const scripts = document.getElementsByTagName('script')

  // Iterate through the scripts to find the LD-JSON script then assign that obtain that page's metadata (i.e. the object within the script)
  for (let script of scripts) {
    if (script.getAttribute('type') === 'application/ld+json') {
      let scriptString = script.innerText
      metadata = JSON.parse(scriptString)
      break
    }
  }
  // Send the metadata to background.js
  chrome.runtime.sendMessage({ action: 'setPageMetadata', metadata })
})
