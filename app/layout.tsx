import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script, Cormorant_Garamond, Crimson_Text, Great_Vibes, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
})

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
})

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-text',
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Fotografi dhe Videografi Martesore Profesionale',
  description: 'Shërbime profesionale fotografike dhe videografike për martesa. Kapni momentet tuaja të veçanta me elegancë dhe art.',
  keywords: 'fotografi martesore, videografi martesore, martesa luksoze, fotograf profesionist, Albania',
  authors: [{ name: 'Studio Fotografike Martesore' }],
  openGraph: {
    title: 'Fotografi dhe Videografi Martesore Profesionale',
    description: 'Shërbime profesionale fotografike dhe videografike për martesa. Kapni momentet tuaja të veçanta me elegancë dhe art.',
    type: 'website',
    locale: 'sq_AL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq" className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${cormorantGaramond.variable} ${crimsonText.variable} ${greatVibes.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
