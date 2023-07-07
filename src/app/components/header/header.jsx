import Image from 'next/image'
import Logo from '../../assets/logo1-teste.png'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full h-24 text-md">
            <div className="pl-8">
                <Image src={Logo} width={80} height={60} alt="Logo do Villa Musical" className="logo" href="/" />
            </div>

            <nav className="flex mr-8 gap-8">
                <Link href="/" className="relative transition-colors duration-300 transition-border-color custom-link hover:text-teal-600">
                    Home
                </Link>

                <Link href="/professores" className="relative transition-colors duration-300 transition-border-color custom-link hover:text-teal-600">
                    Professores
                </Link>

                <Link href="/cursos" className="relative transition-colors duration-300 transition-border-color custom-link hover:text-teal-600">
                    Cursos
                </Link>

                <Link href="/noticias" className="relative transition-colors duration-300 transition-border-color custom-link hover:text-teal-600">
                    Notícias
                </Link>

                <Link href="/contato" className="relative transition-colors duration-300 transition-border-color custom-link hover:text-teal-600">
                    Contato
                </Link>
            </nav>
        </header>
    )
}