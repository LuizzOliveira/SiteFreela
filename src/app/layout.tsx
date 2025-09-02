import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Fonts (nomes consistentes para SSR e client)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'BIOAMA – Consultoria Ambiental',
  description:
    'A BIOAMA é uma empresa altamente especializada na prestação de serviços de assessoria e consultoria de meio ambiente, proporcionando soluções para diversos segmentos na área ambiental.',
  keywords:
    'consultoria ambiental, licenciamento ambiental, perícia ambiental, topografia, segurança do trabalho, BIOAMA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-body">
        {/* Use client-only para componentes que dependem de window, Date ou random */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
