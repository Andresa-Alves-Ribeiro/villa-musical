import Image from 'next/image'
import Header from './components/header/header'
import Equipe from './assets/integrantes.jpeg'
import Cordas from './assets/guitar.svg'
import Metais from './assets/trumpet.svg'
import Madeiras from './assets/flute.svg'
import Percussão from './assets/drum.svg'
import Teclas from './assets/piano.svg'
import Voz from './assets/voz.svg'
import Dança from './assets/danca.svg'
import Linguagens from './assets/libras.svg'
import Orquestras from './assets/orquestras.svg'
import Coral from './assets/coral.svg'


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section>
        <div className="grid">
          <div className="flex items-center justify-center mt-16 mb-16">
            <div className="md:w-1/3 mr-14">
              <h2 className="text-3xl font-bold mb-6">Sobre a Villa-Musical</h2>
              <p className="text-gray-700">
                O Villa-Musical é um projeto da Secretaria Municipal de Educação da Prefeitura de Cosmópolis que tem como principal objetivo a formação humana através do ensino de música. Com oficinas de diversos Instrumentos Musicais, Musicalização infantil, Canto Coral, entre outras. O projeto oferece aulas gratuitas de música e atende centenas de alunos de diferentes regiões da cidade.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-1/2 md:w-1/3 ml-14 mt-14 pt-14">
              <div className="image-container relative">
                <div className="home-image"></div>
                <Image src={Equipe} alt="Integrantes do Villa" className="rounded-lg equipe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-16 pb-16 container-sobre color-green-600">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Como começamos e o que fazemos?</h1>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-center max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti blanditiis quia, sit ducimus maxime soluta, illum incidunt sint dicta voluptate ut enim magnam! Quidem id doloremque cum veniam aperiam.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Cordas} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Cordas</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Metais} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Metais</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Madeiras} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Madeiras</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Percussão} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Percussão</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Teclas} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Teclas</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Voz} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Voz</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Dança} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Outras linguagens artistícas</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Orquestras} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Orquestras e Grupos Musicais</span>
            </div>
            <div className="flex items-center justify-center flex-col pt-14">
              <Image src={Coral} alt="Violão" width={200} height={200}/>
              <span className="text-lg mt-2">Coral</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Encontre-nos aqui</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.2605009935152!2d-47.193088137240075!3d-22.650656233341664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8924095697737%3A0x30b9fab2ec543c79!2sR.%20Dr.%20Moacir%20do%20Amaral%2C%2015b%20-%20Jardim%20Bela%20Vista%2C%20Cosm%C3%B3polis%20-%20SP%2C%2013150-000!5e0!3m2!1spt-BR!2sbr!4v1688689271788!5m2!1spt-BR!2sbr" width="800" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  )
}
