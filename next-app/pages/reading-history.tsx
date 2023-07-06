import Resource from '@/components/Home/Resource'
const ReadingHistory = () => {
  return (
    <main className='container'>
      <section className='section section--resources'>
        <header className='section--resources__header'>
          <h2>Reading History</h2>
        </header>
        <div className='section--resources__container'>
          <Resource title='How to Draw Fat Yoshi in CSS' author='Fat "Beeg Boi" Yoshi' />
          <Resource title='How to Eat More Food More Efficiently' author='Fat "Beeg Boi" Yoshi' />
        </div>
      </section>
    </main>
  )
}

export default ReadingHistory
