import type { Metadata } from 'next'
import '../globals.css'
import { ThemeProvider } from '../components/ThemeProvider/page'
import { AuthProvider } from '../context/AuthContext'

export const metadata: Metadata = {
  title: 'Bytebit Media Art - Professional Web Solutions',
  description: 'Transform your vision into reality with cutting-edge web solutions',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}