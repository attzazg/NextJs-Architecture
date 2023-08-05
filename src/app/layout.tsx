import '@/styles/global/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My First app Attzaz',
  description: 'My First app Attzaz Desc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />        
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>        
        </body>
    </html>
  )
}
