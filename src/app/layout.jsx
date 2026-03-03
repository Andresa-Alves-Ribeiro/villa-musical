import './globals.css'
import { Source_Sans_3, Syne } from 'next/font/google'

const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' })

export const metadata = {
  title: 'Villa Musical',
  description: 'A página virtual do projeto Villa Musical!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${sourceSans.className} ${syne.variable}`}>{children}</body>
    </html>
  )
}
