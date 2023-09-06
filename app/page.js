import Image from 'next/image'
import Products from './components/Products'
import Banner from './components/Banner'
import Header from './components/Header'

export default function Home() {
  return (
    <main>


        <section className='sticky top-0 z-10 '>
        <Header/>
      </section>
      <section className='mb-20'>
        <Banner/>
      </section>


      <section>
      <Products/>
      </section>

      
    </main>
  )
}
