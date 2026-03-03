'use client';

import Image from 'next/image';
import { MusicNotes } from '@phosphor-icons/react';

/**
 * Card de exibição de um instrumento/oficina.
 * Design: moldura de palco, estilo vinil, elementos musicais.
 */
export default function InstrumentCard({
  src,
  title,
  description,
  size = 'default',
  index = 0,
}) {
  const isFeatured = size === 'featured';

  return (
    <article
      className="instrument-card-villa group relative flex flex-col overflow-hidden rounded-2xl border border-amber-800/20 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-950/90 backdrop-blur-sm"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Cantos decorativos — estilo palco */}
      <div className="absolute top-0 right-0 z-20 w-12 h-12 border-t border-r border-amber-600/30 rounded-tr-2xl opacity-80" />
      <div className="absolute bottom-0 left-0 z-20 w-12 h-12 border-b border-l border-amber-600/30 rounded-bl-2xl opacity-80" />

      {/* Ícone musical flutuante */}
      <MusicNotes
        className="absolute top-4 right-4 z-10 w-6 h-6 text-amber-500/30 group-hover:text-amber-500/50 transition-colors duration-300"
        weight="thin"
        aria-hidden
      />

      {/* Área da imagem — moldura tipo palco */}
      <div className="relative overflow-hidden">
        <div
          className={`relative bg-zinc-800/50 ${
            isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes={
              isFeatured
                ? '(max-width: 768px) 100vw, 66vw'
                : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Título sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h3 className="font-bold text-lg md:text-xl text-white uppercase tracking-widest drop-shadow-lg">
              {title}
            </h3>
            {/* Barra decorativa estilo equalizador */}
            <div className="mt-3 flex items-end gap-0.5">
              {[2, 4, 6, 8, 10, 8, 6, 4, 2].map((h, i) => (
                <div
                  key={`eq-${i}`}
                  className="instrument-eq-bar w-1 rounded-full bg-amber-600/70"
                  style={{
                    height: `${h}px`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className="relative flex-1 p-5 md:p-6">
        <p className="text-zinc-400 text-[14px] leading-[1.65] line-clamp-3">
          {description}
        </p>
      </div>

      {/* Glow no hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:via-amber-600/5 group-hover:to-amber-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10" />
    </article>
  );
}
