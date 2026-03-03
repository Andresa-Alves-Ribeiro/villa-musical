'use client';

import CarouselFotos from '../carousel/carousel';
import { MusicNotes } from '@phosphor-icons/react';

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      aria-labelledby="gallery-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 52px,
              rgba(184, 134, 11, 0.4) 52px,
              rgba(184, 134, 11, 0.4) 53px
            )`,
          }}
        />
        <div className="absolute top-24 right-0 w-80 h-px bg-gradient-to-l from-amber-600/15 to-transparent" />
        <div className="absolute bottom-40 left-0 w-72 h-px bg-gradient-to-r from-amber-600/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-600/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800/30 bg-amber-950/20 mb-6">
            <MusicNotes className="text-amber-600/90" size={16} weight="duotone" />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-200/80">
              Galeria
            </span>
          </div>
          <h2
            id="gallery-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-[1.2]"
            style={{ fontFamily: 'var(--font-syne), Syne, sans-serif' }}
          >
            Aulas e <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Apresentações</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mt-5">
            Momentos marcantes do nosso projeto musical
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
            <div className="h-0.5 w-16 rounded-full bg-amber-500/50" />
            <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
          </div>
        </header>

        <CarouselFotos />
      </div>
    </section>
  );
}
