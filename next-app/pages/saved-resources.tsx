import Resource from '@/components/Home/Resource'

const SavedResourceItem = ({ title, author, url }) => {
  return (
    <a href={url}>
      <div className='resource'>
        <div className='resource__title'>
          <h3>{title}</h3>
        </div>
        <div className='resource__author'>
          <h4>{author}</h4>
        </div>
      </div>
    </a>
  )
}
const SavedResources = () => {
  return (
    <main className='container'>
      <section className='section section--resources'>
        <header className='section--resources__header'>
          <h2>Saved Resources</h2>
        </header>
        <div className='section--resources__container'>
          <SavedResourceItem title='How to Draw Fat Yoshi in CSS' author='Fat "Beeg Boi" Yoshi' url='/saved-resource' />
          <SavedResourceItem title='How to Eat More Food More Efficiently' author='Fat "Beeg Boi" Yoshi' url='/saved-resource' />
        </div>
      </section>
    </main>
  )
}

export default SavedResources
