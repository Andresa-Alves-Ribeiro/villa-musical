'use client';

import { MusicNotes } from '@phosphor-icons/react';
import { MAP_EMBED_SRC } from '../../data/contact';

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Fundo musical — pautas e textura */}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800/30 bg-amber-950/20 mb-6">
            <MusicNotes className="text-amber-600/90" size={16} weight="duotone" />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-200/80">
              Localização
            </span>
          </div>
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-[1.2]"
            style={{ fontFamily: 'var(--font-syne), Syne, sans-serif' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Localização</span>
          </h2>
          <div className="flex justify-center gap-2 mt-6">
            <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
            <div className="h-0.5 w-16 rounded-full bg-amber-500/50" />
            <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
          </div>
        </header>

        {/* Mapa — full width */}
        <div className="relative group w-full max-w-5xl mx-auto">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
          <div className="relative flex-1 min-h-[400px] md:min-h-[480px] rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-transparent border border-amber-700/25">
            {/* Cantos decorativos — estilo palco */}
            <div className="absolute top-0 right-0 z-20 w-10 h-10 border-t border-r border-amber-600/40 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 z-20 w-10 h-10 border-b border-l border-amber-600/40 rounded-bl-2xl" />

            <div className="relative w-full h-full min-h-[400px] md:min-h-[480px] rounded-xl overflow-hidden">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen=""
                loading="lazy"
                title="Localização Villa Musical"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Barra decorativa inferior — equalizador */}
            <div className="absolute bottom-3 left-8 right-8 h-1 flex items-end justify-around gap-1">
              {[2, 4, 6, 8, 10, 8, 6, 4, 2].map((h, i) => (
                <div
                  key={`map-eq-${h}-${i}`}
                  className="instrument-eq-bar w-1 rounded-full bg-amber-600/70"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
          </div>

          <MusicNotes
            className="absolute -top-5 -right-3 text-amber-500/40 w-8 h-8"
            size={32}
            weight="thin"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
