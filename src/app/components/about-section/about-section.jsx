'use client';

import Image from 'next/image';
import Equipe from '../../assets/polaroid-equipe.png';
import { MusicNotes, Users, MicrophoneStage, GraduationCap } from '@phosphor-icons/react';

const DESTAQUES = [
  { icon: Users, value: 'Centenas', label: 'de alunos atendidos', delay: '0ms' },
  { icon: MicrophoneStage, value: 'Orquestra', label: 'e Coral Municipal', delay: '100ms' },
  { icon: GraduationCap, value: 'A partir', label: 'de 3 anos', delay: '200ms' },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Fundo musical — pautas e textura */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 48px,
              rgba(184, 134, 11, 0.3) 48px,
              rgba(184, 134, 11, 0.3) 49px
            )`,
          }}
        />
        <div className="absolute top-20 right-0 w-64 h-px bg-gradient-to-l from-amber-600/20 to-transparent" />
        <div className="absolute bottom-32 left-0 w-96 h-px bg-gradient-to-r from-amber-600/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho editorial — centralizado e impactante */}
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800/30 bg-amber-950/20 mb-6">
            <MusicNotes className="text-amber-600/90" size={16} weight="duotone" />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-200/80">
              Sobre o Projeto
            </span>
          </div>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-[1.2]"
            style={{ fontFamily: 'var(--font-syne), Syne, sans-serif' }}
          >
            Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Villa Musical</span>
          </h2>
          <div className="flex justify-center gap-2 mt-6">
            <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
            <div className="h-0.5 w-16 rounded-full bg-amber-500/50" />
            <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
          </div>
        </header>

        {/* Layout bento assimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Bloco principal de texto — maior */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm">
              <div className="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-amber-600/50 to-transparent" />
              <div className="space-y-6 text-zinc-400 leading-[1.75] text-[15px] md:text-base">
                <p>
                  O <strong className="text-amber-100/90">Villa-Musical</strong>{' '}
                  é um projeto da Secretaria
                  Municipal de Educação da Prefeitura de Cosmópolis que tem como principal objetivo a{' '}
                  <strong className="text-amber-100/90">formação humana através do ensino de música</strong>
                  . Com oficinas de diversos instrumentos musicais, musicalização infantil, Canto Coral,
                  entre outras, o projeto oferece aulas gratuitas e atende centenas de alunos de diferentes
                  regiões da cidade.
                </p>
                <p>
                  Na direção de democratizar o ensino de música, o Villa iniciou uma série de novas
                  propostas, tendo como destaque a criação da{' '}
                  <strong className="text-amber-100/90">Orquestra do Projeto Villa-Musical</strong>{' '}
                  e o{' '}
                  <strong className="text-amber-100/90">Coral Municipal de Cosmópolis</strong>
                  . O projeto
                  também leva musicalização para a Educação Infantil, promovendo formação através da
                  arte para milhares de crianças a partir dos 3 anos.
                </p>
              </div>
            </div>

            {/* Cards de destaques em linha */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DESTAQUES.map(({ icon: Icon, value, label, delay }) => (
                <div
                  key={value}
                  className="about-highlight-card group flex items-center gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:border-amber-800/30 hover:bg-amber-950/10 transition-all duration-300"
                  style={{ animationDelay: delay }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-amber-900/30 border border-amber-800/20 group-hover:border-amber-600/40 group-hover:bg-amber-900/50 transition-colors">
                    <Icon className="text-amber-400/90" size={24} weight="duotone" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white text-lg">{value}</span>
                    <span className="text-zinc-500 text-sm">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem — moldura de palco/vinil */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow sutil atrás */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              {/* Moldura tipo palco — cantos decorativos */}
              <div className="relative p-2 rounded-2xl bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-transparent border border-amber-700/25">
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-amber-600/40 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-amber-600/40 rounded-bl-lg" />
                <Image
                  src={Equipe}
                  alt="Equipe Villa Musical"
                  width={480}
                  height={480}
                  className="relative rounded-xl object-cover w-full max-w-md aspect-square shadow-2xl"
                />
                {/* Barra decorativa inferior — estilo equalizador */}
                <div className="absolute -bottom-1 left-4 right-4 h-1 flex items-end justify-around gap-1">
                  {[2, 4, 6, 8, 6, 4, 2].map((h, i) => (
                    <div
                      key={`eq-bar-${i}-${h}`}
                      className="w-1 rounded-full bg-amber-600/60"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
              {/* Nota musical flutuante */}
              <MusicNotes
                className="absolute -top-6 -right-4 text-amber-500/40 w-8 h-8"
                size={32}
                weight="thin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
