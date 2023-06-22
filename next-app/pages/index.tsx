import { useEffect } from 'react'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  useEffect(() => {
    chrome.runtime.sendMessage({ greeting: 'Hello', anythingIWant: 'anythingIDesire' }, (response) => {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message)
      } else {
        console.log(response?.farewell)
        console.log(response?.documentBody)
      }
    })
  }, [])

  return <div>hi</div>
}

export default Home
