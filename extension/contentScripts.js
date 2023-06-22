document.addEventListener('DOMContentLoaded', (event) => {
  console.log('hi from contentscripts.js')
  chrome.runtime.sendMessage({ greeting: 'Hello' })
})
