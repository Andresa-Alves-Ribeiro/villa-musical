import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-end items-end w-full h-14 text-md bg-transparent">
            <nav className="flex gap-8 mr-8">
                <Link href="/" className="text-white relative transition-colors duration-300 transition-border-color custom-link hover:text-amber-300">
                    Home
                </Link>

                <Link href="/professores" className="text-white relative transition-colors duration-300 transition-border-color custom-link hover:text-amber-300">
                    Professores
                </Link>

                <Link href="/cursos" className="text-white relative transition-colors duration-300 transition-border-color custom-link hover:text-amber-300">
                    Cursos
                </Link>

                <Link href="/noticias" className="text-white relative transition-colors duration-300 transition-border-color custom-link hover:text-amber-300">
                    Notícias
                </Link>

                <Link href="#contato" className="text-white relative transition-colors duration-300 transition-border-color custom-link hover:text-amber-300">
                    Contato
                </Link>
            </nav>
        </header>
    )
}