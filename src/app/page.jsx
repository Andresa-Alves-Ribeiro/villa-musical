'use client'

import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import Header from './components/header/header'
import Cordas from './assets/cordas-arte.jpg'
import Metais from './assets/metais-arte.jpg'
import Madeiras from './assets/madeiras-arte.jpg'
import Percussão from './assets/percussão-arte.jpg'
import Teclas from './assets/teclas-arte2.jpg'
import Voz from './assets/voz-arte.jpg'
import Dança from './assets/danca-arte.jpg'
import Orquestras from './assets/orquestra-arte.jpg'
import Coral from './assets/coral-arte.jpg'
import Teatro from './assets/teatro-arte.jpg'
import CarouselFotos from './components/carousel/carousel';
import Footer from './components/footer/page';
import Logo from './assets/nova_logo.jpg'
import Equipe from './assets/polaroid-equipe.png'
import Rafael from './assets/rafael.jpg'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <section className='section-with-background'>
        <Header />
        <div className="grid">
          <div className="flex items-center justify-center mt-24">
            <Image src={Logo} alt="Integrantes do Villa" className="rounded-lg w-1/3 with-transparent-border" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-row">
          <div className="text-gray-300 mx-10 flex flex-col">
            <h1 className="text-5xl text-center font-Cinzel pb-14 yellow-text hover:shadow-md hover:rotate-3 transition duration-300">CONHEÇA O VILA MUSICAL</h1>
            <p className="mb-6 font-bold text-justify fadeIn">
              O <i>Villa-Musical</i> é um projeto da Secretaria Municipal de Educação da Prefeitura de Cosmópolis que tem como principal objetivo a formação humana através do ensino de música. Com oficinas de diversos Instrumentos Musicais, Musicalização infantil, Canto Coral, entre outras, o projeto oferece aulas gratuitas de música e atende centenas de alunos de diferentes regiões da cidade.
            </p>
            <p className="mb-6 text-justify fadeIn">
              Na direção de democratizar o ensino de música na nossa cidade, o “Villa” - como carinhosamente costumamos chamar -, iniciou uma série de novas propostas, tendo como destaque principal a criação de grupos musicais como a Orquestra do Projeto Villa-Musical e o Coral Municipal de Cosmópolis. O projeto também se organiza para levar aulas de musicalização para a Educação Infantil, promovendo a formação humana através da arte para milhares de crianças cosmopolenses a partir dos 3 anos de idade. Estão sendo feitas, ainda, parcerias com a Educação Especial, com o objetivo de enriquecer ainda mais as atividades com os alunos atendidos por instituições como Caps Infantil e Cerc, incluindo atividades musicais direcionadas no trabalho com crianças especiais.
            </p>
            <br />
          </div>

          <div className='xl:-mt-24'>
            <Image src={Equipe} alt="Equipe" width={4000} height={4000} />
          </div>
        </div>
      </section>

      {/*<div>
      <blockquote className="text-center italic text-gray-400 relative mt-14">
              <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 text-5xl">
                &ldquo;
              </div>
              A arte e, em especial, a música não é um simples adereço que pode simplesmente ajudar em alguns aspectos da vida das pessoas. Ela é, pelo contrário, um elemento de primeira grandeza na formação dos indivíduos e, por assim dizer, uma condição indispensável ao pleno desenvolvimento humano. Ao longo de seus 12 anos, com milhares de cidadãos atendidos e com centenas de apresentações musicais em diferentes partes da cidade, o projeto Villa-Musical, sem dúvida, pode ser considerado um importante patrimônio educacional e cultural da cidade de Cosmópolis.
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 text-5xl">
                &rdquo;
              </div>
            </blockquote>

            <div className='flex flex-row items-center justify-center gap-8'>
            <Image src={Rafael} alt="Violão" width={150} height={150} className='rounded-full' />
            <span className='text-center text-gray-300'>Prof. Rafael Beling - Coordenador de Música da Secretaria Municipal de Educação</span>
          </div>
  </div>*/}

      <section>
        <p className="text-slate-50 text-center text-lg py-10">
          São oferecidas aulas das famílias de instrumentos abaixo, de forma gratuita e de qualidade, para milhares de alunos:
        </p>

        <div className="flex flex-col gap-8 pb-12 mx-16">
          <div className="w-1/2 flex flex-row transform transition-transform hover:scale-105 rounded-xl bg-zinc-900">
            <Image src={Cordas} alt="Violão" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Instrumentos de cordas</span>
              <p className='text-zinc-400 pt-4'>Desenvolva habilidades expressivas através do violão, violino, violoncelo e outros instrumentos de cordas. Nossos instrutores altamente qualificados irão guiá-lo desde os conceitos básicos até técnicas avançadas, proporcionando uma experiência de aprendizado enriquecedora.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row-reverse transform transition-transform hover:scale-105 rounded-xl bg-zinc-900 ml-auto" >
            <Image src={Metais} alt="metais" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Instrumentos de metais</span>
              <p className='text-zinc-400 pt-4'>Explore a potência e a versatilidade dos instrumentos de metais, como trompete, trombone e muitos outros. Nossos instrutores especializados irão ajudá-lo a dominar os fundamentos e a aprimorar suas habilidades em um ambiente de aprendizado dinâmico e encorajador.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row transform transition-transform hover:scale-105 rounded-xl bg-zinc-900">
            <Image src={Madeiras} alt="madeiras" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Instrumentos de madeira</span>
              <p className='text-zinc-400 pt-4'>Descubra a riqueza e a expressividade dos instrumentos de madeira, incluindo flauta, clarinete, oboé e mais. Explore uma variedade de estilos musicais e desenvolva sua musicalidade em um ambiente acolhedor e estimulante.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row-reverse transform transition-transform hover:scale-105 rounded-xl bg-zinc-900 ml-auto">
            <Image src={Percussão} alt="percussão" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Instrumentos de percussão</span>
              <p className='text-zinc-400 pt-4'>Explore o mundo rítmico e pulsante dos instrumentos de percussão, como a bateria. Nossos instrutores irão guiá-lo na jornada de dominar padrões rítmicos, técnicas de batida e coordenação musical.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row transform transition-transform hover:scale-105 rounded-xl bg-zinc-900">
            <Image src={Teclas} alt="teclas" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Instrumentos de teclas</span>
              <p className='text-zinc-400 pt-4'>Explore a riqueza sonora e expressiva do piano. Nossos professores oferecem uma jornada de aprendizado personalizada, abordando desde os fundamentos da técnica até a interpretação de repertório diversificado.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row-reverse transform transition-transform hover:scale-105 rounded-xl bg-zinc-900 ml-auto">
            <Image src={Voz} alt="Voz" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Voz</span>
              <p className='text-zinc-400 pt-4'>Descubra o potencial da sua voz em nossas aulas de canto. Nossos instrutores guiarão você no desenvolvimento da técnica vocal, abrangendo desde o controle da respiração e projeção até a interpretação emotiva das músicas. Aprenda a cuidar da sua voz de forma saudável e a explorar sua expressividade musical.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row transform transition-transform hover:scale-105 rounded-xl bg-zinc-900">
            <Image src={Dança} alt="Dança" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Dança</span>
              <p className='text-zinc-400 pt-4'>Sinta a energia contagiante do Hip Hop em nossas aulas de dança. Nossos instrutores especializados irão guiá-lo através dos movimentos marcantes e ritmos envolventes desse estilo urbano e vibrante. Aprenda os fundamentos do Hip Hop, incluindo popping, locking, e breaking, enquanto desenvolve sua criatividade e expressão pessoal.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row-reverse transform transition-transform hover:scale-105 rounded-xl bg-zinc-900 ml-auto">
            <Image src={Orquestras} alt="Orquestras e Grupos Musicais" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Orquestras e Grupos Musicais</span>
              <p className='text-zinc-400 pt-4'>Junte-se à nossa comunidade de músicos em crescimento nas orquestras e grupos musicais. Experimente a sinergia única de tocar em conjunto e aprofunde sua compreensão da música através da colaboração com outros artistas. Seja você um violinista, percussionista ou flautista, há um lugar para você em nossa orquestra.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row transform transition-transform hover:scale-105 rounded-xl bg-zinc-900">
            <Image src={Coral} alt="Coral" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Coral</span>
              <p className='text-zinc-400 pt-4 pb-8'>Explore a beleza da harmonia vocal nas nossas aulas de coral. Junte-se a um grupo apaixonado de cantores para aprender e praticar uma variedade de estilos musicais, desde música clássica até contemporânea. Sob a orientação de nossos professores experientes, você desenvolverá técnicas vocais, aprimorará sua capacidade de ouvir e se conectar com outros cantores para criar performances emocionantes e envolventes.</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-row-reverse transform transition-transform hover:scale-105 rounded-xl bg-zinc-900 ml-auto">
            <Image src={Teatro} alt="Teatro" width={200} height={200} className='rounded-xl' />
            <div className='px-4 pt-8'>
              <span className="text-lg mt-6 font-bold uppercase text-slate-100">Teatro</span>
              <p className='text-zinc-400 pt-4 pb-8'>Explore a arte da interpretação nas nossas aulas de teatro. Nossos instrutores irão guiá-lo através de uma variedade de técnicas de atuação, improvisação e expressão corporal, enquanto você mergulha na exploração de personagens e narrativas emocionantes. Desde exercícios de aquecimento até projetos de cena completos, nossas aulas oferecem um ambiente dinâmico e colaborativo para desenvolver suas habilidades de atuação, construir confiança e criar performances teatrais memoráveis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-300 pt-10 mb-16">
        <div className="flex items-center justify-center mb-16 mt-6">
          <h2 className="text-2xl font-bold text-gray-700">Veja a seguir algumas de nossas aulas e apresentações</h2>
        </div>
        <CarouselFotos />
      </section>

      <section className=''>
        <h1 className='py-8 text-center text-2xl font-semibold text-blue-700'>Estamos localizados no endereço abaixo:</h1>
        <div className="flex justify-center py-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.2605009935152!2d-47.193088137240075!3d-22.650656233341664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8924095697737%3A0x30b9fab2ec543c79!2sR.%20Dr.%20Moacir%20do%20Amaral%2C%2015b%20-%20Jardim%20Bela%20Vista%2C%20Cosm%C3%B3polis%20-%20SP%2C%2013150-000!5e0!3m2!1spt-BR!2sbr!4v1688689271788!5m2!1spt-BR!2sbr" width="1200" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
