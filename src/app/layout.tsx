import { Silkscreen, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script';

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
      <Script async src="https://umami.sneakyspeedyboii.com/script.js" data-website-id="a3290c6c-2952-4eb3-9d48-9d7c8a146269"/>
    </html>
  )
}
