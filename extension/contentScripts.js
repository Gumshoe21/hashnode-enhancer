window.addEventListener('load', (event) => {
  const firstDivText = document.querySelector('div')?.innerText
  console.log('Page fully loaded')
  chrome.runtime.sendMessage({ greeting: 'Hello', firstDivText })
})
