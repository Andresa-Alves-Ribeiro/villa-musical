'use client'

import React, { useState } from 'react';

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
import Orquestras from './assets/orquestras.svg'
import Coral from './assets/coral.svg'
import CarouselFotos from './components/carousel/carousel';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section>
        <div className="grid">
          <div className="flex items-center justify-center mb-16">
            <div className="md:w-1/3 mr-14">
              <h2 className="text-3xl font-bold mb-6">Sobre a Villa-Musical</h2>
              <p className="text-gray-700">
                O Villa-Musical é um projeto da Secretaria Municipal de Educação da Prefeitura de Cosmópolis que tem como principal objetivo a formação humana através do ensino de música. Com oficinas de diversos Instrumentos Musicais, Musicalização infantil, Canto Coral, entre outras. O projeto oferece aulas gratuitas de música e atende centenas de alunos de diferentes regiões da cidade.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-1/2 md:w-1/3 ml-14 pt-14 pb-14">
              <div className="image-container relative pb-10">
                <Image src={Equipe} alt="Integrantes do Villa" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center pb-14 text-gray-900">Quem somos e o que fazemos?</h1>
          <div className="text-gray-700 mx-14">
            <p className="mb-6">
              O <i>Villa-Musical</i> é um projeto da Secretaria Municipal de Educação da Prefeitura de Cosmópolis que tem como principal objetivo a formação humana através do ensino de música. Com oficinas de diversos Instrumentos Musicais, Musicalização infantil, Canto Coral, entre outras, o projeto oferece aulas gratuitas de música e atende centenas de alunos de diferentes regiões da cidade.
            </p>
            <p className="mb-6">
              Com a promulgação da Lei de n° 11.769 de 2008 - que passou a incluir obrigatoriamente os conteúdos musicais na disciplina de Arte das escolas - a Secretaria de Educação de Cosmópolis rapidamente se organizou para se adequar à Lei. Foi criado, então, no ano de 2009, o Projeto Villa-Musical. Sua principal tarefa na época foi a inclusão de aulas de musicalização infantil com professores especialistas em Educação Musical nas escolas regulares de 1° ao 5° de toda a Rede Municipal. Foram milhares de alunos atendidos semanalmente, o que fez de Cosmópolis uma pioneira no ensino de música, sendo a primeira cidade da região a levar aulas de musicalização infantil de forma sistematizada para a educação básica.
            </p>
            <p className="mb-6">
              Em 2017 o projeto Villa-Musical dá mais um importante passo em seu desenvolvimento, assumindo uma feição, agora, com ênfase em outra modalidade de ensino. Como as escolas passaram a ter as aulas de musicalização como parte da grade curricular com professores efetivos, o Villa-Musical dedicou-se, então, ao ensino específico de instrumentos musicais. As aulas passaram a acontecer em período noturno, na EMEB Educador Paulo Freire, atendendo não apenas crianças, mas também jovens, adultos e idosos que tinham o sonho de estudar música.
            </p>
            <p className="mb-6">
              Em 2021, avançando ainda mais na direção de democratizar o ensino de música na nossa cidade, o “Villa” - como carinhosamente costumamos chamar -, iniciou uma série de novas propostas, tendo como destaque principal a criação de grupos musicais como a Orquestra do Projeto Villa-Musical e o Coral Municipal de Cosmópolis. O projeto também se organiza para levar aulas de musicalização para a Educação Infantil, promovendo a formação humana através da arte para milhares de crianças cosmopolenses a partir dos 3 anos de idade. Estão sendo feitas, ainda, parcerias com a Educação Especial, com o objetivo de enriquecer ainda mais as atividades com os alunos atendidos por instituições como Caps Infantil e Cerc, incluindo atividades musicais direcionadas no trabalho com crianças especiais.
            </p>
            <blockquote className="text-center italic text-gray-500 relative mt-14">
              <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 text-5xl">
                &ldquo;
              </div>
              A arte e, em especial, a música não é um simples adereço que pode simplesmente ajudar em alguns aspectos da vida das pessoas. Ela é, pelo contrário, um elemento de primeira grandeza na formação dos indivíduos e, por assim dizer, uma condição indispensável ao pleno desenvolvimento humano. Ao longo de seus 12 anos, com milhares de cidadãos atendidos e com centenas de apresentações musicais em diferentes partes da cidade, o projeto Villa-Musical, sem dúvida, pode ser considerado um importante patrimônio educacional e cultural da cidade de Cosmópolis.
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 text-5xl">
                &rdquo;
              </div>
            </blockquote>
            <br />
            <span className='block text-center text-gray-700 mb-14'>Prof. Rafael Beling - Coordenador de Música da Secretaria Municipal de Educação</span>
            <p className="text-gray-700 mt-14 mb-6">
              São oferecidas aulas das famílias de instrumentos abaixo, de forma gratuita e de qualidade, para centenas de alunos:
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-3 gap-8 pb-12">
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Cordas} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Cordas</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Metais} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Metais</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Madeiras} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Madeiras</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Percussão} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Percussão</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Teclas} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Teclas</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Voz} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Voz</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Dança} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Outras linguagens artistícas</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Orquestras} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Orquestras e Grupos Musicais</span>
          </div>
          <div className="flex items-center justify-center flex-col pt-14 transform transition-transform hover:scale-105">
            <Image src={Coral} alt="Violão" width={200} height={200} />
            <span className="text-lg mt-6 font-bold">Coral</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 pt-10">
        <div className="flex items-center justify-center mb-16 mt-6">
          <h2 className="text-2xl font-bold text-gray-700">Veja a seguir algumas de nossas aulas e apresentações</h2>
        </div>
        <CarouselFotos />
      </section>


      <section className='my-8 mx-auto'>
        <h2 className="text-xl font-bold pb-3">Encontre-nos aqui</h2>
        <p className='pb-4'>Estamos localizados no endereço abaixo:</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.2605009935152!2d-47.193088137240075!3d-22.650656233341664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8924095697737%3A0x30b9fab2ec543c79!2sR.%20Dr.%20Moacir%20do%20Amaral%2C%2015b%20-%20Jardim%20Bela%20Vista%2C%20Cosm%C3%B3polis%20-%20SP%2C%2013150-000!5e0!3m2!1spt-BR!2sbr!4v1688689271788!5m2!1spt-BR!2sbr" width="1200" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  );
}
