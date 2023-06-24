window.addEventListener('load', (event) => {
  console.log('Page loaded')
  let metadata = null
  const scripts = document.getElementsByTagName('script')
  for (let script of scripts) {
    if (script.getAttribute('type') === 'application/ld+json') {
      metadata = JSON.parse(script.innerText)
      console.log(metadata)
      break
    }
  }
  // Send the metadata to the background script
  chrome.runtime.sendMessage({ action: 'setPageMetadata', metadata })
})
