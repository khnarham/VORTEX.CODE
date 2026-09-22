import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'VortexCode',
  description: 'Solution for Bussiness to Improve their application performance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#0e0e10] text-[#a1a1aa] font-sans antialiased selection:bg-[#32CD32] selection:text-black">
        <SmoothScroll>
    <CustomCursor />
        {children}
        </SmoothScroll>
      </body>
    </html>
  )
}