import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Resource from '@/components/Home/Resource'
const Home: NextPage = () => {
  const [metadata, setMetadata] = useState(null)

  {
    /*
  useEffect(() => {
    // Request the metadata from the background script
    {
      chrome &&
        chrome.runtime.sendMessage({ action: 'getPageMetadata' }, (response) => {
          console.log(response)
          setMetadata(response.metadata)
        })
    }
  }, [])
  */
  }

  return (
		<main className='container'>
			{/*Begin Section Main */}
			<section className='section section--main'>
				<header className='section--main__header'>
					<h1>hashnode enhancer</h1>
				</header>
				{/* End Section Main*/}
			</section>
			{/* Begin Section Recently Generated Resources */}
			<section className='section section--resources'>
				<header className='section--resources__header'>
					<h2>recent resources</h2>
				</header>
				<div className='section--resources__container'>
					<Resource title='How to Draw Fat Yoshi in CSS' author='Gum W. Shoe' />
					<Resource title='How to Eat More Food More Efficiently' author='Fat "Beeg Boi" Yoshi' />
					{/* End Section Recent Resources */}
				</div>
			</section>
			{/* Begin Grid*/}
			<section className='section section--grid'>
				<div className='section--grid__container'>
					<a className='section--grid__item fill fill--top-left' href='https://www.hashnode.com/explore'>
						<div>your resources</div>
					</a>
					<a className='section--grid__item fill fill--top-right' href='https://www.hashnode.com/explore'>
						<div>share</div>
					</a>
					<a className='section--grid__item fill fill--bottom-left' href='https://www.hashnode.com/explore'>
						<div>reading history</div>
					</a>
					<a className='section--grid__item fill fill--bottom-right' href='https://www.hashnode.com/explore'>
						<div>explore</div>
					</a>
				</div>
			</section>
			<section className='section section--generate-resources'></section>
		</main>
	)
}

export default Home
