import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Card from '../components/Card'
import gokuForms from '../data/goku.json'

const Home: NextPage = () => {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center space-y-8 px-5 py-10 text-center">
      <Banner />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {gokuForms.map((gokuForm) => (
          <Card key={gokuForm.id} sayanForm={gokuForm} />
        ))}
      </div>
    </main>
  )
}

export default Home
