import './globals.css'
import { Roboto } from 'next/font/google'
import Providers from '@/components/Providers'
import Page from '@/components/Page'
import Navbar from '@/components/navbar/Component'
import { Metadata } from 'next'

const BodyFont = Roboto({ subsets: ["latin"], weight: "700"})

export const metadata: Metadata = {
  viewport: {maximumScale: 1, width: "device-width"}
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${BodyFont.className} min-w-[320px]`}>
        <Providers>
          <Navbar />
          <Page>
            {children}
          </Page>
        </Providers>
      </body>
    </html>
  )
}
