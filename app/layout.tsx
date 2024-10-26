import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar/page";
import Footer from '@/components/footer';
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata: Metadata = {
  title: `Xavoslab`,
  description: 'Upgrade skill & kompetensi kamu  dalam mendapatkan pekerjaan, menaikkan income, dan memulai usaha secara profesional dengan materi pembelajaran berkualitas dengan harga yang terjangkau.',
  icons: {
    icon: [
      'favicon.ico?v=4'
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ],
  },
  manifest: './site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

