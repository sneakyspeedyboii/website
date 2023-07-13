import { Silkscreen, Inter } from 'next/font/google'
import './globals.css'

export const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"]
});
export const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SneakySpeedyBoii</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
