'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/nova_logo.jpg';
import { MusicNotes, FacebookLogo, InstagramLogo, MapPin, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { CONTACT_INFO } from '../../data/contact';

const NAV_ITEMS = [
    { href: '/', label: 'Início' },
    { href: '/equipe', label: 'Equipe' },
    { href: '/cursos', label: 'Cursos' },
    { href: '#contato', label: 'Contato' },
];

const SOCIAL_ICONS = {
    Facebook: FacebookLogo,
    Instagram: InstagramLogo,
};

export default function Footer() {
    const { address, email, phone, social } = CONTACT_INFO;

    return (
        <footer className="relative overflow-hidden">
            {/* Divisor superior — onda musical */}
            <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none -translate-y-px">
                <svg viewBox="0 0 1440 80" fill="none" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        d="M0 80L48 65C96 50 192 20 288 15C384 10 480 30 576 45C672 60 768 70 864 65C960 60 1056 40 1152 30C1248 20 1344 20 1392 20L1440 20V80H0Z"
                        fill="#09090b"
                    />
                    <path
                        d="M0 55L60 52C120 49 240 43 360 40C480 37 600 37 720 42C840 47 960 57 1080 60C1200 63 1320 59 1380 57L1440 55V80H0V55Z"
                        fill="rgba(9, 9, 11, 0.6)"
                        opacity="0.6"
                    />
                </svg>
            </div>

            {/* Fundo — pautas musicais sutis */}
            <div className="relative bg-zinc-950 pt-20 pb-12 px-6">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.015]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 56px,
              rgba(184, 134, 11, 0.5) 56px,
              rgba(184, 134, 11, 0.5) 57px
            )`,
                    }}
                />

                <div className="relative max-w-7xl mx-auto">
                    {/* Conteúdo principal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-14 border-b border-white/[0.06]">
                        {/* Marca + logo */}
                        <div className="lg:col-span-1 flex flex-col items-center md:items-start">
                            <Link href="/" className="flex flex-col items-center md:items-start gap-4 group">
                                <div className="relative">
                                    <div className="absolute -inset-3 rounded-2xl bg-amber-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative p-1.5 rounded-xl bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-800/20">
                                        <Image
                                            src={Logo}
                                            alt="Villa Musical"
                                            width={72}
                                            height={72}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <span
                                        className="block text-white font-semibold text-xl tracking-tight"
                                        style={{ fontFamily: '"Cinzel", serif' }}
                                    >
                                        Villa Musical
                                    </span>
                                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                                        Escola Municipal de Música
                                    </span>
                                </div>
                            </Link>
                            {/* Equalizador decorativo */}
                            <div className="flex items-end justify-center md:justify-start gap-1 mt-6">
                                {[3, 6, 9, 12, 9, 6, 3].map((h, i) => (
                                    <div
                                        key={`footer-eq-${h}-${i}`}
                                        className="instrument-eq-bar w-1.5 rounded-full bg-gradient-to-t from-amber-900/70 to-amber-600/50"
                                        style={{ height: `${h}px`, animationDelay: `${i * 0.06}s` }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Navegação rápida */}
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <MusicNotes className="text-amber-600/80" size={18} weight="duotone" />
                                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-200/70">
                                    Navegação
                                </h3>
                            </div>
                            <nav className="space-y-2" aria-label="Links do rodapé">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block text-sm text-zinc-400 hover:text-amber-200/90 hover:translate-x-1 transition-all duration-200 w-fit"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contato */}
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <MusicNotes className="text-amber-600/80" size={18} weight="duotone" />
                                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-200/70">
                                    Contato
                                </h3>
                            </div>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="text-amber-600/60 shrink-0 mt-0.5" size={16} weight="duotone" />
                                    <span className="whitespace-pre-line leading-relaxed">{address.value}</span>
                                </li>
                                <li>
                                    <a
                                        href={email.href}
                                        className="flex items-center gap-3 hover:text-amber-200/90 transition-colors"
                                    >
                                        <EnvelopeSimple className="text-amber-600/60 shrink-0" size={16} weight="duotone" />
                                        {email.value}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={phone.href}
                                        className="flex items-center gap-3 hover:text-amber-200/90 transition-colors"
                                    >
                                        <Phone className="text-amber-600/60 shrink-0" size={16} weight="duotone" />
                                        {phone.value}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Redes + institucional */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-5">
                                    <MusicNotes className="text-amber-600/80" size={18} weight="duotone" />
                                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-200/70">
                                        Redes Sociais
                                    </h3>
                                </div>
                                <div className="flex gap-3">
                                    {social.links.map((link) => {
                                        const Icon = SOCIAL_ICONS[link.label];
                                        return (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-11 h-11 rounded-xl border border-amber-800/25 bg-amber-950/30 text-amber-400/80 hover:text-amber-200 hover:border-amber-600/50 hover:bg-amber-900/40 transition-all duration-300"
                                                aria-label={link.label}
                                            >
                                                <Icon size={22} weight="fill" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/[0.04]">
                                <p className="text-[11px] text-zinc-500 leading-relaxed">
                                    Projeto da{' '}
                                    <strong className="text-zinc-400">Secretaria Municipal de Educação</strong> de Cosmópolis
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rodapé inferior */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-px w-6 bg-gradient-to-r from-amber-600/50 to-transparent rounded-full" />
                            <p className="text-zinc-500 text-[13px]">
                                © {new Date().getFullYear()} Villa Musical
                            </p>
                            <div className="h-px w-6 bg-gradient-to-l from-amber-600/50 to-transparent rounded-full" />
                        </div>
                        <p className="text-zinc-600 text-xs">
                            Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
