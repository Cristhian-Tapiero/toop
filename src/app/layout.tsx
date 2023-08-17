import './globals.css'
import { Providers } from './providers'
import Navigation from '@/components/navigation'
export const metadata = {
  title: 'Cristhian Tapiero',
  description: 'POO con principios SOLID',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="vercel.svg" type="image/x-icon" />
      </head>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
