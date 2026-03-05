'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Corais from '../../assets/corais.jpg';
import Cordas from '../../assets/cordas.jpg';
import Libras from '../../assets/libras.jpg';
import ViolonceloImg from '../../assets/violoncelo.jpg';
import VioloesImg from '../../assets/violoes.jpg';
import { Guitar, HandWaving, MicrophoneStage, MusicNotes } from '@phosphor-icons/react';

const slides = [
  {
    src: Corais,
    alt: 'Coral Villa Musical',
    label: 'Coral',
    desc: 'Canto coral e apresentações',
    icon: MicrophoneStage,
  },
  {
    src: Cordas,
    alt: 'Cordas Villa Musical',
    label: 'Cordas',
    desc: 'Instrumentos de cordas',
    icon: Guitar,
  },
  {
    src: Libras,
    alt: 'Libras Villa Musical',
    label: 'Libras',
    desc: 'Musicalização em Libras',
    icon: HandWaving,
  },
  {
    src: ViolonceloImg,
    alt: 'Violoncelo Villa Musical',
    label: 'Violoncelo',
    desc: 'Aulas e apresentações de violoncelo',
    icon: MusicNotes,
  },
  {
    src: VioloesImg,
    alt: 'Violões Villa Musical',
    label: 'Violões',
    desc: 'Aulas e apresentações de violão',
    icon: Guitar,
  },
];

export default function CarouselFotos() {
  const [selectedItem, setSelectedItem] = useState(0);
  const current = slides[selectedItem];
  const Icon = current.icon;

  return (
    <div className="relative group">
      <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-amber-900/15 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row min-h-[520px] rounded-2xl border border-amber-800/25 bg-gradient-to-br from-zinc-900/95 via-zinc-900/80 to-zinc-950/95 overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 z-20 w-14 h-14 border-t border-r border-amber-600/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 z-20 w-14 h-14 border-b border-l border-amber-600/40 rounded-bl-2xl" />

        <div className="lg:w-80 shrink-0 p-6 lg:p-8 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <div className="hidden lg:flex items-center gap-2 mb-4 pb-4 border-b border-amber-800/20">
            <MusicNotes className="text-amber-500/70" size={20} weight="duotone" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200/70">
              Apresentações
            </span>
          </div>
          {slides.map((slide, i) => {
            const SlideIcon = slide.icon;
            const isActive = selectedItem === i;
            return (
              <button
                key={slide.label}
                type="button"
                onClick={() => setSelectedItem(i)}
                className={`
                  gallery-tab flex shrink-0 items-center gap-4 w-full text-left px-4 py-4 rounded-xl transition-all duration-300
                  ${isActive
                    ? 'border border-amber-700/40 bg-amber-950/40 shadow-inner'
                    : 'border border-transparent bg-white/[0.02] hover:bg-white/[0.06] hover:border-amber-800/20'
                  }
                `}
              >
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                    ${isActive ? 'bg-amber-900/50 border border-amber-600/40' : 'bg-zinc-800/60 border border-white/[0.06]'}
                  `}
                >
                  <SlideIcon
                    size={24}
                    weight={isActive ? 'fill' : 'duotone'}
                    className={isActive ? 'text-amber-400' : 'text-zinc-500'}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className={`block font-semibold text-sm truncate ${isActive ? 'text-amber-100' : 'text-zinc-400'}`}
                  >
                    {slide.label}
                  </span>
                  <span className="block text-xs text-zinc-600 truncate mt-0.5">{slide.desc}</span>
                </div>
                {isActive && (
                  <div className="hidden lg:block flex-shrink-0 w-1 h-8 rounded-full bg-amber-500/80" />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative flex-1 min-h-[360px] lg:min-h-0 flex flex-col">
          <div className="relative flex-1 aspect-[4/3] lg:aspect-auto min-h-[320px] overflow-hidden">
            <Image
              key={selectedItem}
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority={selectedItem === 0}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.4) 100%), linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
              }}
            />
            <div className="absolute inset-0 border border-amber-900/30 rounded-lg m-2 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-end justify-center gap-1 h-6">
                {[2, 4, 6, 8, 12, 8, 6, 4, 2].map((h, i) => (
                  <div
                    key={`eq-${i}`}
                    className="gallery-eq-bar w-1.5 rounded-full bg-amber-600/70"
                    style={{
                      height: `${h}px`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-amber-800/30">
              <Icon className="text-amber-400" size={18} weight="fill" />
              <span className="text-sm font-semibold text-amber-100">{current.label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
