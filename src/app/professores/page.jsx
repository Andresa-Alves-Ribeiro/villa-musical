import Image from 'next/image'
import Header from '../components/header/header'
import Footer from '../components/footer/page'

export default function Professores() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className='section-with-background'>
        <Header />

        <div className="flex items-center justify-center mt-24">
          <p>Confira abaixo os nossos professores:</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
