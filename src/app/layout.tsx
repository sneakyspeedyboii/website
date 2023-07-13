import { Metadata } from 'next';
import './globals.css'
import { Silkscreen, Inter } from 'next/font/google'

export const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"]
});
export const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'SneakySpeedyBoii',
  description: 'SneakySpeedyBoii&apos;s Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
