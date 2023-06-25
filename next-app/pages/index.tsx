import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [metadata, setMetadata] = useState(null)

  useEffect(() => {
    // Request the metadata from the background script
    chrome.runtime.sendMessage({ action: 'getPageMetadata' }, (response) => {
      console.log(response)
      setMetadata(response.metadata)
    })
  }, [])

  return <div>Article Name from Metadata: {metadata}</div>
}

export default Home
