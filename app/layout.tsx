import type { Metadata } from 'next'
import { Noto_Sans_JP, Murecho } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })
// const mPlus1c = M_PLUS_1({ subsets: ['latin'] })
const murecho = Murecho({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WHITE SKY',
  description: 'WHITE SKY',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
