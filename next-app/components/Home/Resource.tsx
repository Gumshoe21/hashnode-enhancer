import type { NextPage } from 'next'

interface IResource {
  title: string
  author: string
}

const Resource: NextPage<IResource> = function ({ title, author }) {
  return (
    <div className='section--resources-resource'>
      <div className='section--resources-resource-title'>
        <h3>{title}</h3>
      </div>
      <div className='section--resources-resource-author'>
        <h4>{author}</h4>
      </div>
    </div>
  )
}

export default Resource
