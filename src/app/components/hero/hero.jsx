'use client';

import Image from 'next/image';
import Logo from '../../assets/nova_logo.jpg';
import HeroBg from '../../assets/heitor.png';
import { MusicNotes } from '@phosphor-icons/react';

const HERO_CONFIG = {
  badge: 'Escola Municipal de Música de Cosmópolis “Heitor Villa-Lobos”',
  logoAlt: 'Villa Musical - Escola de Música de Cosmópolis',
  title: 'Formação humana através da música',
  subtitle: 'Aulas gratuitas de instrumentos musicais, coral, orquestra e musicalização infantil para cosmopolitanos',
};

export default function HeroSection() {
  return (
    <section className="hero-villa relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HeroBg}
          alt=""
          fill
          priority
          className="object-cover hero-bg-image"
          style={{ opacity: 0.3 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 hero-gradient-overlay"
          style={{
            background:
              'linear-gradient(135deg, rgba(5, 5, 5, 0.45) 0%, rgba(10, 10, 10, 0.35) 50%, rgba(5, 5, 5, 0.45) 100%)',
          }}
        />
        {/* Vignette dourada sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 50% 20%, rgba(184, 134, 11, 0.08), transparent 50%), radial-gradient(ellipse 100% 50% at 100% 80%, rgba(184, 134, 11, 0.04), transparent 40%)',
          }}
        />
      </div>

      <div className="hero-staff-lines absolute inset-0 pointer-events-none" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`staff-${i}`}
            className="hero-staff-line absolute left-0 right-0 h-px opacity-[0.03]"
            style={{
              top: `${18 + i * 3}%`,
              background: 'linear-gradient(90deg, transparent, rgba(184, 134, 11, 0.8), transparent)',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-eq-bars absolute bottom-24 right-6 md:right-12 lg:right-16 flex items-end gap-1 h-16 opacity-20">
        {[3, 6, 9, 12, 8, 14, 6, 10, 4].map((h, i) => (
          <div
            key={`eq-${i}-${h}`}
            className="w-1 rounded-full bg-gradient-to-t from-amber-900/80 to-amber-600/60 hero-eq-bar"
            style={{ height: `${h * 4}px`, animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>

      <div className="hero-content-wrapper relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] pt-28 pb-32 px-6">
        <div className="hero-content max-w-3xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 mb-10 rounded-full border border-amber-900/40 bg-black/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600/80 animate-pulse" />
            <p className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-zinc-400">
              {HERO_CONFIG.badge}
            </p>
          </div>

          <div className="hero-logo-stage relative inline-block mb-12">
            <div className="hero-logo-glow absolute -inset-6 rounded-3xl" />
            <div className="hero-logo-frame relative rounded-2xl p-1 bg-gradient-to-br from-amber-900/30 via-amber-800/10 to-transparent border border-amber-800/20">
              <Image
                src={Logo}
                alt={HERO_CONFIG.logoAlt}
                className="relative rounded-xl w-full max-w-xs md:max-w-md shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="hero-title font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] max-w-2xl mx-auto">
            <span className="hero-title-gradient">{HERO_CONFIG.title}</span>
          </h1>

          <p className="hero-subtitle mt-7 text-base md:text-lg text-zinc-400/90 max-w-xl mx-auto leading-relaxed font-light">
            {HERO_CONFIG.subtitle}
          </p>

          <div className="hero-divider mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/50 rounded-full" />
            <div className="w-2 h-2 rotate-45 border border-amber-700/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/50 rounded-full" />
          </div>
        </div>
      </div>

      <div className="hero-wave-divider absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0c0c0c"
          />
          <path
            d="M0 90L48 85C96 80 192 70 288 65C384 60 480 60 576 67.5C672 75 768 90 864 92.5C960 95 1056 85 1152 77.5C1248 70 1344 65 1392 62.5L1440 60V120H0V90Z"
            fill="rgba(12, 12, 12, 0.7)"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
