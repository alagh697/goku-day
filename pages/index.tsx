import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Card from '../components/Card'
import gokuForms from '../data/goku.json'

const Home: NextPage = () => {
  return (
    
      <main className="flex w-full flex-1 flex-col space-y-8 items-center justify-center px-5 py-10 text-center">
        <Banner/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

       {gokuForms.map((gokuForm) => 
       <Card key={gokuForm.id} sayanForm={gokuForm}/>
       )}

        </div>

        
      </main>

  )
}

export default Home
