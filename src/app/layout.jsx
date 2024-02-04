import './globals.css'
import { Roboto, Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400', })


export const metadata = {
  title: 'Villa Musical',
  description: 'A página virtual do projeto Villa Musical!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
