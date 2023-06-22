import { useEffect } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  useEffect(() => {
    chrome.runtime.sendMessage({ greeting: 'Hello' }, (response) => {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message)
      } else {
        console.log(response?.farewell)
      }
    })
  }, [])

  return <div>hi</div>
}

export default Home
