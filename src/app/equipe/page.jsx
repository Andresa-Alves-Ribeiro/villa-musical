'use client';

import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/page';
import { PROFESSORES } from '../data/professores';
import {
  MusicNotes,
  PianoKeys,
  MicrophoneStage,
  GraduationCap,
  Sparkle,
} from '@phosphor-icons/react';

const PLACEHOLDER_IMG = 'https://picsum.photos/400/500?blur=2';

function needsUnoptimized(foto) {
  if (typeof foto !== 'string') return false;
  return foto.includes('fbcdn.net') || foto.includes('cdninstagram.com');
}

export default function EquipePage() {
  const featured = PROFESSORES.filter((p) => p.featured);
  const rest = PROFESSORES.filter((p) => !p.featured);

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Header />

      <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 60px,
                rgba(184, 134, 11, 0.4) 60px,
                rgba(184, 134, 11, 0.4) 61px
              )`,
            }}
          />
          <div className="absolute top-1/3 left-0 w-64 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
          <div className="absolute top-1/3 right-0 w-64 h-px bg-gradient-to-l from-amber-600/30 to-transparent" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-600/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800/30 bg-amber-950/20 mb-6">
            <GraduationCap className="text-amber-600/90" size={16} weight="duotone" />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-200/80">
              Nossa Equipe
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-5"
            style={{ fontFamily: 'var(--font-syne), Syne, sans-serif' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Nossa Equipe
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Músicos e educadores dedicados à formação humana através da arte
          </p>
          <div className="flex justify-center gap-2 mt-8">
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-transparent to-amber-600/60" />
            <Sparkle className="text-amber-600/70 w-4 h-4" weight="fill" />
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-l from-transparent to-amber-600/60" />
          </div>

          <div className="flex items-end justify-center gap-1 mt-10 h-10">
            {[4, 8, 12, 16, 20, 16, 12, 8, 4].map((h, i) => (
              <div
                key={`hero-eq-${i}-${h}`}
                className="instrument-eq-bar w-1 rounded-full bg-gradient-to-t from-amber-900/80 to-amber-600/60"
                style={{ height: `${h}px`, animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0 64L60 56C120 48 240 32 360 28C480 24 600 32 720 36C840 40 960 40 1080 36C1200 32 1320 24 1380 20L1440 16V64H0Z"
              fill="#0c0c0c"
            />
          </svg>
        </div>
      </section>

      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
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
          <div className="absolute top-20 right-0 w-72 h-px bg-gradient-to-l from-amber-600/15 to-transparent" />
          <div className="absolute bottom-32 left-0 w-64 h-px bg-gradient-to-r from-amber-600/10 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto space-y-24">
          {featured.map((prof, index) => (
            <article
              key={prof.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-900/25 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                <div className="relative p-2 rounded-2xl bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-transparent border border-amber-700/25">
                  <div className="absolute -top-2 -right-2 w-10 h-10 border-t border-r border-amber-600/40 rounded-tr-xl" />
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b border-l border-amber-600/40 rounded-bl-xl" />
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src={prof.foto || PLACEHOLDER_IMG}
                      alt={prof.nome}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized={needsUnoptimized(prof.foto)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end gap-0.5">
                        {[2, 5, 8, 11, 8, 5, 2].map((h, i) => (
                          <div
                            key={`eq-${prof.id}-${h}-${i}`}
                            className="instrument-eq-bar w-1 rounded-full bg-amber-600/80"
                            style={{ height: `${h}px`, animationDelay: `${i * 0.05}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <MusicNotes
                  className="absolute -top-4 -right-2 text-amber-500/40 w-10 h-10"
                  size={40}
                  weight="thin"
                />
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-syne), Syne, sans-serif' }}
                    >
                      {prof.nome}
                    </h2>
                    <div className={`flex flex-wrap gap-2 min-w-0 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {(prof.cargo ? [prof.cargo] : (prof.instrumentos || [])).map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-900/40 border border-amber-700/30 text-amber-200/90"
                        >
                          <PianoKeys size={12} weight="duotone" className="text-amber-500/80" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-[15px] leading-[1.75]">
                    {prof.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-zinc-950/50">
        <div className="relative max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-800/30 bg-amber-950/20 mb-6">
              <MicrophoneStage className="text-amber-600/90" size={16} weight="duotone" />
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-200/80">
                Equipe Villa Musical
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne), Syne, sans-serif' }}
            >
              Conheça todos os <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">integrantes</span>
            </h2>
            <div className="flex justify-center gap-2 mt-6">
              <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
              <div className="h-0.5 w-16 rounded-full bg-amber-500/50" />
              <div className="h-0.5 w-8 rounded-full bg-amber-600/60" />
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {rest.map((prof, index) => (
              <article
                key={prof.id}
                className="equipe-card group relative overflow-hidden rounded-2xl border border-amber-800/20 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm instrument-card-villa"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="absolute top-0 right-0 z-20 w-10 h-10 border-t border-r border-amber-600/30 rounded-tr-2xl opacity-80" />
                <div className="absolute bottom-0 left-0 z-20 w-10 h-10 border-b border-l border-amber-600/30 rounded-bl-2xl opacity-80" />
                <MusicNotes
                  className="absolute top-3 right-3 z-10 w-5 h-5 text-amber-500/30 group-hover:text-amber-500/50 transition-colors"
                  weight="thin"
                />

                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={prof.foto || PLACEHOLDER_IMG}
                    alt={prof.nome}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized={needsUnoptimized(prof.foto)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg text-white truncate">{prof.nome}</h3>
                    <div className="flex items-end gap-0.5 mt-2">
                      {[1, 3, 5, 7, 5, 3, 1].map((h, i) => (
                        <div
                          key={`card-eq-${prof.id}-${h}-${i}`}
                          className="instrument-eq-bar w-0.5 rounded-full bg-amber-600/70"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {(prof.cargo ? [prof.cargo] : (prof.instrumentos || [])).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-amber-900/40 border border-amber-700/30 text-amber-200/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
