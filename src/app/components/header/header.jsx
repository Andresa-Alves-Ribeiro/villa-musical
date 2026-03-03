import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/nova_logo.jpg'

export default function Header() {
    const navItems = [
        { href: '/', label: 'Início' },
        { href: '/professores', label: 'Professores' },
        { href: '/cursos', label: 'Cursos' },
        { href: '/noticias', label: 'Notícias' },
        { href: '#contato', label: 'Contato' },
    ]

    return (
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
        </header>
    )
}