import type { NextPage } from 'next'

interface IResource {
  title: string
  author: string
}

const Resource: NextPage<IResource> = function ({ title, author }) {
  return (
    <div className='resource'>
      <div className='resource__title'>
        <h3>{title}</h3>
      </div>
      <div className='resource__author'>
        <h4>{author}</h4>
      </div>
    </div>
  )
}

export default Resource
