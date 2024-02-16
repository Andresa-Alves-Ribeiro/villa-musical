import './globals.css'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: '400', })


export const metadata = {
  title: 'Villa Musical',
  description: 'A página virtual do projeto Villa Musical!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={syne.className}>{children}</body>
    </html>
  )
}
