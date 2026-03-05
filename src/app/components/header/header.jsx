'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/nova_logo.jpg'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { href: '/', label: 'Início' },
        { href: '/equipe', label: 'Equipe' },
        { href: '/cursos', label: 'Cursos' },
        { href: '#contato', label: 'Contato' },
    ]

    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full h-20 px-6 lg:px-16 bg-zinc-950/95 backdrop-blur-sm border-b border-white/[0.06]">
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <Image src={Logo} alt="Villa Musical" width={48} height={48} className="rounded-md object-cover" />
                    <div>
                        <span className="block text-white font-semibold tracking-tight text-lg" style={{ fontFamily: '"Cinzel", serif' }}>Villa Musical</span>
                        <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Prefeitura de Cosmópolis</span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-zinc-300 hover:text-white custom-link px-4 py-5 font-medium transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <button
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                >
                    <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-current rounded-full my-1 transition-all duration-200 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </button>
            </header>

            {/* Overlay do menu mobile */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-200 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Painel do menu mobile */}
            <nav
                className={`fixed top-20 right-0 bottom-0 z-40 w-full max-w-[280px] bg-zinc-950 border-l border-white/[0.06] md:hidden flex flex-col pt-6 px-4 transition-transform duration-200 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-label="Menu principal"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="text-base text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </>
    )
}